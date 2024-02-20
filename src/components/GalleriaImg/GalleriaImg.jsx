import GalleriaItem from "./GalleriaItem";

export default function GalleriaImg() {
  return (
    <section>
      <h2>Imagenes nuestras</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam in perferendis quas repudiandae consequuntur, sint quam odio voluptates! Non dignissimos voluptas, itaque necessitatibus impedit fuga sapiente ea ipsum perspiciatis iste?</p>

      <article>
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
