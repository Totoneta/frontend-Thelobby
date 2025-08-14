import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './formularioregistrarse.css'

interface FormularioRegistrarse {
    username: string
    nombre: string
    nacionalidad: string
    juegoprimero: string
    juegoprimeronivel: string
    email: string
    password: string
}

const opcionesNacionalidad = [
    { value: 'AR', label: 'Argentina' },
    { value: 'ES', label: 'España' },
    { value: 'IT', label: 'Italia' },
    { value: 'FR', label: 'Francia' },
];

/* Opciones Juegos */
const opcionesJuegos = [
    { value: 'CSGO2', label: 'CSGO2' },
    { value: 'ROCKETLEAGUE', label: 'ROCKET LEAGUE' },
    { value: 'GTAV', label: 'GTAV' },
    { value: 'MINECRAFT', label: 'MINECRAFT' },
    { value: 'DONTSTARVETOGETHER', label: 'DONT STARVE TOGETHER' },
    { value: 'FIFA', label: 'FIFA' },
    { value: 'FORTNITE', label: 'FORTNITE' },
    { value: 'RAINBOW6', label: 'RAINBOW6' },
];

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
            const response = await fetch("http://localhost:8000/sesion/registrarse/", {
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

            <div className="formularioregistrarsenacionalidad">
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

            <div className="formularioregistrarseemail">
                <label htmlFor="rangoregistrarse">Rango</label>
                <input
                    id="rangoregistrarse"
                    type="text"
                    name="juegoprimeronivel"
                    placeholder="Rango"
                    value={formData.juegoprimeronivel}
                    onChange={handleChange}
                    required
                />
            </div>

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
