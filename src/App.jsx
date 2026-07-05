import React from "react"
import {useDispatch , useSelector} from "react-redux"
import { increment, decrement, reset } from "./counterslice"

function App(){
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state.counter.value);
  return (
    <>
    <h1>Reducer actions</h1>
    <p>{selector}</p>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>

    </>
  )
}
export default App;