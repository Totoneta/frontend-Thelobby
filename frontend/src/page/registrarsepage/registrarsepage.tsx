import FormularioRegistrarse from '../../components/formularioregistrarse/formularioregistrarse';
import YaTengoUnaCuenta from '../../components/yatengocuenta/yatengocuenta';
import './registrarsepage.css'

export default function RegistrarsePage() {
    return (
        <div className="registrarsepagecontainer">
            <h2>REGISTRARSE</h2>
            <FormularioRegistrarse />
            <YaTengoUnaCuenta />
        </div>

    );
};
