import { useEffect, useState } from 'react';
import './listadeamigosauth.css';

/* Redux */
import { RootState } from './../../redux/store';

/* Axios */
import axios from 'axios';
import { useSelector } from 'react-redux';
import { UsuarioData } from '../../redux/reducers';

export default function ListaDeAmigosAuth() {
    const [amigos, setAmigos] = useState<UsuarioData[]>([])
    const USERDATA_APIURL = `https://backend-thelobby.onrender.com/api/amistades/amistades`;
    const token = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        const fetchAmigos = async () => {
            try {
                const response = await axios.get(USERDATA_APIURL, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                
                setAmigos(response.data)
            } catch (error) {
                console.error('Error al obtener los amigos:', error);
            }
        };
        
        
        if (token) {
            fetchAmigos();
        }
        console.log('Amigos obtenidos:', amigos);

    }, [token]);

    return (
        <ul className="listadeamigosauthcontainer">
            {amigos && amigos.length > 0 ? (
                amigos.map((amigo, index) => (
                    <li key={index} className="listadeamigosauthitem">
                        {amigo.username}
                    </li>
                ))
            ) : (
                <li>No tienes amigos registrados.</li>
            )}
        </ul>
    );
}
