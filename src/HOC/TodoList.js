import React from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  const renderedTodo = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <div className="todoName">{todo.title}</div>
      </div>
    );
  });

  return (
    <div>
      <div>{renderedTodo}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;
