import { Link } from 'react-router-dom'
import './infoprincipalperfil.css'

export default function InfoPrincipalPerfil() {
    return (
        <section className="infoprincipalperfilcontainer">

            <div className="infoprincipalperfiluserinfo">
                <img className="img-user-perfil" src="./svg/navbar/user.svg" alt="Username" />
                <div className="infoprincipalperfiluserinfotexto">
                    <h2>USERNAME</h2>
                    <span>00/00/0000</span>
                    <div className="imgpaisperfilcontainer">
                        <img src="./img/argentina-flag.png" alt="País" />
                        <span>País</span>
                    </div>
                </div>
            </div>

            <div className="infoprincipalperfilbtninteractuar">
                <Link to="#"><img src="/svg/perfil/settings.svg" alt="" />Editar Perfil</Link>
                <Link id="recomendacion-perfil" to="#"><img src="/svg/perfil/corona.svg" alt="Recomendar" />Ser Premium</Link>
            </div>

            <div className="redes-personales-perfil">
                <Link to="https://store.epicgames.com/es-ES/" target="_blank" className="red-personal-perfil">
                    <img src="/img/epic.png" alt="Epic Games" />
                    <span>TwLaTotoneta</span>
                </Link>
                <Link to="https://store.steampowered.com/" target="_blank" className="red-personal-perfil">
                    <img src="/svg/redes/steam.svg" alt="Steam" />
                    <span>01234567891011</span>
                </Link>
                <Link to="https://discord.com/" target="_blank" className="red-personal-perfil">
                    <img src="/svg/redes/discord.svg" alt="Discord" />
                    <span>TOTONETA#2523</span>
                </Link>
            </div>

        </section>

    )
}