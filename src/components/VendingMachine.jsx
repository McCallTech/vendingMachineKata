import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import VendingDisplay from './VendingDisplay'
import VendingCoinButtons from './VendingCoinButtons'

export class VendingMachine extends React.Component {
  render() {
    console.log('this.props');
    console.log(this.props);
    return <div>
        <section className="todoapp"> 
            <VendingDisplay display={this.props.display} />
            <VendingCoinButtons {...this.props} />
        </section>
    </div>
  }
};

function mapStateToProps(state) {
  return {
    coins: state.get('coins'),
    display: state.get('display'),
    todos: state.get('todos'),
    filter: state.get('filter')
  };
}

export const VendingMachineContainer = connect(mapStateToProps, actionCreators)(VendingMachine);
