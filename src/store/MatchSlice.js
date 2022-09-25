import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const MatchSlice = createSlice({
  name: "match",
  initialState: {
    matches: { live: undefined, recent: undefined, upcoming: undefined },
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatches.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMatches.fulfilled, (state, action) => {
      state.loading = true;
      if(action.payload !== 1)
      state.matches[action.payload[0]] = action.payload[1];
      state.loading = false;
    });
    builder.addCase(getMatches.rejected, (state, action) => {
      state.loading = false;
      console.log(action);
    });
  },
});

export const getMatches = createAsyncThunk(
  "match/getMatches",
  async ({ matchState: state, matchTime: type }) => {
    if (state.matches[type] === undefined) {
      const { data } = await axios(
        `https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${type}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "f9e1c867f9msh14fa5acd59c8de5p18e24djsn6f64e5916cf5",
            "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
          },
        }
      );
      return [type, data];
    }
    return 1;
  }
);
export default MatchSlice.reducer;
