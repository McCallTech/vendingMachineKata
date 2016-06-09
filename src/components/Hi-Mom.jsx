import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="hi-mom">
        <h1>
            {this.props.text} 
        </h1>
    </div>;
  }
});
