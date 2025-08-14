import { Link } from 'react-router-dom'
import './containertarjetasforosvideojuegos.css'

export default function ContainerTarjetasForosVideojuegos() {

    return (
        <section className="containertarjetasforosvideojuegoscontainer">
            <div className="tajetatripleforoscontainer">
                <Link to='#' ><img src="/img/carruselinicio/lol.jpg" alt="" /></Link>
                <Link to='#' ><img src="/img/carruselinicio/valorant.jpg" alt="" /></Link>
                <Link to='#' ><img src="/img/carruselinicio/minecraft.jpg" alt="" /></Link>
                <Link to='#' ><img src="/img/carruselinicio/csgo.jpg" alt="" /></Link>
                <Link to='#' ><img src="/img/carruselinicio/r6s.jpg" alt="" /></Link>
            </div>
            
            <div className="tarjetasconexplorarmascontainer">
                <div className="tarjetasconexplorarmascards">
                    <Link to='#' ><img src="/img/carruselinicio/pugb.jpg" alt="" /></Link>
                    <Link to='#' ><img src="/img/carruselinicio/dst.jpg" alt="" /></Link>
                    <Link to='#' ><img src="/img/carruselinicio/projectz.jpg" alt="" /></Link>
                </div>
                <Link to='/foros'><p>EXPLORA<br />LA LISTA</p> <img src="/svg/arrowright.svg" alt="" /></Link>
            </div>
        </section>
    )
}