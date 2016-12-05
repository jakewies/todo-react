import React from 'react';

class Todo extends React.Component {

  handleRemoveTodo(evt, todo) {
    evt.preventDefault();
    this.props.removeTodo(todo);
  }

  handleCompleteTodo(evt, todo) {
    evt.preventDefault();
    /* set todo to completed */
    this.props.completeTodo(todo);
  }

  render() {
    return (
			<li className={this.props.className ? 'todo complete' : 'todo'}>
				<h2>{this.props.value}</h2>
				<button onClick={ (evt) => this.handleRemoveTodo(evt, this.props.num) }>Remove Todo</button>
        <button onClick={ (evt) => this.handleCompleteTodo(evt, this.props.num) }>Complete Todo</button>
			</li>
    )
  }
}

export default Todo;
