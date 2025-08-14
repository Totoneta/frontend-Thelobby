import React, { useState } from 'react'
import './carruselconselector.css'

export const CarruselConSelector: React.FC = () => {

    interface ImgslideInterface {
        id: number
        imgpath: string
    }

    const imgsslide: ImgslideInterface[] = [
        { id: 1, imgpath: "/img/imgtextoinicioprincipio.jpg"},
        { id: 2, imgpath: "/img/tarjetaforoinicio1.jpg"},
        { id: 3, imgpath: "/img/tarjetaforoinicio2.jpg" },
        { id: 4, imgpath: "/img/imgtextoinicioprincipio.jpg"},
        { id: 5, imgpath: "/img/tarjetaforoinicio1.jpg"},
    ];

    const [indexcarrusel, setIndexCarrusel] = useState(0)

    const ChangeSelector = (index: number) => {
        setIndexCarrusel(index)
    }

    return (
        <section className="carruselconselectorcontainer">

            {/* Selector de imgs */}
            <div className="carruselconselectorcontainerselector">
                {imgsslide.map((_, index) => (
                    <div
                        key={index}
                        className={`selectorcarrusel ${index === indexcarrusel ? 'active' : ''}`}
                        onClick={() => ChangeSelector(index)}
                    ></div>
                ))}
            </div>

            {/* Contenedor con imgs */}
            <ul className="carruselconselectorcontainerimgs">
                {imgsslide.map((e, index) => (
                    <li
                        key={index}
                        className={`carruselconselectorimagenesytexto ${index === indexcarrusel ? 'visible' : 'hidden'}`}
                        >
                        <img src={e.imgpath} alt={e.id.toString()} />
                    </li>
                ))}
            </ul>

        </section>
    )
}