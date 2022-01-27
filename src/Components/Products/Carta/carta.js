import React from "react";
import { Link } from "react-router-dom";
import './style.css';
const Carta=({item})=>{
    return(
        <div className="card carta">
            <img src={item.image} className="card-img-top img" alt="..."/>
            <div className="card-body">
            <Link to={`/informacion/${item.id}`} className="texto"> 
              <p className="card-text text-center">{item.title}</p>
             </Link>
              <p className="card-text text-center text__p">$ {item.price}</p>
            </div>
        </div>
    )
}
export default Carta;