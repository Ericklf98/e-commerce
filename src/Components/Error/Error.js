import React from "react";
import Sad from '../../Imagenes/sad.png'
import './style.css';
const Error=()=>{
    return(
        <div className="contenedor__Error">
            
            <img src={Sad} alt='' className="img__error"/>
            <h1 className="text-center">404</h1>
            <h2 className="text-center">Pagina no encontrada</h2>
        </div>
    )
}
export default Error;