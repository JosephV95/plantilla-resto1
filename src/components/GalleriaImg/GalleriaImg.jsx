import { useState } from "react";
import GalleriaItem from "./GalleriaItem";

import FsLightbox from "fslightbox-react";

export default function GalleriaImg() {

  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

  function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

  return (
    <section className="text-center flex flex-col items-center gap-y-4   my-8 py-3">
      <h1 className="text-3xl font-semibold text-[#5f5950]">Algunas fotos de <span className="text-[#ffb03b]">Nuestro Restaurante</span></h1>
      <p className="w-4/5 md:w-3/5 text-lg text-[#68645e]">Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>

      <article className="sm:columns-2 md:columns-3 lg:columns-4 gap-1 px-4 sm:px-3">
      <FsLightbox
        toggler={lightboxController.toggler}
				sources={[
					'../img/gallery/gallery-1.jpg',
          '../img/gallery/gallery-2.jpg',
          '../img/gallery/gallery-3.jpg',
          '../img/gallery/gallery-4.jpg',
          '../img/gallery/gallery-5.jpg',
          '../img/gallery/gallery-6.jpg',
          '../img/gallery/gallery-7.jpg',
          '../img/gallery/gallery-8.jpg'
				]}
        slide={lightboxController.slide}
			/>
        <GalleriaItem urlImg={'../img/gallery/gallery-1.jpg'}  onClickCreado={()=>{openLightboxOnSlide(1)}}/>
        <GalleriaItem urlImg={'../img/gallery/gallery-2.jpg'}  onClickCreado={()=>{openLightboxOnSlide(2)}}/>
        <GalleriaItem urlImg={'../img/gallery/gallery-3.jpg'}  onClickCreado={()=>{openLightboxOnSlide(3)}}/>
        <GalleriaItem urlImg={'../img/gallery/gallery-4.jpg'}  onClickCreado={()=>{openLightboxOnSlide(4)}}/>
        <GalleriaItem urlImg={'../img/gallery/gallery-5.jpg'}  onClickCreado={()=>{openLightboxOnSlide(5)}}/>
        <GalleriaItem urlImg={'../img/gallery/gallery-6.jpg'}  onClickCreado={()=>{openLightboxOnSlide(6)}}/>
        <GalleriaItem urlImg={'../img/gallery/gallery-7.jpg'}  onClickCreado={()=>{openLightboxOnSlide(7)}}/>
        <GalleriaItem urlImg={'../img/gallery/gallery-8.jpg'}  onClickCreado={()=>{openLightboxOnSlide(8)}}/>
      </article>

    </section>
  )
}
