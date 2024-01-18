import React from 'react'

export default function CallToAction({tituloEnHTML, texto }) {
  return (
    <div className='w-3/5 mx-auto h-full absolute z-50 flex flex-col gap-3 justify-center items-center text-white'>
        {tituloEnHTML}
        <p>{texto}</p>
        <div>
          <button className='border-[3px] border-orange-700 rounded-full px-6 py-4 bg-black/30 me-4'>Ir al Menú</button>
          <button className='border-[3px] border-orange-700 rounded-full px-6 py-4 bg-black/30 ms-4'>Reservar Mesa </button>
        </div>
        
    </div>
  )
}
