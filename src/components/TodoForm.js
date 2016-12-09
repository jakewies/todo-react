import React from 'react';
import TestTodos from '../helpers/TestTodos';

class TodoForm extends React.Component {

  handleAddTodo(evt, todo) {
    evt.preventDefault();
    this.props.addTodo(todo);
    this.todoForm.reset();
  }

  handleTestTodos(evt, todos) {
    evt.preventDefault();
    for (let todo of todos) {
      this.props.addTodo(todo);
    }
  }

  handleClearTodos(evt) {
    evt.preventDefault();
    this.props.clearCompleteTodos();
  }

  render() {
    return (
      <div className="todo-form">
        <form className="add" ref={ (input) => this.todoForm = input } onSubmit={ (evt) => this.handleAddTodo(evt, this.todo.value) }>
          <input type="text" required placeholder="add todo..." ref={ (input) => this.todo = input } />
          <button className="btn--add" type="submit">Add</button>
        </form>
        <button className="btn--clear" onClick={ (evt) => this.handleClearTodos(evt) }>Clear</button>
        <button className="btn--test" onClick={ (evt) => this.handleTestTodos(evt, TestTodos) }>Test</button>

      </div>
    )
  }
}

export default TodoForm;
