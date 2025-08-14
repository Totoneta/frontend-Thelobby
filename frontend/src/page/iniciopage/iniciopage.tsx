import BarraCantidadUsuarios from "../../components/barracantidadusuarios/barracantidadusuarios";
import { CarruselConSelector } from "../../components/carruselconselector/carruselconselector";
import ContainerTarjetasForosVideojuegos from "../../components/containertarjetasforosvideojuegos/containertarjetasforosvideojuegos";
import EnDirectoInicio from "../../components/endirectoinicio/endirectoinicio";

export default function InicioPage() {
    return(
        <>
        <CarruselConSelector />
        <ContainerTarjetasForosVideojuegos />
        <BarraCantidadUsuarios />
        <EnDirectoInicio />
        </>
    )
}