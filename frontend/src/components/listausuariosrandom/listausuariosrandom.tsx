import { useEffect, useState } from 'react';
import './listausuariosrandom.css'

/* Redux */
import { RootState } from './../../redux/store';
import { useSelector } from 'react-redux';
import { UsuarioData } from '../../redux/reducers';

/* Peticiones Api */
import { enviarSolicitud, fetchUsuariosRandom } from '../../peticiones/peticionesapi';

export const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState<UsuarioData[]>([]);
    const token = useSelector((state: RootState) => state.auth.token);
    const usuariousername = useSelector((state: RootState) => state.info.username);

    useEffect(() => {
        const obtenerUsuarios = async () => {
            if (!token) return;
            const data = await fetchUsuariosRandom(token);
            setUsuarios(data)
        }
        obtenerUsuarios()
    }, [token]);


    return (
        <ul className='listausuariocontainerlist'>
            {usuarios.map((e) => {
                if (e.username !== usuariousername) {
                    return (
                        <li className='listausuariocontainerlistitem' key={e.id}>
                            <img src="/svg/navbar/user.svg" alt="" />
                            <div className="listausuariocontainerlistitemtext">
                                <h3>{e.username}</h3>
                                <span>{e.nombre}</span>
                                <div className="listausuariocontainerlistitemtextnacionalidad">
                                    <img src={`img/pais/${e.nacionalidad}.png`} alt="" />
                                    <p>{e.nacionalidad}</p>
                                </div>
                                {e.id !== null && typeof e.id === 'number' && (
                                    <button onClick={() => enviarSolicitud(token, e.id)}>Agregar como amigo</button>
                                )}
                            </div>
                        </li>
                    );
                }
            })}
        </ul>
    );
};
