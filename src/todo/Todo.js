import './Todo.css';
import TodoList from '../todo-list/TodoList';
import React from 'react';

const todo = () => {
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList />
    </div>
  );
};

export default todo;
