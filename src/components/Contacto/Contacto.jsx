import { useState } from "react";

export default function Contacto() {

  const [hoverStates, setHoverStates] = useState({
    ubicacion: false,
    horarios: false,
    email: false,
    llamanos: false
  });

  const handleMouseEnter = (key) => {
    setHoverStates((prev) => ({
      ...prev,
      [key]: true
    }));
  };

  const handleMouseLeave = (key) => {
    setHoverStates((prev) => ({
      ...prev,
      [key]: false
    }));
  };

  return (
    <section className="flex flex-col items-center">
      <h1 className="text-center">Contactanos</h1>
      <p className="text-center">
        Encontranos en nuestro local o contactanos con un mensaje
      </p>

      <article className="w-4/5">
        <div className="flex flex-wrap  ">
        <div
            className="w-[25%] group"
            onMouseEnter={() => handleMouseEnter("ubicacion")}
            onMouseLeave={() => handleMouseLeave("ubicacion")}
          >
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8] group-hover:bg-orange-300">
              <box-icon
                name="map"
                color={hoverStates["ubicacion"] ? "#eeeeee" : "#ffb03b"} 
                className="duration-700"
              ></box-icon>
            </i>
            <h4 className="ps-12 text-xl font-semibold text-gray-800">
              Ubicación:
            </h4>
            <p className="ps-12 text-[#68645e]">
              info@example.com
              <br />
              contacto@example.com
            </p>
          </div>
          <div className="w-[25%] group"
            onMouseEnter={() => handleMouseEnter("horarios")}
            onMouseLeave={() => handleMouseLeave("horarios")}>
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8] group-hover:bg-orange-300">
              <box-icon name="time-five" 
                color={hoverStates["horarios"] ? "#eeeeee" : "#ffb03b"}>

              </box-icon>
            </i>
            <h4 className="ps-12 text-xl font-semibold text-gray-800">
              Horarios:
            </h4>
            <p className="ps-12 text-[#68645e]">
              info@example.com
              <br />
              contacto@example.com
            </p>
          </div>
          <div className="w-[25%] group"
            onMouseEnter={() => handleMouseEnter("email")}
            onMouseLeave={() => handleMouseLeave("email")}>
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8] group-hover:bg-orange-300">
              <box-icon name="envelope"
                color={hoverStates['email'] ? "#eeeeee" : "#ffb03b" }>

              </box-icon>
            </i>
            <h4 className="ps-12 text-xl font-semibold text-gray-800">
              Email:
            </h4>
            <p className="ps-12 text-[#68645e]">
              info@example.com
              <br />
              contacto@example.com
            </p>
          </div>
          <div className="w-[25%] group"
            onMouseEnter={() => handleMouseEnter("llamanos")}
            onMouseLeave={() => handleMouseLeave("llamanos")}>
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8] group-hover:bg-orange-300">
              <box-icon name="phone" 
                color={hoverStates['llamanos'] ? "#eeeeee" : "#ffb03b"}>

              </box-icon>
            </i>
            <h4 className="ps-12 text-xl font-semibold text-gray-800">
              Llamanos:
            </h4>
            <p className="ps-12 text-[#68645e]">
              info@example.com
              <br />
              contacto@example.com
            </p>
          </div>
        </div>

        <form action=""></form>
      </article>
    </section>
  );
}
