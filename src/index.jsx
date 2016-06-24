console.log("Hello World!");

import React from 'react';
import ReactDOM from 'react-dom';
import HiMom from './components/Hi-Mom';
import VendingMachine from './components/vending-machine';

let expectedProps = {};

let renderFunction = function (expectedProps) {

    return ReactDOM.render(
        <div>VendingMachineKata</div>
    , document.getElementById('app'));
}

renderFunction(expectedProps);
