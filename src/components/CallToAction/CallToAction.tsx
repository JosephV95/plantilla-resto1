import React from 'react'

export default function CallToAction({tituloEnHTML, texto , index}) {
  return (
    <div className='w-[80%] md:w-3/5 mx-auto h-full flex flex-col gap-6 justify-center items-center text-white text-center px-4' style={{zIndex:`${index}`}}>
        {tituloEnHTML}
        <p>{texto}</p>
        <div>
          <button className='border-[2px] border-orange-400 rounded-full px-7 py-2 bg-black/30 mx-4 hover:bg-orange-400'>Ir al Menú</button>
          <button className='border-[2px] border-orange-400 rounded-full px-7 py-2 bg-black/30 mx-4 hover:bg-orange-400'>Reservar Mesa </button>
        </div>
        
    </div>
  )
}
