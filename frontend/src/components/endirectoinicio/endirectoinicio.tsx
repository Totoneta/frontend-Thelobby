import { Link } from 'react-router-dom'
import './endirectoinicio.css'

export default function EnDirectoInicio() {

    return (
        <section className="endirectoiniciocontainer">
            <h3>LOS MEJORES DIRECTOS EN <br /><strong>TWITCH</strong></h3>
            <div className="endirectoiniciocontainertarjetasyvermas">
                <Link to='https://www.twitch.tv/directory/category/league-of-legends' className="endirectoiniciocontainertarjeta" target='_blank'>
                    <img className='endirectoiniciocontainertarjetaimgrenvivo' src="/img/endirecto/loldirecto.jpg" alt="LEAGUE OF LEGENDS" />
                </Link>
                <Link to='https://www.twitch.tv/directory/category/counter-strike' className="endirectoiniciocontainertarjeta" target='_blank'>
                    <img className='endirectoiniciocontainertarjetaimgrenvivo' src="/img/endirecto/csgo2directo.jpg" alt="CSGO2" />
                </Link>
                <Link to='https://www.twitch.tv/directory/category/fortnite' className="endirectoiniciocontainertarjeta" target='_blank'>
                    <img className='endirectoiniciocontainertarjetaimgrenvivo' src="/img/endirecto/fortnitedirecto.jpg" alt="FORTNITE" />
                </Link>
                <Link to='https://www.twitch.tv/directory/category/valorant' className="endirectoiniciocontainertarjeta" target='_blank'>
                    <img className='endirectoiniciocontainertarjetaimgrenvivo' src="/img/endirecto/valorantdirecto.jpg" alt="VALORANT" />
                </Link>
                <Link to='https://www.twitch.tv/directory/category/minecraft' className="endirectoiniciocontainertarjeta" target='_blank'>
                    <img className='endirectoiniciocontainertarjetaimgrenvivo' src="/img/endirecto/minecraftdirecto.jpg" alt="MINECRAFT" />
                </Link>
                <Link to='https://www.twitch.tv/directory/category/rust' className="endirectoiniciocontainertarjeta" target='_blank'>
                    <img className='endirectoiniciocontainertarjetaimgrenvivo' src="/img/endirecto/rustdirecto.jpg" alt="RUST" />
                </Link>
                <Link to='#' className=" explorarmasdirectos" >
                    <p>DESCUBRE<br />MUCHO MÁS</p>
                    <img className='endirectoiniciocontainertarjetaimgarrow' src="/svg/arrowright.svg" alt="" />
                </Link>
            </div>
        </section>
    )
}