import { useSelector } from "react-redux";
import ComidaItem from "./ComidaItem";
import Filterizr from 'filterizr'
import { useEffect } from "react";

export default function MenuDelResto() {
  const comidasStore = useSelector(store => store.comidasReducer.comidas)

  let filterizr;
  useEffect(() => {
    try {
      filterizr = new Filterizr('.filter-container', options);  
    } catch (error) {
      console.log(error);
    }
    
    return () => filterizr.destroy();
  }, [comidasStore]); // Reinitialize Filterizr when comidasStore changes

  const options = {
    // Tus opciones de configuración de Filterizr aquí...
  };

  return (
    <section className="w-full min-h-[50vh] py-16 space-y-5">
      <h1 className="text-center text-3xl">Consulta nuestro <span className="text-[#ffb03b]">sabroso Menú</span></h1>

      <div>
        <ul className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-2">
          <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline " data-filter="all">Todas</li>
          <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline " data-filter="carnes">Carnes</li>
          <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline " data-filter="pastas">Especiales</li>
          <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline " data-filter="ensaladas">Entradas</li>
        </ul>
      </div>

      <div className="filter-container w-full">
        <div className="w-full py-3 flex flex-row flex-wrap justify-center lg:justify-between px-2 sm:px-8 lg:px-24 gap-y-5">
          {comidasStore.slice(0, 10).map((comida, index) => (
            <ComidaItem key={index} nombre={comida.nombre} img={comida.imgUrl} descripcion={comida.descripcion} precio={comida.precio} categoria={comida.categoria}></ComidaItem>
          ))}
        </div>
      </div>
    </section>
    
  )
}
