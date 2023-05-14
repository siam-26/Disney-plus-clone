import { createSlice } from "@reduxjs/toolkit"

const initialState={
    recommendMovies:null,
    disney:null,
    originals:null,
    trending:null,
}

const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommendMovies=action.payload.recommendMovies;
            state.disney=action.payload.disney;
            state.originals=action.payload.originals;
            state.trending=action.payload.trending;
        }
    }
})

export const {setMovies}=movieSlice.actions;

export const selectRecommendMovies=(state)=>state.movie.recommendMovies;
export const selectDisney=(state)=>state.movie.disney;
export const selectOriginals=(state)=>state.movie.originals;
export const selectTrending=(state)=>state.movie.trending;

export default movieSlice.reducer;