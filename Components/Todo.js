import React from "react";
import TodoItem from "./TodoItem";
import choresData from "../data/choresData";

const choreComp = choresData.map((chore) => (
  <TodoItem proppedChore={chore} key={chore.id} />
));

function Todo() {
  return (
    <div className="todo-container">
      <h1 className="header">Todo List</h1>
      <div className="todo-container--inner">{choreComp}</div>
    </div>
  );
}

export default Todo;
