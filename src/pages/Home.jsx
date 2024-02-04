import { useEffect } from "react";
import CarouselDelHeader from "../components/Carousel/CarouselDelHeader";
import Hero from "../components/Hero/Hero";
import MenuDelResto from "../components/MenuDelResto/MenuDelResto";
import SobreNosotros from "../components/SobreNosotros/SobreNosotros";
import { traerComidas } from "../service/comidasService";
import { useDispatch } from "react-redux";
import comidasActions from "../store/actions/comidasActions";


export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    let data = []
    traerComidas().then(res=> {data= res; 
      dispatch(comidasActions.obtener_comidas(data))} )
    // dispatch(comidasActions.obtener_comidas(data))
    // console.log(data);
    
  }, []);

  return (
    <div className="container max-w-full ">
      <CarouselDelHeader />
      <SobreNosotros />
      <Hero />
      <MenuDelResto />
    </div>
  );
}
