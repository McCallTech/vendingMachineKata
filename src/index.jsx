console.log("Hello World!");

import React from 'react';
import ReactDOM from 'react-dom';
import HiMom from './components/Hi-Mom';
import VendingMachineKata from './components/vending-machine';
export const expectedProps ={
        rootContainer: {
            props : {
                css_class: 'container-container',
                style: {margin:'auto', width:'90%',backgroundColor:'gray'}
            },
        },
        displayContainer: {
            props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
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
                update;
                switch(action){
                    case 'coin':
                        switch(object.weight){
                            case '5.670':
                                update = {
                                    displayContainer:{
                                        props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
                                        balance: (Number(this.props.displayContainer.balance) + 0.25 ).toFixed(2) ,   
                                        selectedProduct: this.props.displayContainer.selectedProduct, 
                                        defaultMessage:this.props.displayContainer.defaultMessage,
                                        coinReturn: this.props.displayContainer.coinReturn, 
                                        vend: this.props.displayContainer.vend }
                                };
                                break;
                            case '2.268':
                                update = {
                                    displayContainer:{
                                        props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
                                        balance: (Number(this.props.displayContainer.balance) + 0.10 ).toFixed(2) ,  
                                        selectedProduct: this.props.displayContainer.selectedProduct, 
                                        defaultMessage:this.props.displayContainer.defaultMessage,
                                        coinReturn: this.props.displayContainer.coinReturn, 
                                        vend: this.props.displayContainer.vend }
                                };
                                break;
                            case '5.000':
                                update = {
                                    displayContainer:{
                                        props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
                                        balance: (Number(this.props.displayContainer.balance) + 0.05).toFixed(2) , 
                                        selectedProduct: this.props.displayContainer.selectedProduct, 
                                        defaultMessage:this.props.displayContainer.defaultMessage,
                                        coinReturn: this.props.displayContainer.coinReturn, 
                                        vend: this.props.displayContainer.vend }
                                };
                                break;
                            default:
                                console.log('COIN RETURN !!!!!');
                                update = {
                                    displayContainer:{
                                        props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
                                        balance: (Number(this.props.displayContainer.balance) ).toFixed(2) , 
                                        selectedProduct: this.props.displayContainer.selectedProduct, 
                                        defaultMessage:this.props.displayContainer.defaultMessage,
                                        coinReturn: (Number(this.props.displayContainer.coinReturn)+ 0.01).toFixed(2) , 
                                        vend: this.props.displayContainer.vend }
                                };
                        }
                        break;
                    case 'product':
                        console.log('###############Product');
                        update = {
                            displayContainer:{
                                props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
                                balance: (Number(this.props.displayContainer.balance) ).toFixed(2) , 
                                selectedProduct: object.product, 
                                defaultMessage:this.props.displayContainer.defaultMessage,
                                coinReturn: this.props.displayContainer.coinReturn, 
                                vend: this.props.displayContainer.vend }
                        };
                        break;
                    case 'clear':
                    default:
                        console.log('------------outer default');
                }
            console.log('coinClickHandler:');
            console.log('coin info: https://www.usmint.gov/about_the_mint/?action=coin_specifications');
            console.log('-------------+\n'+ new Date().getTime());
            console.log(object);
            console.log('balance: '+update.displayContainer.balance);
            console.log('coinReturn: '+update.displayContainer.coinReturn);

            renderFunction(
                Object.assign( {}, expectedProps, update )
            );
        }
    };
export {expectedProps };

let renderFunction = function (expectedProps) {

    return ReactDOM.render(
        <VendingMachineKata {...expectedProps}/>
    , document.getElementById('app'));
}

renderFunction(expectedProps);
