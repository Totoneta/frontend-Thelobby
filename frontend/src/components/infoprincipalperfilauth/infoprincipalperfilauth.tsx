import { Link } from 'react-router-dom'
import './infoprincipalperfilauth.css'
import Redesx3Columnas from '../redesx3columnas/redesx3columnas'

/* Redux */
import { RootState } from "./../../redux/store";
import { useSelector } from 'react-redux';


export default function InfoPrincipalPerfilAuth() {

    const usuario = useSelector((state: RootState) => state.auth.usuario);


    return (

        <section className="infoprincipalperfilcontainer">

            <div className="infoprincipalperfiluserinfo">
                <img className="img-user-perfil" src="./svg/navbar/user.svg" alt="Username" />
                <div className="infoprincipalperfiluserinfotexto">
                    <h2>{usuario?.username}</h2>
                    <div className="textoperfilusercontainer">
                        <span>{usuario?.nombre}</span>
                        <div className="imgpaisperfilcontainer">
                            <img src={`./img/pais/${usuario?.nacionalidad}.png`} alt={usuario?.nacionalidad} />
                            <span>{usuario?.nacionalidad}</span>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/svg/perfil/linea-divicion.png" alt="" />

            <Redesx3Columnas />

            <img src="/svg/perfil/linea-divicion.png" alt="" />

            <div className="infoprincipalperfilbtninteractuar">
                <Link to="/editarperfil">Editar perfil</Link>
                <Link id="recomendacion-perfil" to="#">Logros</Link>
                <Link id="recomendacion-perfil" to="#">Recomendaciones</Link>
            </div>

        </section>

    )
}