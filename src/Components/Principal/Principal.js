import React, { useState, useEffect, Fragment } from "react";
import Product from "../Products/products";
import Categoria from "../Category/categorias";
import Carrusel from "../Carrusel/carrusel";
const Principal = () => {
  let valor = "",url2;
  const [dato, setDato] = useState({ load: true, data: null });
  const url = "https://fakestoreapi.com/products";
  const ObtenerDatos = (u) => {
    //consumo API REST
    setDato({ load: true, data: null });
    fetch(u)
      .then((x) => x.json())
      .then((data) => {
        setDato({ load: false, data });
      })
      .catch((err) => console.log("el error", err));
  };
  const SpecificProd = (value) => {
    console.log("quiero ver el value", value);
    valor = value;
    console.log(valor);
    if(valor==='all products'){
        url2='https://fakestoreapi.com/products'
    }else{
        url2 = `https://fakestoreapi.com/products/category/${valor}`;
    }
    ObtenerDatos(url2);
  };
  useEffect(() => {
    ObtenerDatos(url); //se manda a llamar la función que consumira nuestra api
  }, []);
  return (
    <Fragment>
      <Carrusel/>
      <div className="texto__h2">
        <h2>Productos</h2>
      </div>
      <div className="">
        <Categoria SpecificProd={SpecificProd}/>
        {dato.load ? <div className="cargando">Cargando...</div> : <Product dato={dato.data} />}
      </div>
    </Fragment>
  );
};
export default Principal;
