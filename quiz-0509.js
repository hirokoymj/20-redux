/*
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

const store = configureStore({reducer:{}})
const counterSlice = createSlice({name: abc, initialState: {}, reducers: {}})
export {func1, func2} = counterSlice.actions
export counterSlice.reducer
const count = useSelector((state) => state.counter.value)
const dispatch = useDispatch()
onClick={dispatch(()=>increment())}

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));
1. Create a Redux Store
2. Provide the Redux Store to React
3. Create a Redux State Slice
4. Add Slice Reducers to the Store
5. Use Redux State and Actions in React Components

Q1: Create a Redux state slice - Counter {value:0}
Q2: Creaet a Redus state slice - Todo []
*/

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

//store.js
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

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  render(
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};

//Q2 Todo

createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date(),
        text: action.payload,
        status: false,
      };
      state.push(newTodo);
    },
    completeTodo: (state, action) => {
      //      let targetTodo = state.find((d) => (d.id = action.id));!! WRONG!!
      let targetTodo = state.find((d) => (d.id = action.payload));
      targetTodo.completed = true;
      state = [...state, ...targetTodo];
    },
    deleteTodo: (state, action) => {
      //const deleteId = action.id; !! WRONG!!
      const deleteId = action.payload;
      state.splice(action.id, 1);
    },
  },
});
