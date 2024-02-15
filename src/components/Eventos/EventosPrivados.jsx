
import { Carousel } from "@material-tailwind/react";
 
export default function EventosPrivados() {
  return (
    <section className="w-full h-[40rem] max-h-[70vh] bg-[url('../img/events-bg.jpg')] bg-cover bg-center py-20 flex flex-col items-center ">
      <h2 className="text-white text-3xl font-bold">Eventos privados personales</h2>
      <Carousel className="">

        <div>hola</div>
        <div>Carola</div>
        <div>Katherine</div>
      {/* <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      /> */}
      </Carousel>
    </section>
  );
}