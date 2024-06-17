import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client:{
        toggleForm:false,
        formid:undefined,
        deleteId:null
    }
}
export const ReducerSlice = createSlice({
    name:"myapp",
    initialState,
    reducers:{
        toggleChangeAction:(state) => {
            console.log("Updating toggleForm value");
            state.client.toggleForm = !state.client.toggleForm
        },
        updateAction:(state,action) => {
            console.log("Updating formid value");
            state.client.formid = action.payload
        },
        deleteAction: (state,action) => {
            state.client.deleteId=action.payload
        }
    }
})
export const {toggleChangeAction,updateAction,deleteAction} = ReducerSlice.actions
export default ReducerSlice.reducer