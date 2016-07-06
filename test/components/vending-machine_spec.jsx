import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {findWithType, findWithClass} from 'react-shallow-testutils';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import {assert, expect} from 'chai';
import VendingMachine from '../../src/components/vending-machine';

let expectedProps ={
        rootContainer: {
            props : {
                css_class: 'container-container',
                style: {margin:'auto', width:'90%',backgroundColor:'gray'}
            },
        },
        displayContainer: {
            props : {
                css_class: 'display-container',
                style: {float:'left', width:'45%', padding: '15px'}
            },
            defaultMessage:'INSERT COIN',
            balance: '0.00',
            selectedProduct: 'NONE', 
            coinReturn:'0.00',
            vend: 'EMPTY'
        },
        productsContainer:{
            props : {
                css_class: 'products-div',
            },
            products: [{'name': 'cola' , 'price': '1.00'},
                       {'name': 'chips', 'price': '1.50'}, 
                       {'name': 'candy', 'price': '0.65'}]    
        },
        coinContainer:{
            props : {
                css_class: 'coins-container',
                style: {float:'left', width:'45%', padding: '15px'}
            },
            coins: [
                {'name'     : 'Quarter',
                 'value'    : '25',
                 'weight'   : '5.670',
                 'diameter' : '24.26',
                 'valid'    : 'valid'},
                {'name'     : 'Dime',
                 'value'    : '10',
                 'weight'   : '2.268',
                 'diameter' : '17.91',
                 'valid'    : 'valid'},
                {'name'     : 'Nickel',
                 'value'    : '5',
                 'weight'   : '5.000',
                 'diameter' : '21.21',
                 'valid'    : 'valid'},
                {'name'     : 'Penny',
                 'value'    : '.01',
                 'weight'   : '2.500',
                 'diameter' : '19.05',
                 'valid'    : 'in-valid'},
            ]
        },
        clickHandler:  function(reducer){

            var [action, object] = reducer,
                update,
                message = '';
                switch(action){
                    case 'coin':
                        switch(object.weight){
                            case '5.670':
                                update = {
                                    displayContainer:{
                                        balance: (Number(expectedProps.displayContainer.balance) + 0.25 ).toFixed(2) ,   
                                        selectedProduct: expectedProps.displayContainer.selectedProduct, 
                                        defaultMessage:expectedProps.displayContainer.defaultMessage,
                                        coinReturn: expectedProps.displayContainer.coinReturn, 
                                        vend: expectedProps.displayContainer.vend }
                                };
                                break;
                            case '2.268':
                                update = {
                                    displayContainer:{
                                        balance: (Number(expectedProps.displayContainer.balance) + 0.10 ).toFixed(2) ,  
                                        selectedProduct: expectedProps.displayContainer.selectedProduct, 
                                        defaultMessage:expectedProps.displayContainer.defaultMessage,
                                        coinReturn: expectedProps.displayContainer.coinReturn, 
                                        vend: expectedProps.displayContainer.vend }
                                };
                                break;
                            case '5.000':
                                update = {
                                    displayContainer:{
                                        balance: (Number(expectedProps.displayContainer.balance) + 0.05).toFixed(2) , 
                                        selectedProduct: expectedProps.displayContainer.selectedProduct, 
                                        defaultMessage:expectedProps.displayContainer.defaultMessage,
                                        coinReturn: expectedProps.displayContainer.coinReturn, 
                                        vend: expectedProps.displayContainer.vend }
                                };
                                break;
                            default:
                                //console.log('COIN RETURN !!!!!');
                                update = {
                                    displayContainer:{
                                        balance: (Number(expectedProps.displayContainer.balance) ).toFixed(2) , 
                                        selectedProduct: expectedProps.displayContainer.selectedProduct, 
                                        defaultMessage:expectedProps.displayContainer.defaultMessage}
                                };
                        }
                        break;
                    case 'product':
                        //console.log('###############Product');
                        update = {
                            displayContainer:{
                                balance: (Number(expectedProps.displayContainer.balance) ).toFixed(2) , 
                                selectedProduct: object.product, 
                                defaultMessage:expectedProps.displayContainer.defaultMessage,
                                coinReturn: expectedProps.displayContainer.coinReturn, 
                                vend: expectedProps.displayContainer.vend }
                        };
                        break;
                    case 'clear':
                        break;
                    default:
                        //console.log('------------outer default');
                }
            //console.log('coinClickHandler:');
            //console.log('coin info: https://www.usmint.gov/about_the_mint/?action=coin_specifications');
            //console.log('-------------+\n'+ new Date().getTime());
            //console.log(object);

            return  update
            return {update: update, message: message}
        }
    };

   const onButtonClick = sinon.spy();
   const expectedProps_with_spy = Object.assign({}, expectedProps, {clickHandler: onButtonClick})

   const wrapper = shallow(<VendingMachine {...expectedProps_with_spy }/>);

