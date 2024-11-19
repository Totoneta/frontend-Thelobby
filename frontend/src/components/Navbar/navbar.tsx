import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [index, setIndex] = useState(true)

    const ShowHideLupa = () => {
        if (!index) {
            setIndex(true)
        } else {
            setIndex(false)
        }
    }

    return (
        <nav className="navbar-container">
            <ul className="list-navbar">

                <li className="navbar-left-container">
                    <Link to='' className="item-navbar-r btns btn-menu"><img src="svg/navbar/menu.svg" alt=" /" /></Link>
                    <Link to='/' className="item-navbar-l"><img src="" alt="" />Logo</Link>
                </li>

                <li className="navbar-right-container">

                    <div className="lupa">
                        {index ? <input type="text" className="input-buscar nshow" /> : <input type="text" className="input-buscar" />}
                        <Link to='' className="item-navbar-r btns-lupa" onClick={ShowHideLupa}>
                            <img src="svg/navbar/lupa.svg" id="lupita" alt="Lupa" />
                        </Link>
                    </div>

                    <Link to='/juegos' className="item-navbar-r btns">
                        <img src="svg/navbar/dado.svg" alt="Juegos" />
                        <p>Juegos</p>
                    </Link>
                    <Link to='/competiciones' className="item-navbar-r btns">
                        <img src="svg/navbar/trofeo.svg" alt="Competiciones" />
                        <p>Competiciones</p>
                    </Link>

                    <Link to='/equipos' className="item-navbar-r btns">
                        <img src="svg/navbar/team.svg" alt="Equipos" />
                        <p>Equipos</p>
                    </Link>

                    <Link to='/eventos' className="item-navbar-r btns">
                        <img src="svg/navbar/streaming.svg" alt="Eventos" />
                        <p>Eventos</p>
                    </Link>

                    <Link to='/apuestas' className="item-navbar-r btns">
                        <img src="svg/navbar/apostar.svg" alt="Apuestas" />
                        <p>Apuestas</p>
                    </Link>

                    <Link to='/comunidad' className="item-navbar-r btns">
                        <img src="svg/navbar/comunidad.svg" alt="Comunidad" />
                        <p>Comunidad</p>
                    </Link>

                    <Link to='/iniciarsesion' className="item-navbar-r btn-ingresar">
                        <img src="svg/navbar/user.svg" alt="Perfil" />
                        <p>Ingresar</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}