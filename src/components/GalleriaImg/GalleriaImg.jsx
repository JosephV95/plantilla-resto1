import GalleriaItem from "./GalleriaItem";

export default function GalleriaImg() {
  return (
    <section className="text-center flex flex-col items-center gap-y-4  my-8 py-3">
      <h1 className="text-3xl font-semibold text-[#5f5950]">Algunas fotos de <span className="text-[#ffb03b]">Nuestro Restaurante</span></h1>
      <p className="w-4/5 md:w-3/5 text-lg text-[#68645e]">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>

      <article className="sm:columns-2 md:columns-3 lg:columns-4 gap-1 px-4 sm:px-3">
        <GalleriaItem urlImg={'../img/gallery/gallery-1.jpg'} />
        <GalleriaItem urlImg={'../img/gallery/gallery-2.jpg'} />
        <GalleriaItem urlImg={'../img/gallery/gallery-3.jpg'} />
        <GalleriaItem urlImg={'../img/gallery/gallery-4.jpg'} />
        <GalleriaItem urlImg={'../img/gallery/gallery-5.jpg'} />
        <GalleriaItem urlImg={'../img/gallery/gallery-6.jpg'} />
        <GalleriaItem urlImg={'../img/gallery/gallery-7.jpg'} />
        <GalleriaItem urlImg={'../img/gallery/gallery-8.jpg'} />
      </article>

    </section>
  )
}
