
import { Carousel } from "@material-tailwind/react";
 
export default function EventosPrivados() {
  return (
    <main className="w-full h-[40rem]  relative bg-[url('../img/events/events-bg.jpg')] bg-cover bg-center py-20 flex flex-col items-center ">
      <article className="w-full h-full absolute top-0 bg-black/70 py-16">

      
        <h2 className="text-white text-3xl font-bold text-center">Organiza <span className="text-orange-400">tus eventos</span> en nuestro Restaurante</h2>
        <Carousel className=" " loop nextArrow={false} prevArrow={false} autoplay autoplayDelay={7000}

        //! navigation es un atributo para personalizar los botones inferiores del carousel (es propio de Material-tailwind) 
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-3 h-3 bg-orange-400" : "w-3 h-3 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}>

          <section className="flex flex-wrap justify-center mt-8 mb-12 gap-x-8">
            <div className="w-11/12 sm:w-4/5 lg:w-5/12">
              <img src="../img/events/event-custom.jpg" alt="imgEventos" className="h-full w-full object-cover" />
            </div>
            <div className="w-11/12 sm:w-4/5 lg:w-5/12 text-white space-y-3">
              <h3 className="text-2xl text-orange-300 font-semibold">Fiestas Personalizadas</h3>
              <h3 className="text-2xl font-semibold underline underline-offset-8 decoration-orange-300">$3000</h3>
              <p className="italic text-[1.1rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus architecto dolorem praesentium molestiae amet, quia optio accusantium ab adipisci quidem, aut quam expedita eum porro deserunt libero consectetur! Totam, officia.</p>
              <p className="text-[1.1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut nobis nesciunt nisi repellendus vero doloribus porro culpa a voluptatibus, aspernatur molestias cupiditate adipisci perferendis! Perspiciatis numquam blanditiis placeat quidem!</p>
            </div>
          </section>

          <section className="flex flex-wrap justify-center mt-8 mb-12 gap-x-8">
            <div className="w-11/12 sm:w-4/5 lg:w-5/12">
              <img src="../img/events/event-private.jpg" alt="imgEventos" className="h-full w-full object-cover" />
            </div>
            <div className="w-11/12 sm:w-4/5 lg:w-5/12 text-white space-y-3">
              <h3 className="text-2xl text-orange-300 font-semibold">Fiestas Personalizadas</h3>
              <h3 className="text-2xl font-semibold underline underline-offset-8 decoration-orange-300">$3000</h3>
              <p className="italic text-[1.1rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus architecto dolorem praesentium molestiae amet, quia optio accusantium ab adipisci quidem, aut quam expedita eum porro deserunt libero consectetur! Totam, officia.</p>
              <p className="text-[1.1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut nobis nesciunt nisi repellendus vero doloribus porro culpa a voluptatibus, aspernatur molestias cupiditate adipisci perferendis! Perspiciatis numquam blanditiis placeat quidem!</p>
            </div>
          </section>

          <section className="flex flex-wrap justify-center mt-8 mb-12 gap-x-8">
            <div className="w-11/12 sm:w-4/5 lg:w-5/12">
              <img src="../img/events/event-birthday.jpg" alt="imgEventos" className="h-full w-full object-cover" />
            </div>
            <div className="w-11/12 sm:w-4/5 lg:w-5/12 text-white space-y-3">
              <h3 className="text-2xl text-orange-300 font-semibold">Fiestas Personalizadas</h3>
              <h3 className="text-2xl font-semibold underline underline-offset-8 decoration-orange-300">$3000</h3>
              <p className="italic text-[1.1rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus architecto dolorem praesentium molestiae amet, quia optio accusantium ab adipisci quidem, aut quam expedita eum porro deserunt libero consectetur! Totam, officia.</p>
              <p className="text-[1.1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ut nobis nesciunt nisi repellendus vero doloribus porro culpa a voluptatibus, aspernatur molestias cupiditate adipisci perferendis! Perspiciatis numquam blanditiis placeat quidem!</p>
            </div>
          </section>
        
        </Carousel>
      </article>
    </main>
  );
}