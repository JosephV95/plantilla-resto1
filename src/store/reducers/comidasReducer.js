import { createReducer } from "@reduxjs/toolkit";
import comidasActions from "../actions/comidasActions";

const initialState = {
    comidas: []
}

const comidasReducer = createReducer( initialState, (builder)=>{
    builder
    .addCase(comidasActions.obtener_comidas, (state, action)=>{
        return {...state, comidas: action.payload}
    })
})

export default comidasReducer;