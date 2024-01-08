import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";import axios from "axios";
hunk

import { Action } from "@reduxjs/toolkit";

//api call -createAsyn

export const fetchRestaurent = createAsyncThunk('restaurentList/fetchRestaurent',()=>{
    //api call
    axios.get('/restaurants.json').then(response=>response.data.restaurants)
})

const restaurentSlice = createSlice({
    name:'restaurentList', 
    initialState:{ //api call has 3 responses pending, success, erroe
        //for pending  response 
        loading:false,
       //resolved state
        allRestaurents:[],
       //error case
         error:'' 
        },
        extraReducers:(builder)=>{
            builder.addCase(fetchRestaurent.pending,(state)=>{
                state.loading =true
            })
            builder.addCase(fetchRestaurent.fulfilled,(state,payload)=>{
                state.loading = false
                state.allRestaurents = action.payload
                state.error = ""
            })
            builder.addCase(fetchRestaurent.rejected,(state,payload)=>{
                state.loading = false
                state.allRestaurents = []
                state.error = action.error.message
            })
        }

})

export default restaurentSlice.reducer