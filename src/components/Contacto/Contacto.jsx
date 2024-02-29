// import { useState } from "react";
import ItemContacto from "./ItemContacto";

export default function Contacto() {

  //todo  Funciones necesarias para lograr el efecto hover en el color de los iconos antes de dividir en componentes (itemContacto)
  // const [hoverStates, setHoverStates] = useState({
  //   ubicacion: false,
  //   horarios: false,
  //   email: false,
  //   llamanos: false
  // });
  // const handleMouseEnter = (key) => {
  //   setHoverStates((prev) => ({
  //     ...prev,
  //     [key]: true
  //   }));
  // };
  // const handleMouseLeave = (key) => {
  //   setHoverStates((prev) => ({
  //     ...prev,
  //     [key]: false
  //   }));
  // };

  return (
    <section className="flex flex-col items-center px-5">
      <h1 className="text-center">Contactanos</h1>
      <p className="text-center"> 
        Encontranos en nuestro local o contactanos con un mensaje
      </p>

      <article className="w-[85%] p-7 my-5 shadow-[0_0_19px_rgba(0,0,0,0.15)]">
        <div className="flex flex-wrap  ">
          <ItemContacto titulo={"Ubicación"} texto1={"Plaza Independencia"} texto2={"Ciudad, Mendoza"} icono={"map"} />
          <ItemContacto titulo={"Horario"} texto1={"Lunes a Sabado:"} texto2={"10:00 hs. - 23:00 hs."} icono={"time-five"} />
          <ItemContacto titulo={"Email"} texto1={"info@example.com"} texto2={"contact@example.com"} icono={"envelope"} />
          <ItemContacto titulo={"Llamanos"} texto1={"+54 9 261 55488 51"} texto2={"+1 5589 55488 51"} icono={"phone"} />
          
          {/* //?  Antes de separar en componentes se uso esta forma para lograr que funcione el efecto hover en el color de los iconos
          <div
            className="w-[25%] group"
            onMouseEnter={() => handleMouseEnter("ubicacion")}
            onMouseLeave={() => handleMouseLeave("ubicacion")}
          >
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8] group-hover:bg-orange-300 transition-colors duration-500">
              <box-icon name="map"
                color={hoverStates["ubicacion"] ? "#ffffff" : "#ffb03b"} className="duration-700"
              ></box-icon>
            </i>
            <h4 className="ps-12 text-xl font-semibold text-gray-800">Ubicación: </h4>
            <p className="ps-12 text-[#68645e]">info@example.com
              <br />
              contacto@example.com
            </p>
          </div> */}
          
        </div>

        <form action=""></form>
      </article>
    </section>
  );
}
