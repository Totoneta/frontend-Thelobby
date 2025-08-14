import './editarperfil.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './../../redux/store';
import { setUsuario } from './../../redux/actions';
import { useNavigate } from 'react-router-dom';

/* Juegos y rangos */
import { opcionesJuegos, opcionesRangosFortnite, opcionesRangosRocket } from '../../data/juegosyrangos';

export default function EditarPerfil() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.auth.token);
    const usuario = useSelector((state: RootState) => state.info);

    const [formData, setFormData] = useState({
        username: usuario?.username || '',
        nombre: usuario?.nombre || '',
        nacionalidad: usuario?.nacionalidad || '',
        juegoprimero: "",
        juegoprimeronivel: "",
    });

    useEffect(() => {
        if (usuario) {
            setFormData({
                username: usuario.username || '',
                nombre: usuario.nombre || '',
                nacionalidad: usuario.nacionalidad || '',
                juegoprimero: "",
                juegoprimeronivel: "",
            });
        }
    }, [usuario])

    /* Cambio de los inputs */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    /* Actualizar perfil datos */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nombre || !formData.nacionalidad || !formData.juegoprimero || !formData.juegoprimeronivel) {
            alert('Por favor, complete todos los campos.');
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
                navigate('/perfil');
            } else {
                const errorData = await response.json();
                alert(`Error al actualizar el perfil: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error al enviar los datos', error);
            alert(`Hubo un error al actualizar el perfil: ${error}`);
        }
    };

    /* Opciones Nacionalidad */
    const opcionesNacionalidad = [
        { value: 'AR', label: 'Argentina' },
        { value: 'ES', label: 'España' },
        { value: 'IT', label: 'Italia' },
        { value: 'FR', label: 'Francia' },
    ];
    

    // Deshabilitar el botón
    const isButtonDisabled = !(
        formData.username !== usuario?.username ||
        formData.nacionalidad !== usuario.nacionalidad ||
        formData.nombre !== usuario.nombre ||
        formData.juegoprimero !== usuario?.juegoprimero ||
        formData.juegoprimeronivel !== usuario?.juegoprimeronivel
    );

    return (
        <form onSubmit={handleSubmit} className="editarperfilcontainer">
            <section className="editarperfilinfousercontainer">
                <h3>EDITA TU PERFIL</h3>
                <label className="formularioeditarperfiluserinfocontainer">
                    Username
                    <span>{formData.username}</span>
                </label>
                <label className="formularioeditarperfiluserinfocontainer" htmlFor="nombre">
                    Nombre y apellido
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre y apellido"
                        id="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="nacionalidad">Nacionalidad
                    <select
                        name="nacionalidad"
                        id="nacionalidad"
                        value={formData.nacionalidad}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona una opción</option>

                        {opcionesNacionalidad.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="juegosregistrarse1">Juego Favorito
                    <select
                        name="juegoprimero"
                        id="juegosregistrarse1"
                        value={formData.juegoprimero}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Selecciona una opción</option>

                        {opcionesJuegos.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </label>

                {
                    formData.juegoprimero === 'CSGO2' ?

                        <label htmlFor="rangocsgo2">
                            Rango
                            <input
                                id="rangocsgo2"
                                type="text"
                                name="juegoprimeronivel"
                                placeholder="Rango"
                                value={formData.juegoprimeronivel}
                                onChange={handleChange}
                                required
                            /></label> :
                        <></>
                }

                {
                    formData.juegoprimero === 'ROCKETLEAGUE' ?

                        <label htmlFor="rangorocketleague">
                            Rango
                            <select
                                name="juegoprimeronivel"
                                id="rangorocketleague"
                                value={formData.juegoprimeronivel}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona una opción</option>

                                {opcionesRangosRocket.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label> :
                        <></>
                }

                {
                    formData.juegoprimero === 'FORTNITE' ?

                        <label htmlFor="rangofortnite">
                            Rango
                            <select
                                name="juegoprimeronivel"
                                id="rangofortnite"
                                value={formData.juegoprimeronivel}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Selecciona una opción</option>

                                {opcionesRangosFortnite.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label> :
                        <></>
                }

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
