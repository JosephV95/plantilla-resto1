import { createReducer } from "@reduxjs/toolkit";
import comidasActions from "../actions/comidasActions";

const initialState = {
    comidas: [
        {nombre: "random"},
        {nombre: "second"}
    ]
}

const comidasReducer = createReducer( initialState, (builder)=>{
    builder
    .addCase(comidasActions.obtener_comidas, (state, action)=>{
        console.log(action.payload);
        return {...state, comidas: action.payload}
    })
})

export default comidasReducer;