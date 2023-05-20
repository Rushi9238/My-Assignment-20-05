import {createSlice} from '@reduxjs/toolkit'

const dataSlice=createSlice({
    name:'data',
    initialState:{
        data:[]
    },
    reducers:{
        postdata:(state,action)=>{
            state.data=action.payload
        },
    }
})
export const {postdata}=dataSlice.actions
export default dataSlice.reducer