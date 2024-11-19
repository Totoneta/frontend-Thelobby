import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface FormularioRegistrarse {
    username: string
    email: string
    password: string
}


export default function Registrarse() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState<FormularioRegistrarse>({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/registrarse/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                    navigate("/iniciarsesion");
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error al registrar:", error);
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
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
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
            <button type="submit">Registrarse</button>
        </form>
    );
};
