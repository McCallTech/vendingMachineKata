import React from 'react';

export default React.createClass({
    
    render: function() {

        let {containerDiv, display} = this.props,
            {container_class, style} = containerDiv,
            {defaultMessage} = display;
        return <div 
                   className={container_class}
                   style={style}
                >
                   <h1>Display: {defaultMessage}</h1>
                   <div></div>
        </div>
    }
});



