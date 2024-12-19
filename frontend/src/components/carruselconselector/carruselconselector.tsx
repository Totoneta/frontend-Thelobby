import React, { useState } from 'react'
import './carruselconselector.css'

export const CarruselConSelector: React.FC = () => {

    interface ImgslideInterface {
        id: number
        imgpath: string
        title: string
        description: string
    }

    const imgsslide: ImgslideInterface[] = [
        { id: 1, imgpath: "/img/imgtextoinicioprincipio.jpg", title: "IUJFSDUIFBSDAIUFB", description: "ainfbgdisjnf jfn dsjkf nskja fnsdajf nsdkj fnsdkj fnsdjkfn ksjanf kjsdnf jksnf kjsanf ljsdnf ljsdnfjkl n" },
        { id: 2, imgpath: "/img/tarjetaforoinicio1.jpg", title: "ASDFSD ASDFDSFDS", description: "ainfbgdisjnf jfn dsjkf nskja fnsdajf nsdkj fnsdkj fnsdjkfn ksjanf kjsdnf jksnf kjsanf ljsdnf ljsdnfjkl n" },
        { id: 3, imgpath: "/img/tarjetaforoinicio2.jpg", title: "SDAF  FADFSF A DFAS", description: "ainfbgdisjnf jfn dsjkf nskja fnsdajf nsdkj fnsdkj fnsdjkfn ksjanf kjsdnf jksnf kjsanf ljsdnf ljsdnfjkl n" },
        { id: 4, imgpath: "/img/imgtextoinicioprincipio.jpg", title: "IUJFSDUIFBSDAIUFB", description: "ainfbgdisjnf jfn dsjkf nskja fnsdajf nsdkj fnsdkj fnsdjkfn ksjanf kjsdnf jksnf kjsanf ljsdnf ljsdnfjkl n" },
        { id: 5, imgpath: "/img/tarjetaforoinicio1.jpg", title: "ASDFSD ASDFDSFDS", description: "ainfbgdisjnf jfn dsjkf nskja fnsdajf nsdkj fnsdkj fnsdjkfn ksjanf kjsdnf jksnf kjsanf ljsdnf ljsdnfjkl n" },
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
                        style={{ backgroundImage: `url(${e.imgpath})` }}
                    >
                        <h3>{e.title}</h3>
                        <span>{e.description}</span>
                    </li>
                ))}
            </ul>

        </section>
    )
}