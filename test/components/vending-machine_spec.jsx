import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {findWithType, findWithClass} from 'react-shallow-testutils';
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
            validCoins: [
                {'name'     : 'Quater',
                 'value'    : '25',
                 'weight'   : '5.670',
                 'diameter' : '24.26'},
                {'name'     : 'Dime',
                 'value'    : '10',
                 'weight'   : '2.268',
                 'diameter' : '17.91'},
                {'name'     : 'Nickel',
                 'value'    : '5',
                 'weight'   : '5.000',
                 'diameter' : '21.21'}
            ],
            invalidCoins: [
                {'name'     : 'Pennies',
                 'value'    : '.01',
                 'weight'   : '2.500',
                 'diameter' : '19.05'},
            ]
        },
        clickHandler:  function(reducer){

           // var [action, object] = reducer,
           //     update;
           //     switch(action){
           //         case 'coin':
           //             switch(object.weight){
           //                 case '5.670':
           //                     update = {
           //                         displayContainer:{
           //                             balance: (Number(this.props.displayContainer.balance) + 0.25 ).toFixed(2) ,   
           //                             selectedProduct: this.props.displayContainer.selectedProduct, 
           //                             defaultMessage:this.props.displayContainer.defaultMessage,
           //                             coinReturn: this.props.displayContainer.coinReturn, 
           //                             vend: this.props.displayContainer.vend }
           //                     };
           //                     break;
           //                 case '2.268':
           //                     update = {
           //                         displayContainer:{
           //                             balance: (Number(this.props.displayContainer.balance) + 0.10 ).toFixed(2) ,  
           //                             selectedProduct: this.props.displayContainer.selectedProduct, 
           //                             defaultMessage:this.props.displayContainer.defaultMessage,
           //                             coinReturn: this.props.displayContainer.coinReturn, 
           //                             vend: this.props.displayContainer.vend }
           //                     };
           //                     break;
           //                 case '5.000':
           //                     update = {
           //                         displayContainer:{
           //                             balance: (Number(this.props.displayContainer.balance) + 0.05).toFixed(2) , 
           //                             selectedProduct: this.props.displayContainer.selectedProduct, 
           //                             defaultMessage:this.props.displayContainer.defaultMessage,
           //                             coinReturn: this.props.displayContainer.coinReturn, 
           //                             vend: this.props.displayContainer.vend }
           //                     };
           //                     break;
           //                 default:
           //                     console.log('COIN RETURN !!!!!');
           //                     update = {
           //                         displayContainer:{
           //                             balance: (Number(this.props.displayContainer.balance) ).toFixed(2) , 
           //                             selectedProduct: this.props.displayContainer.selectedProduct, 
           //                             defaultMessage:this.props.displayContainer.defaultMessage}
           //                     };
           //             }
           //             break;
           //         case 'product':
           //             console.log('###############Product');
           //             update = {
           //                 displayContainer:{
           //                     balance: (Number(this.props.displayContainer.balance) ).toFixed(2) , 
           //                     selectedProduct: object.product, 
           //                     defaultMessage:this.props.displayContainer.defaultMessage,
           //                     coinReturn: this.props.displayContainer.coinReturn, 
           //                     vend: this.props.displayContainer.vend }
           //             };
           //             break;
           //         case 'clear':
           //             break;
           //         default:
           //             console.log('------------outer default');
           //     }
           // console.log('coinClickHandler:');
           // console.log('coin info: https://www.usmint.gov/about_the_mint/?action=coin_specifications');
           // console.log('-------------+\n'+ new Date().getTime());
           // console.log(object);

           // renderFunction(
           //     Object.assign( {}, expectedProps, update )
           // );
        }
    };

const renderer  = ReactTestUtils.createRenderer(),
      tree      = renderer.render(<VendingMachine {...expectedProps}/>),

      {type: root_type, 
          props : {className: root_className, children: root_children, style: root_style}}    = tree, // <=== multi-level destructuring!!!!  see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      [displayContainer,coinContainer, product,,,]               = root_children,

      {type      : coinContainerType } = coinContainer,
      {type      : displayContainerType, 
       className : displayContainerClassName,
       stle      : displayContainerStyle,
       props     : {children:  {props: {children: insert_coin}}}} = displayContainer;

   const {
       rootContainer   :{props:{css_class:expected_root_css_class, style: expected_root_style }},  
       displayContainer:{props:{css_class:expected_display_css_class, style: expected_display_style }},  
       coinContainer   :{props:{css_class:expected_coinContainer_css_class, style: expected_coinContainer_style }}  
   } = expectedProps

describe.only('Vending Machine Kata component is rendered:', () => {
    it('should render a container div', () => {
        expect(root_type).to.eql('div');
        expect(root_className).to.eql(expected_root_css_class);
        expect(root_style).to.eql(expected_root_style);
        assert(root_children.length > 0, 'to have children');
    });
    describe('Features',()=>{
        describe('Accepts Coins:',()=>{
            describe('As a vendor, ',()=>{
                describe('I want a vending machine that accepts coins.',()=>{
                    describe('So that I can collect money from the customer.',()=>{
                        it('should accept valid coins (nickles, dimes, and quarters).',()=>{});
                            expect(coinContainerType).to.eql('section');
                            expect(coinContainer.props.style).to.eql(expectedProps.coinContainer.props.style);
                            expect(coinContainer.props.className).to.eql(expectedProps.coinContainer.props.css_class);
                            coinContainer.props.children[0].map(b =>{
                                expect(b.type).to.eql('button');
                            });
                        it('should reject invalid coins (pennies).',()=>{});
                        it('should display "INSERT COIN" when no coins are inserted',()=>{
                            expect(displayContainerType).to.eql('section');
                            expect(displayContainer.props.style).to.eql(expected_display_style);
                            expect(displayContainer.props.className).to.eql(expected_display_css_class);
                            expect(insert_coin).to.eql(['Display: ',expectedProps.displayContainer.defaultMessage]);
                        });
                        it('should update disply when valid coin is inserted.',()=>{});
                        it('should place rejected coins in coin return',()=>{});
                        it('TODO',()=>{});
                    });
                });
            });
        });
        describe('Select Product:',()=>{
            describe('As a vendor,',()=>{
                describe('I want customers to select products.',()=>{
                    describe('So that I can collect money from the customer',()=>{
                        it('should display three products [{cola: $1.00},{chips: $1.50}, {candy: $0.65}]',()=>{});
                        it('should despense product and display "Thank YOU" given enough money.',()=>{});
                        it('should diplay "INSERT COIN" and set current ammount back to $0.00 when display is checked again.',()=>{});
                        it('should display PRICE and the price of the item if there is not enough money inserted, subsequent checks of the display will display either INSERT COIN or the current amount as appropriate.',()=>{});
                        it('TODO',()=>{});
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
            });
        });
        describe('Sold Out',()=>{
            describe('As a customer ',()=>{
                describe('I want to be told when the item I have selected is not available ',()=>{
                    describe('So that I can select another item ',()=>{
                        it('TODO',()=>{});
                    });
                });
            });
        });
        describe('Exact Change Only ',()=>{
            describe('As a customer ',()=>{
                describe('I want to be told when exact change is required ',()=>{
                    describe('So that I can determine if I can buy something with the money I have before inserting it ',()=>{
                        it('TODO',()=>{});
                    });
                });
            });
        });
    });
});


