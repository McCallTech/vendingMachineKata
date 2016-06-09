import React from 'react';

export default React.createClass({
  render: function() {
    let {className, text} = this.props;
    return <div className="hi-mom">
        <h1 className= {className}>
            {text} 
        </h1>
    </div>;
  }
});
