import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const MatchSlice = createSlice({
    name:'match',
    initialState:{
        matches:{},
        loading:false
    },reducers:{

    },
    extrareducers:(builder)=>{
        builder.addCase(getMatches.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(getMatches.fulfilled,(state, action)=>{
            state.loading= true;
            console.log('payload',action.payload)
            for (const key in action.payload) {
                state.matches[key] = action.payload[key];
            }
            console.log(state)
            state.loading=false;
        })
        builder.addCase(getMatches.rejected, (state, action)=>{
            state.loading = false;
            console.log(action)
        })
    }
})

export const getMatches = createAsyncThunk('getMatches', async()=>{
    const type = ['upcoming', 'live', 'recent']
    let matches = {}
    type.forEach(async(e) => {
        const data = await axios(`https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${e}`,{
            headers:{
                'X-RapidAPI-Key': 'f9e1c867f9msh14fa5acd59c8de5p18e24djsn6f64e5916cf5',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
              }
        })
        matches[e] = data
        // console.log(e,data.data.typeMatches) 
    });
    console.log('matches',matches)
    return matches
})
export default MatchSlice.reducer