# Redux Toolkit Quick Start

- https://github.com/reduxjs/redux-essentials-counter-example/tree/master

1. Install Redux Toolkit and React-Redux
2. Create a Redux Store
3. Provide the Redux Store to React
4. Create a Redux State Slice
5. Add Slice Reducers to the Store
6. Use Redux State and Actions in React Components

<hr />

## Install Redux Toolkit and React-Redux

```js
npm install @reduxjs/toolkit react-redux
```

## Create a Redux Store

//store.js

```js
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
```

## Provide the Redux Store to React

Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:

//index.js

```js
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
```

## Create a Redux State Slice

//counterSlice.js

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

## Add Slice Reducers to the Store

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

## Use Redux State and Actions in React Components

Now we can use the React-Redux hooks to let React components interact with the Redux store.

```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
```

## Summary

**Create a Redux store with configureStore**

- `configureStore` accepts a `reducer` function as a named argument
- `configureStore` automatically sets up the store with good default settings

**Provide the Redux store to the React application components**

- Put a React-Redux `<Provider>` component around your `<App />`.
- Pass the Redux store as `<Provider store={store}>`.

**Create a Redux "slice" reducer with createSlice**

- Call `createSlice` with a string name, an initial state, and named reducer functions
- Reducer functions may "mutate" the state using Immer
- Export the generated slice reducer and action creators

**Use the React-Redux `useSelector/useDispatch` hooks in React components**

- Read data from the store with the `useSelector` hook
- Get the `dispatch` function with the `useDispatch` hook, and dispatch actions as needed

## What is Redux?

A:
The strength of Redux itself is that it creates a data flow outside of your components. Your components just dispatch an event, and logic outside the component happens. Your component later gets a new state and displays it.

- https://stackoverflow.com/questions/70136955/is-redux-thunk-middleware-really-needed-in-a-react-hooks-based-app

- [Redux Toolkit vs. TanStack Query: Which Should You Use?](https://medium.com/@andrew.chester/redux-toolkit-vs-tanstack-query-which-should-you-use-3f22ffe29820)
