import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
//import {TodoAppContainer} from './components/TodoApp';
import {VendingMachineContainer} from './components/VendingMachine';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(reducer);


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
        coins :  [
           { id       : 1,
             name     : 'Quater',
             value    : '25',
             weight   : '5.670',
             diameter : '24.26',
             isValid    : 'valid'},
           { id       : 2,
             name     : 'Dime',
             value    : '10',
             weight   : '2.268',
             diameter : '17.91',
             isValid    : 'valid'},
           { id       : 3,
             name     : 'Nickel',
             value    : '5',
             weight   : '5.000',
             diameter : '21.21',
             isValid    : 'valid'} 
        ]
};

store.dispatch({
  type: 'SET_STATE',
  state: {
    display: 'INSERT COIN',
    coins: expectedProps.coins 
    ,
    todos: [
      {id: 1, text: 'React', status: 'active', editing: false},
      {id: 2, text: 'Redux', status: 'active', editing: false},
      {id: 3, text: 'Immutable', status: 'active', editing: false},
    ],
    filter: 'all'
  }
});


require('../node_modules/todomvc-app-css/index.css');

ReactDOM.render(
  <Provider store={store}>
    <VendingMachineContainer/>
  </Provider>,
  document.getElementById('app')
);


