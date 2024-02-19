import './SobreNosotros.css'

export default function SobreNosotros() {
  return (
    <section className="w-full h-auto flex flex-wrap py-16  bg-orange-50/70" id='SobreNosotros'>
      <div className="w-[100vw] lg:w-5/12 min-h-[300px]  bg-[url('../img/events/about.jpg')] bg-cover" >
        {/* <img src="../img/about.jpg" alt="imgAbout" className="object-cover" /> */}
      </div>
      <div className="w-[100vw] lg:w-7/12 px-4 lg:px-16 lg:py-3  space-y-4 ">
        <h1 className="text-3xl aboutTitulo">Eum ipsam laborum deleniti velit pariatur architecto aut nihil</h1>
        <p className='aboutTexto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
          irure dolor in reprehenderit
        </p>
        <p className='aboutTexto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="space-y-2  ps-6">
          <li><box-icon name='check-double' color='#ffb03b'></box-icon>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><box-icon name='check-double' color='#ffb03b'></box-icon>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
          <li><box-icon name='check-double' color='#ffb03b'></box-icon>Ullamco laboris nisi ut aliquip ex ea commodo consequat.Ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </li>
        </ul>

        <p className='aboutTexto'>
          Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>

    </section>
  );
}
