import { FormularioIniciarSesion } from '../../components/formularioiniciarsesion/formularioiniciarsesion';
import './iniciarsesionpage.css'

export const IniciarSesionPage: React.FC = () => {
    return (
        <section className='iniciarsesionpagecontainer'>
            <FormularioIniciarSesion />
        </section>
    );
};

