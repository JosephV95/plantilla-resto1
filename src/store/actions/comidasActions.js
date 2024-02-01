import { createAction } from "@reduxjs/toolkit";

const obtener_comidas = createAction("obtenerComidas", (payload) => {
  return payload;
});

const comidasActions = {obtener_comidas}

export default comidasActions
