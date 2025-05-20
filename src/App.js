import React from "react";
import { Counter } from "./features/counter/Counter";
import { Todo } from "./features/todo/Todo";
import { DemoView } from "./features/demo/Demo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>Redux Demo</h2>
      <Todo />
      <hr />
      <h2>Counter Redux Demo</h2>
      <Counter />
      <hr />
      <h2>Nested render demo</h2>
      <DemoView />
    </div>
  );
}

export default App;
