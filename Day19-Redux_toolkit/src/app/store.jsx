import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'


export const store = configureStore({
    reducer: {
        counter : counterReducer, // The key 'counter' represents the name of the slice, and the value 'counterReducer' is the reducer function for that slice. This sets up the Redux store with the counter slice's reducer, allowing the application to manage the state of the counter.
    },
})