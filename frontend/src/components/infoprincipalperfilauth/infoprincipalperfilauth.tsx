import './infoprincipalperfilauth.css'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

/* Redux */
import { RootState } from "./../../redux/store";
import { InformacionRecibidaExitosamente } from '../../redux/actions';

/* Axios */
import axios from "axios";

export default function InfoPrincipalPerfilAuth() {
    const USERDATA_APIURL = `http://localhost:8000/api/perfil/`;
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.auth.token);
    const usuario = useSelector((state: RootState) => state.info);

    useEffect(() => {
        if (token && !usuario.username) {
            const fetchUserData = async () => {
                try {
                    const response = await axios.get(USERDATA_APIURL, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    dispatch(InformacionRecibidaExitosamente(response.data));
                } catch (error) {
                    console.error("Error al obtener los datos del perfil", error);
                }
            };
            console.log(usuario);

            fetchUserData();
        }
    }, [token, usuario, dispatch, USERDATA_APIURL]);

    return (
        <section className="infoprincipalperfilcontainer">
            <div className="infoprincipalperfiluserinfo">
                <img className="img-user-perfil" src="./svg/navbar/user.svg" alt="Username" />
                <div className="infoprincipalperfiluserinfotexto">
                    <h2>{usuario?.username}</h2>
                    <div className="textoperfilusercontainer">
                        <span>{usuario?.nombre}</span>
                        <div className="imgpaisperfilcontainer">
                            <img
                                src={`./img/pais/${usuario?.nacionalidad ?? 'default'}.png`}
                                alt={usuario?.nacionalidad ?? 'nacionalidad desconocida'}
                            />
                            <span>{usuario?.nacionalidad}</span>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/svg/perfil/linea-divicion.png" alt="" />
            <div className="infoprincipalperfilbtninteractuar">
                <Link to="/editarperfil">Editar perfil</Link>
                <Link id="recomendacion-perfil" to="#">Logros</Link>
                <Link id="recomendacion-perfil" to="#">Recomendaciones</Link>
            </div>
        </section>
    );
}

