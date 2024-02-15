/* eslint-disable react/prop-types */

export default function ComidaItem({nombre, img, descripcion, precio, categoria}) {
  return (
    <div className={`w-[100%] lg:w-[45%] flex flex-row justify-center   filtr-item`} data-category={categoria}>
        <div className="">
            <img src={img} alt={nombre} className="w-14 sm:w-20   object-cover rounded-full" />
        </div>
        <div className="w-9/12 ps-3">
            <h3 className="text-[#ff9900] font-extrabold border-dotted border-b-2 border-red-300">{nombre}</h3>
            <p className="text-xs">{descripcion}</p>
        </div>
        <div className="2/12">
            <h3 className="font-bold ">${precio}</h3>
        </div>
    </div>
  )
}
