"use client";
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      })
    );
  };

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {...task, task, isEditing: !todo.isEditing}: todo))
  }
  console.log(todos);
  return (
    <div className="flex flex-col gap-y-4 justify-center mt-16 px-3 py-6 h-min text-white rounded-lg bg-slate-900">
      <TodoForm addTodos={addTodos} />
      {todos.map((todo) => {
        {
          if (todo.isEditing) {
            return <EditTodoForm key={todo.id} task={todo} editTodo={editTask} />;
          }
          return (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        }
      })}
    </div>
  );
};

export default TodoWrapper;
