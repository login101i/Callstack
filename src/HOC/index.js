import React from "react";
import SearchUsers from "./UserList";
import SearchTodos from "./TodoList";
import "./styles.css";

const HigherOrderedComponent = () => {
  return (
    <div className="App">
      <div>Higher Ordered Component</div>
      <div className="container">
        <div>
          <div className="userListContainer">
            <SearchUsers />
          </div>
        </div>
        <div>
          <div className="todoListContainer">
            <SearchTodos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HigherOrderedComponent;
