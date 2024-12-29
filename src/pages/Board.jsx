import { useParams } from "react-router-dom"

export default function Board() {
    const id = useParams().id

    return(
        <h1 className="mt-40">Llegue a tablero {id}</h1>
    )
}