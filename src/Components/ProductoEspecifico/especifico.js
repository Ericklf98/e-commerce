import React from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../Components/ConsumoApi/api";
import Product from "../Products/products";
const Especifico=()=>{
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    let data = Api(url);
    let { load, datos } = data;
    return(
        <div>
            {load ? <div className="cargando">Cargando...</div> : <Product dato={datos} />}
        </div>
    )
}
export default Especifico;