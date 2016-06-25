console.log("Hello World!");

import React from 'react';
import ReactDOM from 'react-dom';
import HiMom from './components/Hi-Mom';
import VendingMachineKata from './components/vending-machine';



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
        },
        clickHandler:  function(){
            console.log('clickHandler')
            renderFunction(
                Object.assign( {}, expectedProps, {displayContainer:{defaultMessage:'Hi Mom!!!'}})
            );
        }
    };

let renderFunction = function (expectedProps) {

    return ReactDOM.render(
        <VendingMachineKata {...expectedProps}/>
    , document.getElementById('app'));
}

renderFunction(expectedProps);
