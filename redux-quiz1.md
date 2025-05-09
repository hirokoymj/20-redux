## My note

//Q1
store.js
@toolkit
export const store = configureStore({
reducer: {
counter: counterReducer
}
})

//Q2
import Provider from "react-redux"
import store from store.js
///???

<Provider store={store}><App /></Provider>

//Q3
createSlice from @toolkit

createSlice({
name: "counter",
initialState: { value: 0 },
reducer: {
increment: (state) => {state.value},
decrement: (state) =>{state.value}
}
})

export {increment, decrement} from createSlice.actions
export createSlice.reducer

//Q4
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from ./counterSlice

const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()

onClick={() => dispatch(increment())}
onClick={() => dispatch(decrement())}

## Revised

**Q1 & Q2**

```js
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {},
});
```

```js
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

**Q3**

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
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

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

Q4 - how to use in React component

```js
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```

<hr />

Q1: create redux store and put Provider around <App />

```js
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "../features/counter/counterSlice";
```

Q1:answer

```js
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import counterReducer from "../features/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

<hr />

**Q2: create counter slicer**

```js
import { createSlice } from "@reduxjs/toolkit";
```

**Q2:Answer**

```js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
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

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

<hr />

**Q3: how to use redux store in React components**

```js
//import
//import
export function Counter() {
  return (
    <div>
      <button onClick={}>+</button>
      <span>{count}</span>
      <button onClick={}>-</button>
    </div>
  );
}
```

**Q3: Answer**

```js
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
```
