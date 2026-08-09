import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByValue: (state, action) => { //
            state.count += action.payload //payload is the value that is passed to the action
        }
    }
})

console.log(counterSlice) // counterSlice is an object that contains the reducer and the actions

//createslice actions ko reducer ke naam se banati hai

export const {increment, decrement, incrementByValue} = counterSlice.actions
export default counterSlice.reducer