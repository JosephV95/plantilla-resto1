import { createAction } from "@reduxjs/toolkit";

const obtener_comidas = createAction("obtenerComidas", (payload) => {
  // console.log(payload);
  return payload;
});

const comidasActions = {obtener_comidas}

export default comidasActions
