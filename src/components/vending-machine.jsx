import React from 'react';

export default React.createClass({
    
    render: function() {

        const { coinContainer, clickHandler, displayContainer, 
                coinReturnContainer, productsContainer, rootContainer}  = this.props,
              { css_class: root_css_class, style: root_style }          = rootContainer.props,
              { css_class: coin_css_class, style: coin_style }          = coinContainer.props,
              { coins }                                                 = coinContainer,
              { css_class: display_css_class, style: display_style }    = displayContainer.props,
              { message, balance }                               = displayContainer,
              { css_class: return_css_class, style: return_style}       = coinReturnContainer.props,
              { coinReturn }                                            = coinReturnContainer,
              { css_class: products_css_class, style: products_style}   = productsContainer.props,
              { products }                                              = productsContainer;

        return (
            <div className={root_css_class} style={root_style}>
                <section className={products_css_class} style={products_style}>
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
                </section>
                <section className={display_css_class} style={display_style}>
                    Display: { message }
                </section>
                <section className={return_css_class} style={return_style}>
                    CoinReturn: ${coinReturn}
                    <button  style={{float:'left'}}
                            onClick={this.props.clickHandler.bind(this,['return', {}])}
                    >
                    Return
                    </button>

                </section>
                <section className={coin_css_class} style={coin_style }>
                    {coins.map((c,k)=>{
                        return <button 
                            onClick={clickHandler.bind(this, ['coin',{'weight':c.weight}])}
                            key={k}
                        >
                                {c.name}
                        </button>
                    })} 
                </section>
            </div>
        );
    }
});

                    //{products.map((p,k)=>{
                    //    return <button
                    //        onClick={clickHandler.bind(this, ['product',{'product':p.name, 'price':p.price}])}
                    //        key={k}
                    //    >{p.name}</button>

                    //})}

//        let {rootContainer, 
//                displayContainer, 
//                productsContainer,
//                coinContainer}  = this.props,
//
//            {css_class: root_css_class, 
//             style    : root_style}          = rootContainer.props,
//
//            {props: {css_class: product_css_class},
//                products}       = productsContainer,
//            {message, 
//                balance, 
//                selectedProduct, 
//                coinReturn, 
//                vend,
//                props:{css_class: displayContainerClassName,
//                       style: displayContainerStyle}}           = displayContainer,
//
//            { validCoins,
//                invalidCoins,
//                props:{css_class: coinContainerClassName,
//                       style: coinContainerStyle} }  = coinContainer;
//
//                <section className="products-container" style={{float:'left', width: '50%', height:'600px', border: '3px', backgroundColor:'#222'}}>
//                    <div className="products-div" style={{float:'left', padding: '15px', backgroundColor:'#999'}}>
//                    <div style={{width:'100%'}}>Product:Price</div>
//                        {products.map((p,i) => {
//                            return <button key={i} style={{width:'100%'}}
//                                onClick={this.props.clickHandler.bind(this,['product', {product:p.name, price: p.price}])}
//                            >
//                                <div className="product-div" style={{float:'left', padding: '15px', backgroundColor:'#888'}}>
//                                    {p.name}
//                                </div>
//                                <div className="price-div" style={{float:'right', padding: '15px', backgroundColor:'#888'}}>
//                                    ${p.price}
//                                </div>
//                            </button>
//                        })}
//                    </div>
//                </section>
//
//
//                <section className={displayContainer.props.css_class} style={displayContainerStyle}>
//                    <h4>Display: {message}</h4>
//                    <div>Balance: ${balance}</div>
//                    <div>Selected Product: {selectedProduct}</div>
//                    <div>Vend: {vend}</div>
//                </section>
//
//
//
//
//
//
//
//                <section className="button-container" style={{float:'left', width:'45%', padding: '15px'}}>
//                    <button 
//                        onClick={this.props.clickHandler.bind(this,['default', {}])}
//                        style={{width:'100%'}}
//                    >
//                        Clear
//                    </button>
//                </section>
//


