import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../redux/store'
import { CerrarSesion } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'

export default function NavBar() {

    
    const navigate = useNavigate()

    const autenticado = useSelector((state: RootState) => state.auth.autenticado);
    const dispatch = useDispatch<AppDispatch>();


    return (
        <nav className="navbar-container">
            <ul className="list-navbar">

                <li className="navbar-left-container">
                    <Link to='/' className="item-navbar-l"><img src="/img/the-lobby-logo.png" alt="" /></Link>
                </li>

                <li className="navbar-right-container">

                    <Link to='/' className="item-navbar-r btns">
                        <img src="/svg/navbar/home.svg" alt="Inicio" />
                        <p>Inicio</p>
                    </Link>
                    
                    <Link to='/foros' className="item-navbar-r btns">
                        <img src="/svg/navbar/comunidad.svg" alt="Blog" />
                        <p>Blog</p>
                    </Link>

                    <Link to='/partidas' className="item-navbar-r btns">
                        <img src="/svg/navbar/trofeo.svg" alt="Partidas" />
                        <p>Partidas</p>
                    </Link>

                    <Link to='/amigos' className="item-navbar-r btns">
                        <img src="/svg/navbar/friends.svg" alt="Amigos" />
                        <p>Amigos</p>
                    </Link>

                    {
                        autenticado === false ?
                            <Link to='/iniciarsesion' className="item-navbar-r btn-ingresar">
                                <img src="svg/navbar/user.svg" alt="Perfil" />
                                <p>Ingresar</p>
                            </Link>
                            :
                            <Link to='/perfil' className="item-navbar-r btn-ingresar">
                                <img src="svg/navbar/user.svg" alt="Perfil" />
                                <p>Perfil</p>
                            </Link>
                    }
                    {
                        autenticado === true ?
                            <Link to='#' onClick={() => {
                                dispatch(CerrarSesion())
                                setTimeout(() => navigate("/"), 300);
                            }} className="item-navbar-r btn-ingresar">
                                <p>Cerrar Sesion</p>
                            </Link>
                            :
                            <></>
                    }
                </li>
            </ul>
        </nav>
    )
}