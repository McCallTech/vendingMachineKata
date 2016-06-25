import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import {findWithType, findWithClass} from 'react-shallow-testutils';
import {assert, expect} from 'chai';

import VendingMachine from '../../src/components/vending-machine';

let expectedProps ={
        rootContainer: {
            props : {
                css_class: 'container-div',
                style: {margin:'auto', width:'90%',backgroundColor:'gray'}
            },
        },
        displayContainer: {
            defaultMessage:'INSERT COIN'
        },
        productsContainer:{
            props : {
                css_class: 'products-div',
            },
            products: [{'name': 'cola' , 'price': '100'},
                       {'name': 'chips', 'price': '150'}, 
                       {'name': 'candy', 'price': '65'}]    
        },
        coinContainer:{
            validCoins: [
                {'name'     : 'Quater',
                 'value'    : '25',
                 'weight'   : '',
                 'radius'   : ''},
                {'name'     : 'Dime',
                 'value'    : '10',
                 'weight'   : '',
                 'radius'   : ''},
                {'name'     : 'Nickel',
                 'value'    : '5',
                 'weight'   : '',
                 'radius'   : ''}
            ],
            invalidCoins: [
                {'name'     : 'Quater',
                 'value'    : '25',
                 'weight'   : '',
                 'radius'   : ''},
            ]
        }
    };

const renderer  = ReactTestUtils.createRenderer(),
      tree      = renderer.render(<VendingMachine {...expectedProps}/>),

      {props : {className, children, style}}    = tree, // <=== multi-level destructuring!!!!  see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
      [displayContainer, product]               = children,

      {type  :   displayContainerType, 
       props :   displayContainerProps}         = displayContainer;



describe.only('Vending Machine Kata component is rendered:', () => {
    it('should render a container div', () => {
        expect(tree.type).to.eql('div');
        expect(className).to.eql('container-div');
        expect(style).to.eql(expectedProps.rootContainer.props.style);
        assert(children.length > 0, 'to have children');
    });
    describe('Features',()=>{
        describe('Accepts Coins:',()=>{
            describe('As a vendor, ',()=>{
                describe('I want a vending machine that accepts coins.',()=>{
                    describe('So that I can collect money from the customer.',()=>{
                        it('should accept valid coins (nickles, dimes, and quarters).',()=>{});
                        it('should reject invalid coins (pennies).',()=>{});
                        it('should display "INSERT COIN" when no coins are inserted',()=>{
                            expect(displayContainerType).to.eql('h1');
                            expect(displayContainerProps.children).to.eql([ 'Display: ', expectedProps.displayContainer.defaultMessage]);
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
                            //console.log(product.props);
                            //expect(product.type).to.eql('div');
                            //expect(product.props).to.eql(expectedProps.productContainer);
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


