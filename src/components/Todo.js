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
        <div className="todo-btns">
          <button className="btn--complete" onClick={ (evt) => this.handleCompleteTodo(evt, this.props.num) }><i className="fa fa-check fa-2x" aria-hidden="true"></i></button>
          <button className="btn--remove" onClick={ (evt) => this.handleRemoveTodo(evt, this.props.num) }><i className="fa fa-times fa-2x" aria-hidden="true"></i></button>
        </div>
        <h2>{this.props.value}</h2>
      </li>
    )
  }
}

export default Todo;
