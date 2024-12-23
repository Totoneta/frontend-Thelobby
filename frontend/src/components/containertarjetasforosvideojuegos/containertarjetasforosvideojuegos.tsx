import { Link } from 'react-router-dom'
import './containertarjetasforosvideojuegos.css'

export default function ContainerTarjetasForosVideojuegos() {

    return (
        <section className="containertarjetasforosvideojuegoscontainer">
            <div className="tajetatripleforoscontainer">
                <Link to='#' ><img src="/img/tarjetaforoinicio1.jpg" alt="" /></Link>
                <Link to='#' ><img src="/img/tarjetaforoinicio1.jpg" alt="" /></Link>
                <Link to='#' ><img src="/img/tarjetaforoinicio1.jpg" alt="" /></Link>
            </div>

            <div className="tarjetasconexplorarmascontainer">
                <div className="tarjetasconexplorarmascards">
                    <Link to='#' ><img src="/img/tarjetaforoinicio1.jpg" alt="" /></Link>
                    <Link to='#' ><img src="/img/tarjetaforoinicio1.jpg" alt="" /></Link>
                    <Link to='#' ><img src="/img/tarjetaforoinicio1.jpg" alt="" /></Link>
                </div>
                <Link to='/foros'><p>EXPLORAR LA LISTA</p> <img src="/svg/arrowright.svg" alt="" /></Link>
            </div>
        </section>
    )
}