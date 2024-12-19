import { Route, Routes } from "react-router-dom";
import NavBar from "../components/navbar/navbar";

/* Páginas */
import InicioPage from "../page/iniciopage/iniciopage";
import PerfilPage from "../page/perfilpage/perfilpage";
import { IniciarSesionPage } from "../page/iniciarsesionpage/iniciarsesionpage";
import RegistrarsePage from "../page/registrarsepage/registrarsepage";
import ForosPage from "../page/forospage/forospage";
import AmigosPage from "../page/amigospage/amigospage";
import PartidasPage from "../page/partidaspage/partidaspage";



export default function Rutas() {


    return (
        <>
            <NavBar />
            <Routes>
                {/* Rutas Página */}
                <Route path="/" element={<InicioPage />} />
                <Route path="/partidas" element={<PartidasPage />} />
                <Route path="/amigos" element={<AmigosPage />} />
                <Route path="/foros" element={<ForosPage />} />

                {/* Rutas Usuario */}
                <Route path="/perfil" element={<PerfilPage />} />
                <Route path="/iniciarsesion" element={<IniciarSesionPage />} />
                <Route path="/registrarse" element={<RegistrarsePage />} />
                <Route path="/cerrarsesion" element={<></>} />
                
            </Routes>
        </>
    );
}
