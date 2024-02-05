/* eslint-disable react/prop-types */

export default function ComidaItem({nombre, img, descripcion, precio}) {
  return (
    <div className="w-[49%] flex flex-row justify-center">
        <div className="">
            <img src={img} alt={nombre} className="w-20 h-20 object-cover rounded-full" />
        </div>
        <div className="w-10/12 px-3">
            <h3 className="text-[#ff9900] font-extrabold border-dotted border-b-2 border-red-300">{nombre}</h3>
            <p>{descripcion}</p>
        </div>
        <div className="w-1/12">
            <h3 className="font-bold ">${precio}</h3>
        </div>
    </div>
  )
}
