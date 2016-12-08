import React from 'react';

class ClearTodos extends React.Component {
  handleClearTodos(evt) {
    evt.preventDefault();
    this.props.clearCompleteTodos();
  }

  render() {
    return (
      <button onClick={ (evt) => this.handleClearTodos(evt) }>Clear Completed</button>
    )
  }
}

export default ClearTodos;
