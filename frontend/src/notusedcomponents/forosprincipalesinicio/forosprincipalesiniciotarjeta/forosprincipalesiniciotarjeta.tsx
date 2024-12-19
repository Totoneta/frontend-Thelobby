import './forosprincipalesiniciotarjeta.css'

interface ForosPrincipalesInicioTarjetaProps {
    titulo: string;
    descripcion: string;
    imgpath: string;
}

export default function ForosPrincipalesInicioTarjeta({ titulo, descripcion, imgpath }: ForosPrincipalesInicioTarjetaProps) {

    return (
        <div className="forosprincipalesinicioindividual">
            <img src={imgpath} alt={titulo} />
            <div className="forosprincipalesinicioindividualtexto">
                <h4>{titulo}</h4>
                <p>{descripcion} </p>
            </div>
        </div>
    )
}