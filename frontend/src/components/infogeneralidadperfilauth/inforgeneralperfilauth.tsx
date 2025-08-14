import './inforgeneralperfilauth.css'
import { useSelector } from 'react-redux';

/* Redux */
import { RootState } from "./../../redux/store";

export default function InfoGeneralPerfilAuth() {
    const usuario = useSelector((state: RootState) => state.info);

    return (
        <section className="info-s-container">
            <div className="texto-info-s-primero">
                <h3>VICIEMOS</h3>
                <p>Horario: 10:00 a 15:00</p>
                <span className="dias">Días:
                    <p className="dia-lunes">L</p>
                    <p className="dia-martes">M</p>
                    <p className="dia-miercoles">X</p>
                    <p className="dia-jueves">J</p>
                    <p className="dia-viernes">V</p>
                    <p className="dia-sabado">S</p>
                    <p className="dia-domingo">D</p>
                </span>
                <p>Servidores: Las</p>
            </div>
            <div className="texto-info-s-primero-enbuscade">
                <h3>JUGUEMOS</h3>
                <div className="enbuscade-container">
                    <div className="buscando-juegosyrango">

                        {
                            usuario.juegoprimero === 'CSGO2' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/csgo.png" alt="Counter Strike" title="Counter Strike" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                        {
                            usuario.juegoprimero === 'ROCKETLEAGUE' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/rocket.png" alt="Rocket League" title="Rocket League" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                        {
                            usuario.juegoprimero === 'GTAV' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/gtav.png" alt="Gta V" title="Gta V" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                        {
                            usuario.juegoprimero === 'MINECRAFT' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/minecraft.png" alt="Minecraft" title="Minecraft" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                        {
                            usuario.juegoprimero === 'DONTSTARVETOGETHER' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/dst.png" alt="Dont Starve Together" title="Dont Starve Together" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                        {
                            usuario.juegoprimero === 'FIFA' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/fifa.png" alt="Fifa" title="Fifa" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                        {
                            usuario.juegoprimero === 'FORTNITE' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/fortnite.png" alt="Fortnite" title="Fortnite" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                        {
                            usuario.juegoprimero === 'RAINBOW6' ?
                                <div className="juegosyrangounocontainer">
                                    <img src="/img/juegos/r6.png" alt="Rainbow 6" title="Rainbow 6" />
                                    <p>{usuario.juegoprimeronivel}</p>
                                </div> : <></>
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}