import React from 'react'

export default props =>
  <form onSubmit={props.handleTodoSubmit}>
    <input
      autoFocus
      type='text'
      className="new-todo"
      value={props.currentTodo}
      onChange={props.handleNewTodoChange}
      placeholder="What needs to be done?"/>
  </form>
