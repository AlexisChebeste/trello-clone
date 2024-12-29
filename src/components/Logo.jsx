import { Link } from "react-router-dom";

function Logo(){
    return(
        <Link to="/" className="flex items-center gap-3">
                <img src="/trello.svg" alt="Logo de trello" className="size-7" />
                <h2 className="font-bold text-lg text-gray-950">Trello</h2>
        </Link>
    )
}

export default Logo;