import { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import { useSelector } from "react-redux";
import ComidaItem from "./ComidaItem";

export default function MenuDelResto() {
  const comidasStore = useSelector(store => store.comidasReducer.comidas)


  const [filter, setFilter] = useState('*');
  const gridRef = useRef(null);
  let iso;
  // console.log(comidasStore);

  useEffect(() => {
    iso = new Isotope(gridRef.current, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    });

    return () => {
      iso.destroy();
    };
  }, []);

  useEffect(() => {
    if (iso) {
      iso.arrange({ filter });
    }
  }, [filter]);

  const handleFilter = (newFilter) => {
    console.log(newFilter);
    setFilter(newFilter);
  };

  return (
    // <section className="w-full min-h-[50vh] py-16 space-y-5">
    //   <h1 className="text-center text-3xl">Consulta nuestro <span className="text-[#ffb03b]">sabroso Menú</span></h1>

    //   <div>
    //     <ul className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-2">
    //       <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline " onClick={() => filterItems('*')}>Todas</li>
    //       <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline " onClick={() => filterItems('.carnes')}>Carnes</li>
    //       <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline ">Especiales</li>
    //       <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline ">Entradas</li>
    //     </ul>
    //   </div>

    //   <div className="grid" ref={gridRef}>
    //     <div className="w-full py-3 flex flex-row flex-wrap justify-center lg:justify-between px-2 sm:px-8 lg:px-24 gap-y-5">
    //       {comidasStore.slice(0, 9).map((comida, key) => (
    //         <ComidaItem key={key} nombre={comida.nombre} className={`grid-item ${comida.categoria}`} img={comida.imgUrl} descripcion={comida.descripcion} precio={comida.precio}></ComidaItem>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <div>
      <div>
        <button onClick={() => handleFilter('*')}>Todas</button>
        <button onClick={() => handleFilter('.carnes')}>Carnes</button>
        <button onClick={() => handleFilter('.pastas')}>Pastas</button>
        <button onClick={() => handleFilter('.ensaladas')}>Ensaladas</button>
        <button onClick={() => handleFilter('.pizzas')}>Pizzas</button>
        <button onClick={() => handleFilter('.sushi')}>Sushi</button>
        <button onClick={() => handleFilter('.tacos')}>Tacos</button>
      </div>
      <div ref={gridRef} className="grid">
        {comidasStore.slice(0,15).map((comida, index) => (
          <ComidaItem key={index} nombre={comida.nombre} img={comida.imgUrl} descripcion={comida.descripcion} precio={comida.precio} categoria={comida.categoria}></ComidaItem>
          // <div key={index} className={`grid-item ${comida.categoria} bg-green-300 rounded-full mx-3 inline`}>
          //   {comida.nombre}
          // </div>
        ))}
      </div>
    </div>
  )
}
