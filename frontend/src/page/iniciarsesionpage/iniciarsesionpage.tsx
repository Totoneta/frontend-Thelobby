import { FormularioIniciarSesion } from '../../components/iniciarsesion/formularioiniciarsesion/formularioiniciarsesion';
import NoTengoCuenta from '../../components/iniciarsesion/notegndocuenta/notengocuenta';
import './iniciarsesionpage.css'

export const IniciarSesionPage: React.FC = () => {
    return (
        <section className='iniciarsesionpagecontainer'>
            <h2>INICIAR SESION</h2>
            <FormularioIniciarSesion />
            <NoTengoCuenta />
        </section>
    );
};

