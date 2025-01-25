import './editarperfil.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../redux/store';
import { setUsuario } from './../../redux/actions';

export default function EditarPerfil() {
    const dispatch = useDispatch();
    const usuario = useSelector((state: RootState) => state.auth.usuario);
    const token = useSelector((state: RootState) => state.auth.token);

    const [formData, setFormData] = useState({
        username: usuario?.username || '',
        nombre: usuario?.nombre || '',
        nacionalidad: usuario?.nacionalidad || '',
    });

    useEffect(() => {
        if (usuario) {
            setFormData({
                username: usuario.username,
                nombre: usuario.nombre,
                nacionalidad: usuario.nacionalidad,
            });
        }
    }, [usuario]);

    /* Manejar el cambio de los inputs */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(usuario);

    };

    /* Envío de los datos al backend para actualizar el perfil */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nacionalidad) {
            alert('Por favor, seleccione una nacionalidad.');
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/api/perfil/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                dispatch(setUsuario(updatedUser));
                alert('Perfil actualizado exitosamente');
            } else {
                const errorData = await response.json();
                alert(`Error al actualizar el perfil: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error al enviar los datos', error);
            alert(`Hubo un error al actualizar el perfil: ${error}`);
        }
    };

    const opcionesNacionalidad = [
        { value: 'AR', label: 'Argentina' },
        { value: 'ES', label: 'España' },
        { value: 'IT', label: 'Italia' },
        { value: 'FR', label: 'Francia' },
    ];

    // Deshabilita si no hay cambios
    const isButtonDisabled = !(
        formData.username !== usuario?.username || formData.nacionalidad !== usuario.nacionalidad || formData.nombre !== usuario.nombre
    );

    return (
        <form onSubmit={handleSubmit} className="editarperfilcontainer">
            <section className="editarperfilinfousercontainer">
                <h3>Información de cuenta</h3>
                <label className="formularioeditarperfiluserinfocontainer" htmlFor="nombre">
                    Nombre y apellido
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre y apellido"
                        id="nombre"
                        value={usuario?.nombre}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="nacionalidad">Nacionalidad</label>
                <select
                    name="nacionalidad"
                    id="nacionalidad"
                    value={usuario?.nacionalidad}
                    onChange={handleChange}
                >
                    <option value="">Seleccione una opción</option>
                    {opcionesNacionalidad.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </section>

            <button
                type="submit"
                className="editarperfilbtn"
                disabled={isButtonDisabled}
            >
                Actualizar perfil
            </button>
        </form>
    );
}
