import React from 'react';
import AddTodo from './AddTodo';
import ClearTodos from './ClearTodos';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <AddTodo addTodo={this.props.addTodo} />
        <ClearTodos clearCompleteTodos={this.props.clearCompleteTodos} />
      </div>
    )
  }
}

export default TodoForm;
