import React from 'react';
import TestUtils from 'react-addons-test-utils';
import VendingDisplay from '../../src/components/VendingDisplay';
import VendingMachine from '../../src/components/VendingMachine';

import {expect} from 'chai';

const {renderIntoDocument,
       scryRenderedDOMComponentsWithTag,
       Simulate} = TestUtils;



describe.only('Vending Machine Kata component is rendered:', () => {
    describe('Features',()=>{
        describe('Accepts Coins:',()=>{
            describe('As a vendor, ',()=>{
                describe('I want a vending machine that accepts coins.',()=>{
                    describe('So that I can collect money from the customer.',()=>{
                        it('should accept valid coins (nickles, dimes, and quarters).',()=>{});
                        it('should reject invalid coins (pennies).',()=>{});
                        it('should display "INSERT COIN" when no coins are inserted',()=>{
                            const component = renderIntoDocument(
                              <VendingDisplay display={'INSERT COIN'} />
                            );
                            const display = scryRenderedDOMComponentsWithTag(component, 'div');
                            expect(display[0].textContent).to.equal('Display : INSERT COIN');
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
