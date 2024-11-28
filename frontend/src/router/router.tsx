import { Route, Routes } from "react-router-dom";
import NavBar from "../components/Navbar/navbar";

/* Páginas */
import InicioPage from "../page/iniciopage/iniciopage";
import PerfilPage from "../page/perfilpage/perfilpage";
import { IniciarSesionPage } from "../page/iniciarsesionpage/iniciarsesionpage";
import RegistrarsePage from "../page/registrarsepage/registrarsepage";

export default function Rutas() {

    return (
        <>
            <NavBar />
            <Routes>
                {/* Rutas Página */}
                <Route path="/" element={<InicioPage />} />
                <Route path="/partidas" element={<InicioPage />} />
                <Route path="/amigos" element={<InicioPage />} />
                <Route path="/foros" element={<InicioPage />} />
                <Route path="/favoritos" element={<InicioPage />} />

                {/* Rutas Usuario */}
                <Route path="/perfil" element={<PerfilPage />} />
                <Route path="/iniciarsesion" element={<IniciarSesionPage />} />
                <Route path="/registrarse" element={<RegistrarsePage />} />
                <Route path="/cerrarsesion" element={<></>} />
            </Routes>
        </>
    );
}
