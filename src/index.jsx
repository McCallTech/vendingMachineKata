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
            products: [{cola: '100'},{chips: '150'}, {candy: '65'}]    
        }
    };


let renderFunction = function (expectedProps) {

    return ReactDOM.render(
        <VendingMachineKata {...expectedProps}/>
    , document.getElementById('app'));
}

renderFunction(expectedProps);
