import './forosprincipalesinicio.css'
import ForosPrincipalesInicioTarjeta from './forosprincipalesiniciotarjeta/forosprincipalesiniciotarjeta'

export default function ForosPrincipalesInicio() {

    const forosPrincipales = [
        {
            id: 1,
            titulo: 'RocketForum',
            descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ea id. Pariatur, aliquam? Ea en',
            imgpath: './img/tarjetaforoinicio1.jpg'
        },
        {
            id: 2,
            titulo: 'Legue of Manks',
            descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ea id. Pariatur, aliquam? Ea en',
            imgpath: './img/tarjetaforoinicio2.jpg'
        },
        {
            id: 3,
            titulo: 'Valorantting',
            descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ea id. Pariatur, aliquam? Ea en',
            imgpath: './img/tarjetaforoinicio2.jpg'
        },
        {
            id: 4,
            titulo: 'Arcoiris6',
            descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ea id. Pariatur, aliquam? Ea en',
            imgpath: './img/tarjetaforoinicio1.jpg'
        },
        {
            id: 5,
            titulo: 'Arcoiris6',
            descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ea id. Pariatur, aliquam? Ea en',
            imgpath: './img/tarjetaforoinicio1.jpg'
        },
        {
            id: 6,
            titulo: 'Arcoiris6',
            descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio atque ea id. Pariatur, aliquam? Ea en',
            imgpath: './img/tarjetaforoinicio1.jpg'
        },
    ]

    return (
        <div className="forosprincipalesiniciocontainer">
            <div className="forosprincipalesiniciotextocontainer">
                <h3>¿VISITA LOS FOROS MÁS CONCURRIDOS DEL MES!</h3>
                <span>Los foros se actualizan los 1 de cada mes. Puedes acceder a más foros dirigiendoté a el apartado foros en la barra superior de navegación.</span>
            </div>

            <aside className="forosprincipalesiniciotarjetascontainer">
                {

                    forosPrincipales.map((e) => {
                        return (
                            <ForosPrincipalesInicioTarjeta key={e.id} titulo={e.titulo} descripcion={e.descripcion} imgpath={e.imgpath} />
                        )
                    })

                }
            </aside>
        </div>
    )
}