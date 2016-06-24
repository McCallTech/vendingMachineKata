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
        }    
    };

let renderFunction = function (expectedProps) {

    return ReactDOM.render(
        <VendingMachineKata {...expectedProps}/>
    , document.getElementById('app'));
}

renderFunction(expectedProps);
