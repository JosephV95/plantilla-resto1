import CarouselDelHeader from "../components/Carousel/CarouselDelHeader";
import Hero from "../components/Hero/Hero";
import MenuDelResto from "../components/MenuDelResto/MenuDelResto";
import SobreNosotros from "../components/SobreNosotros/SobreNosotros";

export default function Home() {
  return (
    <div className="container max-w-full bg-teal-50 ">
      <CarouselDelHeader />
      <SobreNosotros />
      <Hero />
      <MenuDelResto />
    </div>
  );
}
