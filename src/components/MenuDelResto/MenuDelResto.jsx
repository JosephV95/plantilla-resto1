import { useSelector } from "react-redux"
import ComidaItem from "./ComidaItem"

export default function MenuDelResto() {
  const comidasStore = useSelector(store => store.comidasReducer.comidas)
  // console.log(comidasStore);

  return (
    <section className="w-full min-h-[50vh] py-16 space-y-5">
        <h1 className="text-center text-3xl">Consulta nuestro <span className="text-[#ffb03b]">sabroso Menú</span></h1>

        <div>
            <ul className="flex flex-row flex-wrap justify-center gap-x-3 gap-y-2">
                <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline ">Todas</li>
                <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline ">Saladas</li>
                <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline ">Especiales</li>
                <li className="px-4 py-2 cursor-pointer border-2 border-solid border-[#ffb03b] rounded-3xl inline ">Entradas</li>
            </ul>
        </div>

        {/* <div className="w-full columns-2 flex flex-row flex-wrap justify-between px-24 gap-y-3"> */}
          <div className="w-full py-3 flex flex-row flex-wrap justify-center lg:justify-between px-2 sm:px-8 lg:px-24 gap-y-5">
            {comidasStore.slice(0, 9).map((comida, key)=>(
              <ComidaItem key={key} nombre={comida.nombre} img={comida.imgUrl} descripcion={comida.descripcion} precio={comida.precio}></ComidaItem>
            ))
            }
          </div>
        {/* </div> */}

    </section>
  )
}
