import React from 'react'

export default function CallToAction({tituloEnHTML, texto }) {
  return (
    <div className='w-[80%] md:w-3/5 mx-auto absolute h-full flex flex-col gap-6 justify-center items-center text-white text-center px-4' >
        {tituloEnHTML}
        <p>{texto}</p>
        <div>
          <button className='btnCall border-[2px] border-orange-400 rounded-full px-6 py-2 bg-black/30 mx-4 hover:bg-orange-400 uppercase font-semibold mb-2'>Ir al Menú</button>
          <button className='btnCall border-[2px] border-orange-400 rounded-full px-6 py-2 bg-black/30 mx-4 hover:bg-orange-400 uppercase font-semibold'>Reservar Mesa </button>
        </div>
        
    </div>
  )
}
