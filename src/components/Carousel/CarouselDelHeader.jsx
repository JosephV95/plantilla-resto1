import { Carousel } from "@material-tailwind/react";
import './CarouselDelHeader.css'
 
export default function CarouselDelHeader() {
  return (
    <Carousel
      className=" h-[99vh]" id="miSlider" autoplay loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="../img/slide/slide-1.jpg"
        alt="image 1"
        className="h-full w-full object-cover object-top z-30"
      />
      <img
        src="../img/slide/slide-2.jpg"
        alt="image 2"
        className="h-full w-full object-cover object-top z-30"
      />
      <img
        src="../img/slide/slide-3.jpg"
        alt="image 3"
        className="h-full w-full object-cover object-top z-30"
      />
    </Carousel>
  );
}
