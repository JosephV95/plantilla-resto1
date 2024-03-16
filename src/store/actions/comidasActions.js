import { createAction } from "@reduxjs/toolkit";

const obtener_comidas = createAction("obtenerComidas", (payload) => {
  // console.log(payload);
  //! SE DEBE DESCOMPONER EL PAYLOAD y retornar {payload}
  return {payload};
});

const filtrar_comidas = createAction("filtrar_comidas", ({unArray, categoria}) => {
  const comidas = unArray.filter(com => com.categoria == categoria)
  return console.log(comidas);
})

const comidasActions = {obtener_comidas, filtrar_comidas}

export default comidasActions
