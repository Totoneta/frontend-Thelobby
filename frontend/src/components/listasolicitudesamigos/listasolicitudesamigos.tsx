import { useEffect, useState } from 'react';
import './listasolicitudesamigos.css'
import { useSelector } from 'react-redux';
import { RootState } from './../../redux/store';

export default function ListaSolicitudesAmigos() {
    const [solicitudesPendientes, setSolicitudesPendientes] = useState<any[]>([]);
    const token = useSelector((state: RootState) => state.auth.token);

    // Obtener solicitudes pendientes
    const obtenerSolicitudesPendientes = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/amistades/solicitudespendientes/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });


            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setSolicitudesPendientes(data);
            } else {
                console.error('Error al obtener las solicitudes pendientes');
            }
        } catch (error) {
            console.error('Hubo un error al obtener las solicitudes pendientes:', error);
        }
    };

    useEffect(() => {
        obtenerSolicitudesPendientes();
    }, [token]);

    // Aceptar solicitud de amistad
    const aceptarSolicitud = async (solicitudId: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/amistades/${solicitudId}/aceptar_solicitud/`, {
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
            const response = await fetch(`http://localhost:8000/api/amistades/${solicitudId}/rechazar_solicitud/`, {
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
