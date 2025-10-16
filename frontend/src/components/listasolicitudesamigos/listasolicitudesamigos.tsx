import { useEffect, useState } from 'react';
import './listasolicitudesamigos.css'
import { useSelector } from 'react-redux';
import { RootState } from './../../redux/store';

/* Peticiones */
import { obtenerSolicitudesPendientes } from '../../peticiones/peticionesapi';

export default function ListaSolicitudesAmigos() {
    const [solicitudesPendientes, setSolicitudesPendientes] = useState<any[]>([]);
    const token = useSelector((state: RootState) => state.auth.token);
    const [usuarioenviadordesolicitud, setUsuarioEnviadorDeSolicitud] = useState(null)

    useEffect(() => {
        const obtenerSolicitudes = async () => {
            if (!token) return
            const data = await obtenerSolicitudesPendientes(token)
            setSolicitudesPendientes(data);
            setUsuarioEnviadorDeSolicitud(data);
        }
        obtenerSolicitudes()
    }, [token]);

    // Aceptar solicitud de amistad
    const aceptarSolicitud = async (solicitudId: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/amistades/${usuarioenviadordesolicitud[0].usuario1_id}/aceptar_solicitud/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Solicitud de amistad aceptada');
                setSolicitudesPendientes((prev) =>
                    prev.filter((solicitud) => solicitud.id !== solicitudId)
                );
            } else {
                const errorData = await response.json();
                alert(errorData.detail || 'Error al aceptar la solicitud');
            }
        } catch (error) {
            console.error('Error al aceptar la solicitud:', error);
        }
    };

    // Rechazar solicitud de amistad
    const rechazarSolicitud = async (solicitudId: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/amistades/${usuarioenviadordesolicitud[0].usuario1_id}/rechazar_solicitud/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Solicitud de amistad rechazada');
                setSolicitudesPendientes((prev) =>
                    prev.filter((solicitud) => solicitud.id !== solicitudId)
                );
            } else {
                const errorData = await response.json();
                alert(errorData.detail || 'Error al rechazar la solicitud');
            }
        } catch (error) {
            console.error('Error al rechazar la solicitud:', error);
        }
    };

    return (
        <aside className="listasolicitudesamigoscontainer">
            <h3>Solicitudes Pendientes</h3>
            <ul className='listasolicitudesamigoscontainerlist'>
                {solicitudesPendientes.length > 0 ? (
                    solicitudesPendientes.map((solicitud) => (
                        <li className='listasolicitudesamigoscontainerlistitem' key={solicitud.fecha_solicitud}>
                            <img src="/img/perfil/perfilimguser.png" alt="" />
                            <div className="listasolicitudesamigoscontainerlistitemtext">
                                <span><p>{solicitud.usuario1_username} </p>ha enviado una solicitud de amistad</span>
                                <div className="listasolicitudesamigoscontainerlistitemtextbuttons">
                                    <button onClick={() => aceptarSolicitud(solicitud.id)}>Aceptar</button>
                                    <button onClick={() => rechazarSolicitud(solicitud.id)}>Rechazar</button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li>No tienes solicitudes pendientes.</li>
                )}
            </ul>
        </aside>
    )
}
