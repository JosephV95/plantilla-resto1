export default function Footer() {
  return (
    <div className=" mx-auto bg-black/80 py-7 px-2">
      <div className="text-white text-center  flex flex-col gap-3">
        <h1 className="text-orange-500 text-3xl">Delicious</h1>
        <p className="text-">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>

        <div className="redesLinks flex flex-row gap-4 justify-center">
          <a href="https://es-la.facebook.com"  target="_blank" rel="noopener noreferrer" ><box-icon type='logo' name='facebook' color='#f8f8f8' size='md'></box-icon></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><box-icon name='instagram' type='logo' color='#f8f8f8' size='md'></box-icon></a>
          <a href="" target="_blank" rel="noopener noreferrer" ><box-icon name='whatsapp' type='logo' color='#f8f8f8' size='md'></box-icon></a>
          <a href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer" ><box-icon name='twitter' type='logo' color='#f8f8f8' size='md'></box-icon></a>

        </div>

        <p>© Copyright Delicious. All Rights Reserved</p>
        <p>Creado por <span className="text-deep-orange-300"><a>José Vilte</a></span></p>
      </div>
      
    </div>
  )
}
