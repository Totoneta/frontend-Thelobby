import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './formularioregistrarse.css'
/* Juegos */
import { opcionesJuegos, rangosPorJuego } from "../../data/juegosyrangos";
/* Nacionalidad */
import { opcionesNacionalidad } from "../../data/nacionalidad";

interface FormularioRegistrarse {
    username: string
    nombre: string
    nacionalidad: string
    juegoprimero: string
    juegoprimeronivel: string
    email: string
    password: string
}

export default function FormularioRegistrarse() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState<FormularioRegistrarse>({
        username: "",
        nombre: "",
        nacionalidad: "",
        juegoprimero: "",
        juegoprimeronivel: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/sesion/registrarse/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                alert('REGISTRO EXITOSO!')
                navigate('/iniciarsesion')
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error al registrar:", error);
        }
    };

    return (
        <form name='formularioregistrarse' onSubmit={handleSubmit} className="formularioregistrarsecontainer">
            <h2>REGISTRARSE</h2>

            <div className="formularioregistrarseusername">
                <label htmlFor="usernameregistrarse">Username</label>
                <input
                    id="usernameregistrarse"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="formularioregistrarsenombre">
                <label htmlFor="nombreregistrarse">Nombre y apellido</label>
                <input
                    id="nombreregistrarse"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="formularioregistrarseemail">
                <label htmlFor="emailregistrarse">Email</label>
                <input
                    id="emailregistrarse"
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="formularioregistrarsenacionalidad">
                <label htmlFor="nacionalidadregistrarse">Nacionalidad</label>
                <select
                    name="nacionalidad"
                    id="nacionalidadregistrarse"
                    value={formData.nacionalidad}
                    onChange={handleChange}
                    required
                >
                    {opcionesNacionalidad.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            <div className="formularioregistrarsejuego">
                <label htmlFor="juegosregistrarse1">Juego Favorito </label>
                <select
                    name="juegoprimero"
                    id="juegosregistrarse1"
                    value={formData.juegoprimero}
                    onChange={handleChange}
                    required
                >
                    {opcionesJuegos.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>

            {formData.juegoprimero && (
                <div className="formularioregistrarsejuegonivel">
                    <label htmlFor="rangoselect">
                        Rango
                    </label>
                    {(() => {
                        // Buscar el juego seleccionado
                        const juegoSeleccionado = rangosPorJuego.find(
                            (j) => j.game === formData.juegoprimero
                        );

                        // Si tiene rangos definidos, mostrar select
                        if (juegoSeleccionado && juegoSeleccionado.rangos.length > 0) {
                            return (
                                <select
                                    name="juegoprimeronivel"
                                    id="rangoselect"
                                    value={formData.juegoprimeronivel}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Selecciona una opción</option>
                                    {juegoSeleccionado.rangos.map((rango) => (
                                        <option key={rango.value} value={rango.value}>
                                            {rango.label}
                                        </option>
                                    ))}
                                </select>
                            );
                        }
                    })()}
                </div>
            )}

            <div className="formularioregistrarsepassword">
                <label htmlFor="passwordregistrarse">Contraseña</label>
                <input
                    id="passwordregistrarse"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Registrarse</button>


            <div className="yatengounacuentacontainer">
                <Link to='/iniciarsesion'>Ya tengo una cuenta</Link>
            </div>
        </form>
    );
};
