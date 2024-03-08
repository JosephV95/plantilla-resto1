import React from "react";
import {
  Navbar,
  Typography,
  // Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

export default function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    const selectNav = document.getElementById('navMio')

    const scrolled = ()=>{
      if (window.scrollY > 100) {
        selectNav.classList.add('bg-black/70')
        selectNav.classList.remove('bg-transparent')
      } else {
          selectNav.classList.remove('bg-black/70')
      }
    }
    
     window.addEventListener('scroll', scrolled)
  }, []);
  
  //? Efecto para oscurecer el bg en mobile, se suma al efecto del scroll anterior
  React.useEffect(()=>{
    const selectNav = document.getElementById('navMio');
    if(openNav && window.screen.width < 960){
      selectNav.classList.add('bg-black/80')

    } else {
      selectNav.classList.remove('bg-black/80')
    }
  })

  const navList = (
    <ul className="t-2 mb-4 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 items-center">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-lg text-gray-100"
      >
        <a href="#" className="flex items-center">
          Inicio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-lg text-gray-100"
      >
        <a href="#sobreNosotros" className="flex items-center">
          Sobre Nosotros
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-lg text-gray-100"
      >
        <a href="#" className="flex items-center">
          Menú
        </a>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-lg text-gray-100"
      >
        <a href="#eventos" className="flex items-center">
          Eventos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-lg text-gray-100"
      >
        <a href="#galeria" className="flex items-center">
          Galería
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-semibold text-lg text-gray-100"
      >
        <a href="#contacto" className="flex items-center">
          Contacto
        </a>
      </Typography>
    </ul>
  );

  return (
    // class = bg-gradient-to-r from-teal-300 to-green-200
    <Navbar id="navMio" className="fixed top-0 z-[100] h-max max-w-full rounded-b-xl rounded-t-none border-none py-4 px-8 lg:px-28 bg-transparent" 
    style={{backdropFilter: "none", boxShadow:"none"}}>
      
      <div className="flex items-center justify-between text-gray-200">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-bold italic text-3xl font-serif"
        >
          Delicious
        </Typography>
        <div className="flex items-center gap-4 ">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {/* <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
          </div> */}
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {/* <div className="flex items-center gap-x-1">
          <Button fullWidth variant="text" size="sm" className="">
            <span>Log In</span>
          </Button>
          <Button fullWidth variant="gradient" size="sm" className="">
            <span>Sign in</span>
          </Button>
        </div> */}
      </Collapse>
    </Navbar>
  );
}
