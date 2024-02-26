export default function Contacto() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-center">Contactanos</h1>
      <p className="text-center">
        Encontranos en nuestro local o contactanos con un mensaje
      </p>

      <article className="w-4/5">
        <div className="flex flex-wrap">
          <div className="w-[25%]">
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8]">
            <box-icon name='map' color='#ffb03b'></box-icon>
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
          <div className="w-[25%]">
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8]">
              <box-icon name="time-five" color='#ffb03b'></box-icon>
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
          <div className="w-[25%]">
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8]">
              <box-icon name="envelope" color='#ffb03b'></box-icon>
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
          <div className="w-[25%]">
            <i className="w-10 h-10 rounded-full flex justify-center items-center float-left bg-[#fff6e8]">
              <box-icon name="phone" color='#ffb03b'></box-icon>
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
