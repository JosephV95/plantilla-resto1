import { useDispatch, useSelector } from "react-redux";
import ComidaItem from "./ComidaItem";
import Filterizr from 'filterizr'
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

  useEffect(() => {
    console.log(comidasStore);
  },[]);

  // * effect para verificar la categoria elegida y asi poder apicar el efecto
  useEffect(()=>{
    console.log(categoriaElegida);
  }, [categoriaElegida])

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
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white ${categoriaElegida =="all"? "bg-[#ffb03b] text-white" :""}`} data-filter="all" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "all")}}>Todas</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white ${categoriaElegida =="carnes"? "bg-[#ffb03b] text-white" :""}`} data-filter="carnes" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "carnes")}}>Carnes</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white ${categoriaElegida =="pastas"? "bg-[#ffb03b] text-white" :""}`} data-filter="pastas" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "pastas")}}>Pastas</li>
            <li className={`px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline hover:bg-[#ffb03b] hover:text-white ${categoriaElegida =="ensaladas"? "bg-[#ffb03b] text-white" :""}`} data-filter="ensaladas" 
              onClick={()=> {filtroParaComidas(comidasRespaldoStore, "ensaladas")}}>Ensaladas</li>
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
