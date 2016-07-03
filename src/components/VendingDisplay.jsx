import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames';
import TextInput from './TextInput';

export default class VendingDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    let {display} = this.props;
    return <div
       style={{width:'100%', padding: '15px'} }
    >Display : {display}</div>
  }
};
