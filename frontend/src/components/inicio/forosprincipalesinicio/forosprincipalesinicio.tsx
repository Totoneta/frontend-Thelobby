import './forosprincipalesinicio.css'

export default function ForosPrincipalesInicio() {


    return(
        <aside className="forosprincipalesiniciocontainer">
            <div className="forosprincipalesinicioindividual">
                <img src="./img/tarjetaforoinicio1.jpg" alt="" />
                <div className="forosprincipalesinicioindividualtexto">
                    <h4>FORO MARIO CREATIVO</h4>
                    <p>Charlemos de Mario y lo mejor de el! Tu opina libremente.</p>
                </div>
            </div>
            <div className="forosprincipalesinicioindividual">
                <img src="./img/tarjetaforoinicio2.jpg" alt="" />
                <div className="forosprincipalesinicioindividualtexto">
                    <h4>ROCKET PROS TEAMS</h4>
                    <p>Estamos buscando personas de rango GranChampion para arriba que quieran competir </p>
                </div>
            </div>
        </aside>
    )
}