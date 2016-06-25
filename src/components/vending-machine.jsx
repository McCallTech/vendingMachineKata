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
            {defaultMessage}                = displayContainer,
            {
                validCoins,
                invalidCoins
            }                               = coinContainer;

        return (
            <div 
               className={root_css_class}
               style={style}
            >
                <h1>Display: {defaultMessage}</h1>




                <section style={{float:'left'}}>
                    <div className="products-div" style={{float:'left', margin: '15px'}}>
                        Product:
                        {products.map((p,i) => {
                            return <div key={i}>{p.name}</div>
                        })}
                    </div>
                    <div className="price-div" style={{float:'left', margin: '15px'}}>
                        Price:
                        {products.map((p,i) => {
                            return <div key={i}>{p.price}</div>

                        })}
                    </div>
                </section>
                <section style={{float:'left', width:'50px', margin: '15px'}}>
                 {validCoins.map((vc,i) =>{
                    return <button key={i}>{vc.name}</button>
                })}
                </section>
                <section style={{float:'left', width:'50px', margin: '15px'}}>
                    <button onClick={this.props.clickHandler}>
                        Clear
                    </button>
                </section>
            </div>
        );
    }
});




