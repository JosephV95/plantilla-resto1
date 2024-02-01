import { createReducer } from "@reduxjs/toolkit";
import comidasActions from "../actions/comidasActions";

const initialState = {
    comidas: []
}

const comidasReducer = createReducer( initialState, (builder)=>{
    builder
    .addCase(comidasActions.obtener_comidas, (state, action)=>{
        let nuevoEstado={...state, comidas: action.payload}
        return nuevoEstado
    })
})

export default comidasReducer;