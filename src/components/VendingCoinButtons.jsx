import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames';
import TextInput from './TextInput';

export default class VendingCoinButtons extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  logMe(){
    console.log('here');
  }
  render() {
    let {coins} = this.props;
console.log('coins');
console.log(coins);
    return <div>
        {this.props.coins.map(c => {
            return <button 
                key={c.get('id')}
                onClick={this.logMe}
                style={{width:'100%', padding: '15px'} }
            >{c.get('name')}</button>
        })}
    </div>
  }
};
