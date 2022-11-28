import { createSlice} from '@reduxjs/toolkit';


/*const initialState = {
    
        id: "reaction@hansung.ac.kr",
    
}*/

export const setId = createSlice({
    name: "setId",
    initialState:{
        id: "reaction@hansung.ac.kr"},
    reducers: {
        set (state, action) {
            state.id = action.payload;
        },
        },
    });
    
    export const {set} = setId.actions;
    export default setId.reducer;
    
