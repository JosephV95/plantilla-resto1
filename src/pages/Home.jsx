import { useEffect } from "react";
import CarouselDelHeader from "../components/Carousel/CarouselDelHeader";
import Hero from "../components/Hero/Hero";
import MenuDelResto from "../components/MenuDelResto/MenuDelResto";
import SobreNosotros from "../components/SobreNosotros/SobreNosotros";
import { traerComidas } from "../service/comidasService";
import { useDispatch } from "react-redux";
import comidasActions from "../store/actions/comidasActions";
import EventosPrivados from "../components/Eventos/EventosPrivados";
import GalleriaImg from "../components/GalleriaImg/GalleriaImg";
import Contacto from "../components/Contacto/Contacto";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    traerComidas().then(res=> {
      dispatch(comidasActions.obtener_comidas(res))} )
  }, []);

  return (
    <div className="container max-w-full ">
      <CarouselDelHeader />
      <SobreNosotros />
      <Hero />
      <MenuDelResto />

      <EventosPrivados />
      <GalleriaImg />

      <Contacto />
    </div>
  );
}
