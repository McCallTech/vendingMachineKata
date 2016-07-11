console.log("Hello World!");

import React from 'react';
import ReactDOM from 'react-dom';
import HiMom from './components/Hi-Mom';
import VendingMachineKata from './components/vending-machine';
export const expectedProps ={
        rootContainer: {
            props : { css_class: 'container-container', style: {margin:'auto', width:'90%',backgroundColor:'gray'} },
        },
        displayContainer: {
            props : { css_class: 'display-container', style: {float:'left', width:'45%', padding: '15px'} },
            message:'INSERT COIN',
            balance: '0.00',
            selectedProduct: 'NONE', 
            vend: 'EMPTY'
        },
        coinReturnContainer: {
            props : { css_class: 'return-container', style: {float:'left', width:'45%', padding: '15px'} },
            coinReturn:'0.00'
        },
        productsContainer:{
            props : { css_class: 'products-container',style: {float:'left', width: '50%', height:'170px', border: '3px', backgroundColor:'#999'} },
            products: [{'name': 'cola' , 'price': '1.00'},
                       {'name': 'chips', 'price': '1.50'}, 
                       {'name': 'candy', 'price': '0.65'}]    
        },
        coinContainer:{
            props : { css_class: 'coins-container', style: {float:'left', width:'45%', padding: '15px'} },
            coins: [
                {'name'     : 'Quarter', 'value'    : '0.25', 'weight'   : '5.670', 'diameter' : '24.26', 'valid'    : 'valid'   },
                {'name'     : 'Dime'   , 'value'    : '0.10', 'weight'   : '2.268', 'diameter' : '17.91', 'valid'    : 'valid'   },
                {'name'     : 'Nickel' , 'value'    : '0.05', 'weight'   : '5.000', 'diameter' : '21.21', 'valid'    : 'valid'   },
                {'name'     : 'Penny'  , 'value'    : '0.01', 'weight'   : '2.500', 'diameter' : '19.05', 'valid'    : 'in-valid'},
            ]
        },

        clickHandler:  function(reducer){

            var [action, object] = reducer,
                update,
                {props,balance,message,selectedProduct,vend}=this.props.displayContainer,
                coinReturn;
            switch(action){
                case 'coin':
                    switch(object.weight){
                        case '5.670':
                            message = '$'+(balance = (Number(balance) + 0.25 ).toFixed(2))   
                            //console.log(message)
                            break;
                        case '2.268':
                            message = '$'+(balance = (Number(balance) + 0.10 ).toFixed(2))   
                            break;
                        case '5.000':
                            message = '$'+(balance = (Number(balance) + 0.05 ).toFixed(2))   
                            break;
                        default:
                            //console.log('COIN RETURN !!!!!');
                            message = Number(balance)? '$'+(balance = (Number(balance)).toFixed(2)) : 'INSERT COIN'  
                            coinReturn = (Number(this.props.coinReturnContainer.coinReturn) + 0.01 ).toFixed(2);   
                            break;
                    }break;
                case 'product':
                    selectedProduct = object
                    balance = this.props.displayContainer.balance
                    if(Number(balance) >= Number(selectedProduct.price) ){
                        vend = selectedProduct.product
                        coinReturn = (balance - selectedProduct.price).toFixed(2)
                        balance = '0.00'
                        message='THANK YOU!'
                    } else if(Number(balance) < Number(selectedProduct.price) ){
                        console.log('Number(balance)')
                        console.log(Number(balance))
                        console.log('Number(selectedProduct.price)')
                        console.log(Number(selectedProduct.price))
                        console.log('llllllllllllllllleeeeeeeeeeeeeeeesssssssssssssssssss')
                        message='PRICE $'+selectedProduct.price
                    }
                    //console.log('###############message');
                    //console.log(message);
                    //console.log('###############balance');
                    //console.log(balance );
                    //console.log('###############Product');
                    //console.log(selectedProduct );
                    //console.log('###############vend');
                    //console.log(vend);
                    //console.log('======================');
                    break;
                case 'clear':
                    break;
                default:
                    console.log('------------outer default');
            }
            update = {
                displayContainer: {
                    props : props,
                    message: message,
                    balance: balance,
                    selectedProduct: selectedProduct,
                    vend: vend,
                },
                coinReturnContainer: {
                    props : { css_class: 'return-container', style: {float:'left', width:'45%', padding: '15px'} },
                    coinReturn: coinReturn?(coinReturn).toFixed(2) : Number(this.props.coinReturnContainer.coinReturn).toFixed(2)
            }}
            console.log('coinClickHandler:');
            console.log('coin info: https://www.usmint.gov/about_the_mint/?action=coin_specifications');
            console.log('-------------+\n'+ new Date().getTime());
            console.log(object);
            console.log('balance: '+update.displayContainer.balance);
            console.log('coinReturn: '+update.coinReturnContainer.coinReturn);

            renderFunction( Object.assign( {}, expectedProps, update ));
        }
    };
export {expectedProps };

let renderFunction = function (expectedProps) {

    return ReactDOM.render(
        <VendingMachineKata {...expectedProps}/>
    , document.getElementById('app'));
}

renderFunction(expectedProps);
