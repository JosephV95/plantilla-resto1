/* eslint-disable react/prop-types */

export default function ComidaItem({nombre, img, descripcion, precio}) {
  return (
    <div className="w-[45%] flex flex-row">
        <div className=" relative">
            <img src={img} alt={nombre} className="w-20 h-20 object-cover rounded-full" />
        </div>
        <div className="w-10/12 px-3">
            <h3 className="text-[#ffb03b] font-semibold">{nombre}</h3>
            <p>{descripcion}</p>
        </div>
        <div className="w-1/12">
            <h3 className="font-bold ">${precio}</h3>
        </div>
    </div>
  )
}
