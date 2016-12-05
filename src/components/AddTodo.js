import React from 'react';

class AddTodo extends React.Component {
  handleAddTodo(evt, todo) {
    evt.preventDefault();
    this.props.addTodo(todo);
    this.todoForm.reset();
  }
  render() {
    return (
			<form ref={ (input) => this.todoForm = input }className="add-todo" onSubmit={ (evt) => this.handleAddTodo(evt, this.todo.value) }>
				<input type="text" required placeholder="add todo" ref={ (input) => this.todo = input } />
				<button type="submit">+</button>
			</form>
    )
  }
}

export default AddTodo;
