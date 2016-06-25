import React from 'react';

export default React.createClass({
    
    render: function() {

        let {rootContainer, displayContainer, productsContainer} = this.props,
            {css_class:root_css_class, style} = rootContainer.props,
            {css_class:product_css_class} = productsContainer.props,
            {defaultMessage} = displayContainer;
        return <div 
                   className={root_css_class}
                   style={style}
                >
                <h1>Display: {defaultMessage}</h1>
                <div className="products-div"></div>
        </div>
    }
});


                   //<h1>Display: {defaultMessage}</h1>
                   //<div>Product: Price</div>
                   // {products.map(p=>{
                   //     return <span>
                   //         <div> {p.name}: {p.price}</div>
                   //     </span>
                   // })}


