import { CarruselConSelector } from "../../components/carruselconselector/carruselconselector";
import ContainerTarjetasForosVideojuegos from "../../components/containertarjetasforosvideojuegos/containertarjetasforosvideojuegos";
import ForosPrincipalesInicio from "../../components/forosprincipalesinicio/forosprincipalesinicio";

export default function InicioPage() {
    return(
        <>
        <CarruselConSelector />
        <ContainerTarjetasForosVideojuegos />
        <ForosPrincipalesInicio />
        </>
    )
}