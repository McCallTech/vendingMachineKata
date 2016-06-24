import React from 'react';

export default React.createClass({
    
  render: function() {

    let {containerDiv} = this.props,
        {container_class, style} = containerDiv;

    return <div 
        className={container_class}
        style={style}
    >
        <h1></h1>
        <div></div>
    </div>
  }
});


//className='container-div'
//style={{backgroundColor:'black'}}

