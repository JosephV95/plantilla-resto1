import { useSelector } from "react-redux"

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

        {comidasStore.map((comida, key)=>(
          <p key={key} className="inline px-2 mx-5 bg-orange-200 rounded-md">{comida.nombre}</p>
        ))
        }

    </section>
  )
}
