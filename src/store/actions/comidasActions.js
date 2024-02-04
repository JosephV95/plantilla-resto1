import { createAction } from "@reduxjs/toolkit";

const obtener_comidas = createAction("obtenerComidas", (payload) => {
  // console.log(payload);
  //! SE DEBE DESCOMPONER EL PAYLOAD y retornar {payload}
  return {payload};
});

const comidasActions = {obtener_comidas}

export default comidasActions
