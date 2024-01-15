export default function Footer() {
  return (
    <div className="container mx-auto bg-black/80 py-5 flex flex-wrap justify-center">
      <div className="text-white text-center">
        <h1 className="text-orange-500 text-3xl">Delicious</h1>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>

        <p>© Copyright Delicious. All Rights Reserved</p>
        <p>Creado por <span className="text-deep-orange-300"><a>José Vilte</a></span></p>
      </div>
      
      
      {/* <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-2">
        <p className=" h-screen bg-red-400">hola mundo</p>
        <p className=" h-80 bg-blue-400">hola mundo 2</p>
        <p className=" h-80 bg-green-400">hola mundo 3</p>
        <p className=" h-screen bg-purple-400">hola mundo 4</p>
        <p className=" h-screen bg-green-400">hola mundo 3</p>
        <p className=" h-screen bg-blue-400">hola mundo 2</p>
      </div> */}
    </div>
  )
}
