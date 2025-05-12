// src/app/page.tsx

"use client";
import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState<
    {
      id: number;
      text: string;
      completed: boolean;
    }[]
  >([]);

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>

      <TodoInput onAddTodo={addTodo} />

      <div className="mt-4">
        {todos.length === 0 ? (
          <p>할 일이 없습니다</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>

      <div className="mt-4">
        <p>총 {todos.length}개의 할 일이 있습니다</p>
        <p>완료: {todos.filter((todo) => todo.completed).length}개</p>
      </div>
    </div>
  );
}

export default TodoList;