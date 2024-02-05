/* eslint-disable react/prop-types */

export default function ComidaItem({nombre, img, descripcion, precio}) {
  return (
    <div className="w-[50%] ">
        <div >
            <img src={img} alt={nombre} className="w-20 h-20 object-cover rounded-full" />
        </div>
        <div>
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
        </div>
        <div>
            <h3>{precio}</h3>
        </div>
    </div>
  )
}
