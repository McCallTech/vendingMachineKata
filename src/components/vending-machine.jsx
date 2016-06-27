import React from 'react';

export default React.createClass({
    
    render: function() {

        let {rootContainer, 
                displayContainer, 
                productsContainer,
                coinContainer}              = this.props,

            {css_class: root_css_class, 
                style}                      = rootContainer.props,

            {props: {css_class: product_css_class},
                products}                   = productsContainer,
            {defaultMessage, balance, selectedProduct, coinReturn, vend}       = displayContainer,
            {
                validCoins,
                invalidCoins
            }                               = coinContainer;

        return (
            <div className={root_css_class} style={style} >
                <section className="products-container" style={{float:'left', width: '50%', height:'600px', border: '3px', backgroundColor:'#222'}}>
                    <div className="products-div" style={{float:'left', padding: '15px', backgroundColor:'#999'}}>
                    <div style={{width:'100%'}}>Product:Price</div>
                        {products.map((p,i) => {
                            return <button key={i} style={{width:'100%'}}
                                onClick={this.props.clickHandler.bind(this,['product', {product:p.name, price: p.price}])}
                            >
                                <div className="product-div" style={{float:'left', padding: '15px', backgroundColor:'#888'}}>
                                    {p.name}
                                </div>
                                <div className="price-div" style={{float:'right', padding: '15px', backgroundColor:'#888'}}>
                                    ${p.price}
                                </div>
                            </button>
                        })}
                    </div>
                </section>
                <section className="display-container" style={{float:'left', width:'45%', padding: '15px'}}>
                    <h4>Display:  {defaultMessage}</h4>
                    <div>Balance: ${balance}</div>
                    <div>Selected Product: {selectedProduct}</div>
                    <div>CoinReturn: ${coinReturn}</div>
                    <div>Vend: {vend}</div>
                </section>
                <section className="coins-container" style={{float:'left', width:'30%', padding: '15px'}}>
                    {validCoins.map((vc,i) =>{
                        return <button 
                            key={i}
                            style={{width:'100%'}}
                            onClick={this.props.clickHandler.bind(this,['coin', {name:vc.name, weight: vc.weight, diameter: vc.diameter}])}
                        >{vc.name}</button>
                    })}
                    {invalidCoins.map((ivc,i) =>{
                        return <button 
                            key={i}
                            style={{width:'100%'}}
                            onClick={this.props.clickHandler.bind(this,{name:ivc.name, weight: ivc.weight, diameter: ivc.diameter})}
                        >{ivc.name}</button>
                    })}
                </section>
                <section className="button-container" style={{float:'left', width:'30%', padding: '15px'}}>
                    <button 
                        onClick={this.props.clickHandler.bind(this,['default', {}])}
                        style={{width:'100%'}}
                    >
                        Clear
                    </button>
                </section>
            </div>
        );
    }
});




