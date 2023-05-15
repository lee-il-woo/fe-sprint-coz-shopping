import {createSlice} from '@reduxjs/toolkit'

let initialState = []
export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        initState(state,action){
            return action.payload;
        }
    }
})

export default productSlice.reducer
export const {initState} = productSlice.actions