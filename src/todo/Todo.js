import './Todo.css';
import TodoList from '../todo-list/TodoList';
import React from 'react';
import TodoCreate from '../todo-create/TodoCreate';
import { useState } from 'react';

const todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: 'Eat' },
    { id: 2, title: 'Sleep' },
    { id: 3, title: 'Code' },
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default todo;
