import React from "react";
import { Counter } from "./features/counter/Counter";
import { Todo } from "./features/todo/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Todo Redux Demo</h2>
      <Todo />
      <h2>Counter Redux Demo</h2>
      <Counter />
    </div>
  );
}

export default App;
