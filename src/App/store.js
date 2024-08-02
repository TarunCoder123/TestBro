import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'
import { counter } from '../feature/counter/Counter'

export const store = configureStore({
  reducer:{
    counter: counterReducer,
  },
})