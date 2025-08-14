import './navbar.css'

/* R. Router Dom */
import { Link, useNavigate } from 'react-router-dom'

/* Redux */
import { AppDispatch, RootState } from '../../redux/store'
import { CerrarSesion } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'


export default function NavBar() {

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();

    const autenticado = useSelector((state: RootState) => state.auth.autenticado);

    /* Búsqueda 
    const [buscarvalue, setBuscarValue] = useState('')

    const HandleChange = (e: ChangeEvent) => {
        //setBuscarValue(e.target)
    }
    */
    /* Mostrar social */
    const [mostrarSocial, setMostrarSocial] = useState(false)

    /* Mostrar usuario */

    return (
        <nav className="navbarcontainer">
            <ul className="navbarcontainerlist">

                {/* Items izquierda */}
                <li className="navbarcontaineritemleft">
                    <Link to='/' className="navbarcontaineritemleftlink"><img src="/img/the-lobby-logo.png" alt="THE LOBBY" title='The Lobby' /></Link>
                </li>


                {/* Items centro */}
                {
                    autenticado === true ?
                        <li className="navbarcontaineritemcenter">
                            <Link to='#' className='navbarcontaineritemcenterlink'>PARTIDA RÁPIDA</Link>
                            <Link to='/descubreamigos' className='navbarcontaineritemcenterlink'>DESCUBRE AMIGOS</Link>
                        </li>
                        :
                        <li className="navbarcontaineritemcenter">
                            <Link to='/iniciarsesion' className='navbarcontaineritemcenterlink'>PARTIDA RÁPIDA</Link>
                            <Link to='/iniciarsesion' className='navbarcontaineritemcenterlink'>DESCUBRE AMIGOS</Link>
                        </li>
                }


                {/* Items derecha */}
                <li className="navbarcontaineritemright">

                    {/* Buscar */}
                    <div className="navbarcontaineritemrightbuscar">
                        <input
                            type="text"
                            placeholder='Buscar'
                        />
                        <Link to='#'>
                            <img src="/svg/navbar/search.svg" alt="Buscar" />
                        </Link>
                    </div>

                    {/* Social */}
                    {
                        autenticado === true ?
                            <div className="navbarcontaineritemrightsocial">
                                <div className="navbarcontaineritemrightsocialicon" onClick={() => {
                                    setMostrarSocial(!mostrarSocial)
                                }}>
                                    <img src="/svg/navbar/social.png" alt="Social" />
                                    <img id='arrowdownnavbar' src="/svg/navbar/arrowdown.svg" alt="Ver más" />
                                </div>
                                {mostrarSocial ? <ul className="navbarcontaineritemrightsocialmenudesplegablelist">
                                    <li className="navbarcontaineritemrightsocialmenudesplegableitem">
                                        <Link to='/amigos'>Amigos</Link>
                                    </li>
                                    <li className="navbarcontaineritemrightsocialmenudesplegableitem">
                                        <Link to='/solicitudesdeamistad'>Solicitudes <br />de amistad</Link>
                                    </li>
                                </ul> :
                                    <></>
                                }
                            </div>:
                            <></>
                            }
                            
                    {/* Usuario */}
                    {
                        autenticado === true ?
                            <Link to='/perfil' className="navbarcontaineritemrightusuario">
                                <img src="svg/navbar/user.svg" alt="Perfil" />
                                <p>Perfil</p>
                                <img id='arrowdownnavbar' src="/svg/navbar/arrowdown.svg" alt="Ver más" />
                            </Link>
                            :
                            <Link to='/iniciarsesion' className="navbarcontaineritemrightusuario">
                                <img src="svg/navbar/user.svg" alt="Ingresar" />
                                <p>Ingresar</p>
                            </Link>
                    }
                    {
                        autenticado === true ?
                            <Link to='#' onClick={() => {
                                dispatch(CerrarSesion())
                                setTimeout(() => navigate("/"), 300);
                            }} className="navbarcontaineritemrightusuario">
                                <p>Cerrar Sesion</p>
                            </Link>
                            :
                            <></>
                    }
                </li>
            </ul>
        </nav >
    )
}
{/*<Link to='/perfilamigo' className="item-navbar-r btns">
        <img src="/svg/navbar/user.svg" alt="PerfilAmigo" />
        <p>PerfilAmigo</p>
    </Link>

    <Link to='/perfil' className="item-navbar-r btns">
        <img src="/svg/navbar/user.svg" alt="Perfil" />
        <p>Perfil</p>
    </Link>

    <Link to='/' className="item-navbar-r btns">
        <img src="/svg/navbar/home.svg" alt="Inicio" />
        <p>Inicio</p>
    </Link>
    
    <Link to='/blog' className="item-navbar-r btns">
        <img src="/svg/navbar/comunidad.svg" alt="Blog" />
        <p>Blog</p>
    </Link>

    <Link to='/partidas' className="item-navbar-r btns">
        <img src="/svg/navbar/trofeo.svg" alt="Partidas" />
        <p>Partidas</p>
</Link>*/}

