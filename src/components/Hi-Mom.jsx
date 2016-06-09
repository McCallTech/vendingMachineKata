import React from 'react';

export default React.createClass({
  render: function() {
    let {className, text} = this.props;
    return <h1 className= {className}>
            {text} 
    </h1>;
  }
});
