import React from 'react';
import Todo from './Todo';

class TodosList extends React.Component {

	todoItems() {
		const todoItems = this.props.todos.map( (todo, index) =>
			<Todo className={todo.complete} key={index.toString()} value={todo.value} num={index} removeTodo={this.props.removeTodo} completeTodo={this.props.completeTodo} />
		);

		return todoItems;
	}

  render() {
    return (
			<ul>
				{this.todoItems()}
			</ul>
    )
  }
}

export default TodosList;
