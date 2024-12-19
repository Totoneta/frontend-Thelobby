import { Link } from 'react-router-dom'
import './notengocuenta.css'

export default function NoTengoCuenta() {


    return(
        <div className="notengocuentacontainer">
            <Link to='#'>Olvidé mi contraseña</Link>
            <Link to='/registrarse'>No tengo una cuenta</Link>
        </div>
    )
}