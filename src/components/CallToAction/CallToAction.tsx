import React from 'react'

export default function CallToAction({tituloEnHTML, texto }) {
  return (
    <div>
        {tituloEnHTML}
        <p>{texto}</p>
    </div>
  )
}
