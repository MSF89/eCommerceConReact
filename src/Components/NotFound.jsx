import { Button } from "@mui/material";
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError()
    return (
        <div className="notFound">
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText  || error.message}</p>
            <Link className="nfbutton" to="/"><Button variant="contained" color="secondary">Volver A Lista de Productos</Button></Link>
        </div>
    )
}

export default NotFound