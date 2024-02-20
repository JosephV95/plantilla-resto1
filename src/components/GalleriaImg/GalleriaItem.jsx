
/* eslint-disable react/prop-types */

export default function GalleriaItem({urlImg}) {
  return (
    <div className="w-1/4">
        <a >
            <img src={urlImg} alt={'Img' + urlImg} className="w-full h-full object-cover"/>
        </a>

    </div>
  )
}
