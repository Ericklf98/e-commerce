import React,{useState} from "react";
import Buscador from "../Search/Buscador";
import { Link} from "react-router-dom";
import './style.css';
const Nabvar=()=>{
  const[id,setId]=useState('')
  const OnSearch1=(number)=>{
    setId(number);
    
  }
  
  console.log("el dato expecifico",id);
    return(
      <nav className="navbar nabvar__design">
        <div className="container-fluid">
          <a className="navbar-brand texto__nabvar" href="/">E-commerce</a>
          <form className="selector__nav">
            <Buscador OnSearch1={OnSearch1}/>
            <Link to={`/product/${id}`} className="boton_nav"><div className="btn__text">Buscar</div></Link>
          </form>
        </div>
      </nav>
    )
}
export default Nabvar;