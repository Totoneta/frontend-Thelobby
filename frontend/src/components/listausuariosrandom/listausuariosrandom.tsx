import { useEffect, useState } from 'react';
import './listausuariosrandom.css'

/* Redux */
import { RootState } from './../../redux/store';
import { useSelector } from 'react-redux';
import { UsuarioData } from '../../redux/reducers';

export const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState<UsuarioData[]>([]);
    const token = useSelector((state: RootState) => state.auth.token);
    const usuariousername = useSelector((state: RootState) => state.info.username);

    useEffect(() => {
        const fetchUsuariosRandom = async () => {
            try {
                const response = await fetch('https://backend-thelobby.onrender.com/api/usuarios/', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUsuarios(data);
                } else {
                    console.error('Error al obtener los usuarios');
                }
            } catch (error) {
                console.error('Hubo un error en la solicitud:', error);
            }
        };

        fetchUsuariosRandom();
    }, [token]);

    // Enviar una solicitud de amistad
    const enviarSolicitud = async (usuarioId: number | null) => {
        try {
            const response = await fetch(`https://backend-thelobby.onrender.com/api/amistades/${usuarioId}/enviar_solicitud/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Solicitud de amistad enviada');
            } else {
                const errorData = await response.json();
                alert(errorData.detail || 'Error al enviar la solicitud');
            }
        } catch (error) {
            console.error('Error en la solicitud de amistad:', error);
        }
    };





    return (
        <ul className='listausuariocontainerlist'>
            {usuarios.map((e) => {
                if (e.username !== usuariousername) {
                    return (
                        <li className='listausuariocontainerlistitem' key={e.id}>
                            <img src="/img/perfil/perfilimguser.png" alt="" />
                            <div className="listausuariocontainerlistitemtext">
                                <h3>{e.username}</h3>
                                <span>{e.nombre}</span>
                                <p>{e.nacionalidad}</p>
                                {e.id !== null && typeof e.id === 'number' && (
                                    <button onClick={() => enviarSolicitud(e.id)}>Agregar como amigo</button>
                                )}
                            </div>
                        </li>
                    );
                }
            })}
        </ul>
    );
};
