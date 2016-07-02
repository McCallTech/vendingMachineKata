import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import TodoTools from './TodoTools'
import Footer from './Footer'

export class VendingMachine extends React.Component {
  getNbActiveItems() {
    if (this.props.todos) {
      const activeItems = this.props.todos.filter(
        (item) => item.get('status') === 'active'
      );
      return activeItems.size;
    }
    return 0;
  }
  render() {
    return <div>
      <section className="todoapp">
        Hi Mom!!!

      </section>
    </div>
  }
};

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
    filter: state.get('filter')
  };
}

export const VendingMachineContainer = connect(mapStateToProps, actionCreators)(VendingMachine);
