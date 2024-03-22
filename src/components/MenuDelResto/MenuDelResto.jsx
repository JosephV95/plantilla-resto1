import { useDispatch, useSelector } from "react-redux";
import ComidaItem from "./ComidaItem";
// import Filterizr from 'filterizr'
import { useEffect, useState } from "react";
import comidasActions from "../../store/actions/comidasActions";

export default function MenuDelResto() {
  const dispatch = useDispatch();
  const comidasStore = useSelector(store => store.comidasReducer.comidas)
  const comidasRespaldoStore = useSelector(store => store.comidasReducer.comidasRespaldo)

  const [categoriaElegida, setCategoriaElegida] = useState("all")

  //* funcion para filtrado, en caso de que se clickee 'todas' se pasa como parametro el backup con todas las comidas
  const filtroParaComidas = (elArray, palabra)=>{
    if (palabra != "all") {
      setCategoriaElegida(palabra)
      dispatch(comidasActions.filtrar_comidas( {unArray: elArray, categoria: palabra} ))
    } else {
      setCategoriaElegida("all")
      dispatch(comidasActions.obtener_comidas(comidasRespaldoStore))
    }
  }

  //! Array con las categorias de comidas 
  // const categoriasComidas = ['carnes', 'pastas', 'sopas', 'sushi', 'dulces', 'pizzas', 'hamburguesas', 'ensaladas']
  
  // ? Funcion que podria obtener las categorias de un array de comidas
  // useEffect(() => {
  //   const categ = []
  //   comidasRespaldoStore.forEach(comida => {
  //     if (!categ.includes(comida.categoria)) {
  //       categ.push(comida.categoria)
  //       console.log(categ)
  //     }
  //   });
  // },[]);

// ! Configuracion y funciones para el funcionamiento de la libreria Filterizr
  // useEffect(() => {
  //     let filterizr = new Filterizr('.filter-container', options);  
   
  //   return () => filterizr.destroy();
  // }, []); // Reinitialize Filterizr when comidasStore changes

  // const options = {
  //   // Tus opciones de configuración de Filterizr aquí...
  // };

  return (
    <section className="bg-[url('../img/comidas-bg.jpg')] bg-center bg-cover bg-fixed" id="menu">
      <div className="py-16 space-y-5 bg-white/80"> 
        <h1 className="text-center text-3xl">Consulta nuestro <span className="text-[#ffb03b]">sabroso Menú</span></h1>

        <div>
          <ul className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-2 ">
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="all"? "bg-[#ffb03b] text-white" :""}`} data-filter="all" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "all")}}>Todas</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="carnes"? "bg-[#ffb03b] text-white" :""}`} data-filter="carnes" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "carnes")}}>Carnes</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="pastas"? "bg-[#ffb03b] text-white" :""}`} data-filter="pastas" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "pastas")}}>Pastas</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida =="ensaladas"? "bg-[#ffb03b] text-white" :""}`} data-filter="ensaladas" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "ensaladas")}}>Ensaladas</li>
              {/* {categoriasComidas.map((categoria, index) => (
                <li key={index} className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white duration-300 ${categoriaElegida == categoria? "bg-[#ffb03b] text-white" :""}`} data-filter={categoria} 
                onClick={()=> {filtroParaComidas(comidasRespaldoStore, categoria)}}>
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</li>
              ))} */}
                {/* //! La Funcion de arriba es para lograr que la primer letra del string este en mayuscula */}
          </ul>
        </div>

        <div className="filter-container w-full">
          <div className="w-full flex flex-row flex-wrap justify-center lg:justify-between ">
            {comidasStore.map((comida, index) => (
              <ComidaItem key={index} nombre={comida.nombre} img={comida.imgUrl} descripcion={comida.descripcion} precio={comida.precio} categoria={comida.categoria}></ComidaItem>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  )
}
