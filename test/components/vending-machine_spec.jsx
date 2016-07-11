import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {findWithType, findWithClass} from 'react-shallow-testutils';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import {assert, expect} from 'chai';
import VendingMachine from '../../src/components/vending-machine';

//const {data} = require('../../src/data');
console.log('===============================================================');
//console.log(data);

let expectedProps ={
        rootContainer: { props : { css_class: 'container-container', style: {margin:'auto', width:'90%',backgroundColor:'gray'} }, },
        displayContainer: {
            props : { css_class: 'display-container', style: {width:'45%', padding: '15px'} },
            message:'INSERT COIN',
            balance: '0.00',
            selectedProduct: 'NONE', 
            vend: 'EMPTY'
        },
        coinReturnContainer: {
            props : { css_class: 'return-container', style: {float:'left',width:'45%', padding: '15px'} },
            coinReturn:'0.00'
        },
        productsContainer:{
            props : { css_class: 'products-container',style: {float:'left', width: '50%', height:'600px', border: '3px', backgroundColor:'#222'} },
            products: [{'name': 'cola' , 'price': '1.00'},
                       {'name': 'chips', 'price': '1.50'}, 
                       {'name': 'candy', 'price': '0.65'}]    
        },
        coinContainer:{
            props : { css_class: 'coins-container', style: {float:'left', width:'45%', padding: '15px'} },
            coins: [
                {'name'     : 'Quarter', 'value'    : '0.25', 'weight'   : '5.670', 'diameter' : '24.26', 'valid'    : 'valid'   },
                {'name'     : 'Dime'   , 'value'    : '0.10', 'weight'   : '2.268', 'diameter' : '17.91', 'valid'    : 'valid'   },
                {'name'     : 'Nickel' , 'value'    : '0.05', 'weight'   : '5.000', 'diameter' : '21.21', 'valid'    : 'valid'   },
                {'name'     : 'Penny'  , 'value'    : '0.01', 'weight'   : '2.500', 'diameter' : '19.05', 'valid'    : 'in-valid'},
            ]
        },
        clickHandler:  function(reducer){

            var [action, object] = reducer,
                update,
                {props,balance,message,selectedProduct,vend}=this.props.displayContainer,
                coinReturn;
            switch(action){
                case 'coin':
                    switch(object.weight){
                        case '5.670':
                            message = '$'+(balance = (Number(balance) + 0.25 ).toFixed(2))   
                            //console.log(message)
                            break;
                        case '2.268':
                            message = '$'+(balance = (Number(balance) + 0.10 ).toFixed(2))   
                            break;
                        case '5.000':
                            message = '$'+(balance = (Number(balance) + 0.05 ).toFixed(2))   
                            break;
                        default:
                            //console.log('COIN RETURN !!!!!');
                            message = Number(balance)? '$'+(balance = (Number(balance)).toFixed(2)) : 'INSERT COIN'  
                            coinReturn = (Number(this.props.coinReturnContainer.coinReturn) + 0.01 ).toFixed(2);   
                            break;
                    }break;
                case 'product':
                    selectedProduct = object
                    balance = this.props.displayContainer.balance
                    if(Number(balance) >= Number(selectedProduct.price) ){
                        vend = selectedProduct.product
                        coinReturn = balance - selectedProduct.price
                        balance = '0.00'
                        message='THANK YOU!'
                    } else if(Number(balance) < Number(selectedProduct.price) ){
                        //console.log('Number(balance)')
                        //console.log(Number(balance))
                        //console.log('Number(selectedProduct.price)')
                        //console.log(Number(selectedProduct.price))
                        //console.log('llllllllllllllllleeeeeeeeeeeeeeeesssssssssssssssssss')
                        message='PRICE $'+selectedProduct.price
                    }
                    //console.log('###############message');
                    //console.log(message);
                    //console.log('###############balance');
                    //console.log(balance );
                    //console.log('###############Product');
                    //console.log(selectedProduct );
                    //console.log('###############vend');
                    //console.log(vend);
                    //console.log('======================');
                    break;
                case 'clear':
                    break;
                default:
                    console.log('------------outer default');
            }
            update = {
                displayContainer: {
                    props : props,
                    message: message,
                    balance: balance,
                    selectedProduct: selectedProduct,
                    vend: vend,
                },
                coinReturnContainer: {
                    props : { css_class: 'return-container', style: {float:'left', width:'45%', padding: '15px'} },
                    coinReturn: coinReturn?Number(coinReturn).toFixed(2) : Number(this.props.coinReturnContainer.coinReturn).toFixed(2)
            }}
            //console.log('------update')
            //console.log(update)
            //console.log('coinClickHandler:');
            //console.log('coin info: https://www.usmint.gov/about_the_mint/?action=coin_specifications');
            //console.log('-------------+\n'+ new Date().getTime());
            //console.log(object);
            //console.log('balance: '+update.displayContainer.balance);
            //console.log('coinReturn: '+update.coinReturnContainer.coinReturn);
            const expectedProps_w_update =  Object.assign( {}, expectedProps, update )
            wrapper = mount(<VendingMachine {...expectedProps_w_update }/>);
        }
    };


   let wrapper = mount(<VendingMachine {...expectedProps}/>);

