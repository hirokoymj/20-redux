/*
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

const store = configureStore({reducer:{}})
const counterSlice = createSlice({name: abc, initialState: {}, reducers: {}})
export const {func1, func2} = counterSlice.actions
export default counterSlice.reducer
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
