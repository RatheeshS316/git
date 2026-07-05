import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "./counterslice.jsx"
export const Store = configureStore({
    reducer : {
        counter : CounterReducer ,
    }
});