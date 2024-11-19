import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormularioIniciarSesion {
    username: string
    password: string
}

export default function IniciarSesion() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormularioIniciarSesion>({
        username: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name in formData) {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/sesion/iniciarsesion/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("authToken", data.token);
                navigate("/");
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};

