import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../components/Navbar/navbar";

/* Páginas */
import InicioPage from "../page/iniciopage/iniciopage";
import PerfilPage from "../page/perfilpage/perfilpage";
import { IniciarSesionPage } from "../page/iniciarsesionpage/iniciarsesionpage";
import RegistrarsePage from "../page/registrarsepage/registrarsepage";

export default function Rutas() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            navigate("/iniciarsesion");
        }
    }, [navigate]);

    return (
        <>
            <NavBar />
            <Routes>
                {/* Rutas Página */}
                <Route path="/" element={<InicioPage />}  />
                <Route path="/juegos" element={<InicioPage />} />
                <Route path="/competiciones" element={<InicioPage />} />
                <Route path="/equipos" element={<InicioPage />} />
                <Route path="/eventos" element={<InicioPage />} />
                <Route path="/apuestas" element={<InicioPage />} />
                <Route path="/comunidad" element={<InicioPage />} />

                {/* Rutas Usuario */}
                <Route path="/perfil" element={<PerfilPage />} />
                <Route path="/iniciarsesion" element={<IniciarSesionPage />} />
                <Route path="/registrarse" element={<RegistrarsePage />} />
            </Routes>
        </>
    );
}