describe.only('Vending Machine Kata component is rendered:', () => {
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
                            coinContainer.children().forEach((c,i) =>{
                                expect(c.type()).to.equal('button')
                                expect(c.text()).to.equal(expectedProps.coinContainer.coins[i].name)
                                expect(c.props().onClick).to.be.ok
                                expect(Number(c.key())).to.equal(i)
                            });
                            //TODO: reject pennies
                        it('should reject invalid coins (pennies).',()=>{

                        });
                        it('should display "INSERT COIN" when no coins are inserted',()=>{
                            const displayContainer = wrapper.find('.display-container');
                            expect(displayContainer.length).to.equal(1);
                            expect(displayContainer.props().className).to.equal(expectedProps.displayContainer.props.css_class)
                            expect(displayContainer.props().style).to.equal(expectedProps.displayContainer.props.style)
                            expect(displayContainer.text()).to.equal('Display: '+expectedProps.displayContainer.defaultMessage)
                        });
                        it('should update disply when valid coin is inserted.',()=>{});
                            let bal = { props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
                                        defaultMessage:'INSERT COIN',
                                        balance: '0.10',
                                        selectedProduct: 'NONE', 
                                        coinReturn:'0.00',
                                        vend: 'EMPTY' }
                            const expectedProps_w_spy = Object.assign({}, expectedProps, {displayContainer: bal})
                            const wrapper2 = shallow(<VendingMachine {...expectedProps_w_spy}/>);
                            const displayContainer2 = wrapper2.find('.display-container');
                            expect(displayContainer2.text()).to.equal('Display: '+expectedProps_w_spy.displayContainer.balance)
                        //it('should place rejected coins in coin return',()=>{});
                            //var thing = expectedProps.clickHandler('coin',{'weight': 5.670})
                            //console.log(thing);
                            

                    });
                });
            });
        });
        //describe('Select Product:',()=>{
        //    describe('As a vendor,',()=>{
        //        describe('I want customers to select products.',()=>{
        //            describe('So that I can collect money from the customer',()=>{
        //                it('should display three products [{cola: $1.00},{chips: $1.50}, {candy: $0.65}]',()=>{});
        //                it('should despense product and display "Thank YOU" given enough money.',()=>{});
        //                it('should diplay "INSERT COIN" and set current ammount back to $0.00 when display is checked again.',()=>{});
        //                it('should display PRICE and the price of the item if there is not enough money inserted, subsequent checks of the display will display either INSERT COIN or the current amount as appropriate.',()=>{});
        //                it('TODO',()=>{});
        //            });
        //        });
        //    });
        //});
        //describe('Return Coins',()=>{
        //    describe('As a customer',()=>{
        //        describe('I want to have my money returned',()=>{
        //            describe('So that I can change my mind about buying stuff from the vending machine',()=>{
        //                it('TODO',()=>{});
        //            });
        //        });
        //    });
        //});
        //describe('Sold Out',()=>{
        //    describe('As a customer ',()=>{
        //        describe('I want to be told when the item I have selected is not available ',()=>{
        //            describe('So that I can select another item ',()=>{
        //                it('TODO',()=>{});
        //            });
        //        });
        //    });
        //});
        //describe('Exact Change Only ',()=>{
        //    describe('As a customer ',()=>{
        //        describe('I want to be told when exact change is required ',()=>{
        //            describe('So that I can determine if I can buy something with the money I have before inserting it ',()=>{
        //                it('TODO',()=>{});
        //            });
        //        });
        //    });
        //});
    });
});


