// Usuarios random
export const fetchUsuariosRandom = async (token: string | null) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/usuarios/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Error al obtener los usuarios');
        }
    } catch (error) {
        console.error('Hubo un error en la solicitud:', error);
    }
};

// Enviar una solicitud de amistad
export const enviarSolicitud = async (token: string | null, usuarioId: number | null) => {
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/amistades/${usuarioId}/enviar_solicitud/`, {
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

/*---------------------------------------------------------------------------------------------*/

// Obtener solicitudes pendientes
export const obtenerSolicitudesPendientes = async (token: string | null) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/amistades/solicitudespendientes/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            console.error('Error al obtener las solicitudes pendientes');
        }
    } catch (error) {
        console.error('Hubo un error al obtener las solicitudes pendientes:', error);
    }
};

