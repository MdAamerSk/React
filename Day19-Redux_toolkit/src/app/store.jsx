import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
    reducer: {
        counter : counterReducer, // The key 'counter' represents the name of the slice, and the value 'counterReducer' is the reducer function for that slice. This sets up the Redux store with the counter slice's reducer, allowing the application to manage the state of the counter.
        cart : cartReducer, // The key 'cart' represents the name of the slice, and the value 'cartReducer' is the reducer function for that slice. This sets up the Redux store with the cart slice's reducer, allowing the application to manage the state of the cart.
    },
})