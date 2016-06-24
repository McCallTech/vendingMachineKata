console.log("Hello World!");

import React from 'react';
import ReactDOM from 'react-dom';
import HiMom from './components/Hi-Mom';
import VendingMachineKata from './components/vending-machine';


let expectedProps ={
        containerDiv : {
            container_class: 'container-div',
            style: {margin:'auto', width:'90%',backgroundColor:'gray'}
        },
        display: {
            defaultMessage:'INSERT COIN'
        },
        products: [{name:'cola',price: '100'},{name:'chips', price:  '150'}, {name:'candy', price: '65'}]    
    };

let renderFunction = function (expectedProps) {

    return ReactDOM.render(
        <VendingMachineKata {...expectedProps}/>
    , document.getElementById('app'));
}

renderFunction(expectedProps);
