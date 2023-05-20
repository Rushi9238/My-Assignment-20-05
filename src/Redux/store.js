import {configureStore} from '@reduxjs/toolkit'
import ReducerSlice from './ReducerSlice'


export const Store =configureStore({
    reducer:{
        ReducerSlice
    },
})