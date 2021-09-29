import './Todo.css';
import TodoList from '../todo-list/TodoList';
import React from 'react';

const todo = () => {
  const todos = [
    { id: 1, title: 'Eat' },
    { id: 2, title: 'Sleep' },
    { id: 3, title: 'Code' },
  ];

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default todo;
