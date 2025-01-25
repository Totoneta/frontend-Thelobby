import { Link } from 'react-router-dom'
import './redesx3columnas.css'

export default function Redesx3Columnas( /*redes: string[]*/) {

    const redes = [
        {
            id: 1,
            nombre: 'TwLatotoneta',
            url: 'https://discord.com',
            red: 'Discord'
        },
        {
            id: 2,
            nombre: 'TwLatotoneta',
            url: 'https://store.steampowered.com/?l=spanish',
            red: 'Steam'
        },
        {
            id: 3,
            nombre: '',
            url: '',
            red: ''
        },
        {
            id: 4,
            nombre: '',
            url: '',
            red: ''
        },
        {
            id: 5,
            nombre: '',
            url: '',
            red: ''
        },
        {
            id: 6,
            nombre: '',
            url: '',
            red: ''
        },
    ]

    return (
        <div className="redes-personales-perfil-container">
            <h3>Mis redes:</h3>
            <div className="redes-personales-perfil">
                {
                    redes.map((e) => {

                        if (e.red && e.nombre && e.red) {
                            return (
                                <Link key={e.id} to={e.url} target="_blank" className="red-personal-perfil">
                                    <img src={`/svg/redes/${e.red}.svg`} alt={e.red} title={e.nombre} />
                                </Link>
                            )
                        }
                        return (
                            <button className="red-personal-perfil-vacio">
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}