describe('Vending Machine Kata component is rendered:', () => {
    it('should render a container div with className and style props', () => {
        const containerContainer = wrapper.find('.container-container');
        expect(containerContainer).to.have.length(1);
        expect(containerContainer.props().className).to.equal(expectedProps.rootContainer.props.css_class)
        expect(containerContainer.props().style).to.equal(expectedProps.rootContainer.props.style)
    });
    describe('Features',()=>{
        describe('Accepts Coins:',()=>{
            describe('As a vendor, ',()=>{
                describe('I want a vending machine that accepts coins.',()=>{
                    describe('So that I can collect money from the customer.',()=>{
                        it('should accept valid coins (nickles, dimes, and quarters).',()=>{});
                            const coinContainer = wrapper.find('.coins-container');
                            expect(coinContainer.length).to.equal(1);
                            expect(coinContainer.props().className).to.equal(expectedProps.coinContainer.props.css_class)
                            expect(coinContainer.props().style).to.equal(expectedProps.coinContainer.props.style)
                            expect(coinContainer.children().length).to.equal(4); 

                        it('should display "INSERT COIN" when no coins are inserted',()=>{
                            //rerender with expected props to ensure clean state
                            wrapper = mount(<VendingMachine {...expectedProps}/>) 
                            const displayContainer = wrapper.find('.display-container');
                            expect(displayContainer.length).to.equal(1);
                            expect(displayContainer.props().className).to.equal(expectedProps.displayContainer.props.css_class)
                            expect(displayContainer.props().style).to.equal(expectedProps.displayContainer.props.style)
                            expect(displayContainer.text()).to.equal('Display: '+expectedProps.displayContainer.message)
                        });
                        it('should update disply when valid coin is inserted or place rejected coins in coin return',()=>{

                            const coinContainer = wrapper.find('.coins-container');
                            coinContainer.children().forEach((c,i) =>{
                                expect(c.type()).to.equal('button')
                                expect(c.text()).to.equal(expectedProps.coinContainer.coins[i].name)
                                expect(c.props().onClick).to.be.ok
                                expect(Number(c.key())).to.equal(i)
                                c.simulate('click');
                                const displayContainer = wrapper.find('.display-container');
                                //console.log('displayContainer.text()')
                                //console.log(displayContainer.text())
                                //console.log('displayContainer.props()')
                                //console.log(displayContainer.props().children[1])
                                expect(displayContainer.text()).to.equal('Display: '+displayContainer.props().children[1])
                                const expectedReturnDisplay = expectedProps.coinContainer.coins[i].value <= 0.01 ? +expectedProps.coinContainer.coins[i].value: '0.00';
                                const coinReturnContainer = wrapper.find('.return-container');
                                expect(coinReturnContainer.props().className).to.equal(expectedProps.coinReturnContainer.props.css_class)
                                expect(coinReturnContainer.text()).to.equal('CoinReturn: $'+expectedReturnDisplay+'Return')
                            });
                        });
                    });
                });
            });
        });
        describe('Select Product:',()=>{
            describe('As a vendor,',()=>{
                describe('I want customers to select products.',()=>{
                    describe('So that I can collect money from the customer',()=>{
                        it('should display three products [{cola: $1.00},{chips: $1.50}, {candy: $0.65}]',()=>{
                            const productsContainer = wrapper.find('.products-container');
                            expect(productsContainer.length).to.equal(1);
                            expect(productsContainer.props().className).to.equal(expectedProps.productsContainer.props.css_class)
                            expect(productsContainer.props().style).to.equal(expectedProps.productsContainer.props.style)
                            productsContainer.children().forEach((c,i) =>{
                                expect(c.type()).to.equal('button')
                                expect(c.text()).to.equal(expectedProps.productsContainer.products[i].name+'$'+expectedProps.productsContainer.products[i].price)
                                expect(c.props().onClick).to.be.ok
                            });
                        });
                        it('should despense product and display "Thank YOU" given enough money.',()=>{
                            wrapper = mount(<VendingMachine {...expectedProps}/>) 
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.products-container').childAt(0).simulate('click') 
                            expect(wrapper.find('.display-container').text()).to.equal('Display: '+wrapper.find('.display-container').props().children[1])
                            expect(wrapper.find('.display-container').text()).to.equal('Display: '+'THANK YOU!')
                        });
                        it('should diplay "INSERT COIN" and set current ammount back to $0.00 when display is checked again.',()=>{
                            wrapper = mount(<VendingMachine {...expectedProps}/>) 
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.products-container').childAt(0).simulate('click') 
                            expect(wrapper.find('.display-container').text()).to.equal('Display: '+wrapper.find('.display-container').props().children[1])
                            expect(wrapper.find('.display-container').text()).to.equal('Display: '+'THANK YOU!')
                        });
                        it('should display PRICE and the price of the item if there is not enough money inserted, subsequent checks of the display will display either INSERT COIN or the current amount as appropriate.',()=>{
                            wrapper = mount(<VendingMachine {...expectedProps}/>) 
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.coins-container').childAt(0).simulate('click')
                            wrapper.find('.products-container').childAt(0).simulate('click') 
                            //console.log('PRICE: $'+wrapper.find('.products-container').childAt(0).props().children[1].props.children[1])
                            //console.log(wrapper.find('.display-container').text())
                            expect(wrapper.find('.display-container').text())
                                .to.equal('Display: '+'PRICE $'+wrapper.find('.products-container').childAt(0).props().children[1].props.children[1])
                        });
                    });
                });
            });
        });
        describe('Return Coins',()=>{
            describe('As a customer',()=>{
                describe('I want to have my money returned',()=>{
                    describe('So that I can change my mind about buying stuff from the vending machine',()=>{
                        it('TODO',()=>{});
                    });
                });
            }); }); //describe('Sold Out',()=>{ //    describe('As a customer ',()=>{ //        describe('I want to be told when the item I have selected is not available ',()=>{ //            describe('So that I can select another item ',()=>{ //                it('TODO',()=>{}); //            }); //        }); //    }); //}); //describe('Exact Change Only ',()=>{ //    describe('As a customer ',()=>{ //        describe('I want to be told when exact change is required ',()=>{ //            describe('So that I can determine if I can buy something with the money I have before inserting it ',()=>{ //                it('TODO',()=>{}); //            }); //        }); //    });
        //});
    });
});


