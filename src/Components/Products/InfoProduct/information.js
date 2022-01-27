import React from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../ConsumoApi/api";
import { Rating } from "react-simple-star-rating";
import "./index.css";
const Info = () => {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  let data = Api(url);
  let { load, datos } = data;
  return (
    <div className="container">
      {load ? (
        <div className="cargando">Cargando...</div>
      ) : (
        <div className="carta_product">
          <div className="division">
            <img src={datos.image} className="imagen" alt="..." />
            <div>
              <p className="text__titulo">{datos.title}</p>
              <p className="text__price">$ {datos.price}</p>
              <div className="estrellas">
                <Rating initialValue={datos.rating.rate} readonly />
              </div>
            </div>
            <div className="bordes">
              <p className="text__envio">Envío gratis a todo el país</p>
              <p className="text__stock">
                Stock disponible: ({datos.rating.count})
              </p>
              <div className="select">
                <button type="button" className="btn_carrito">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
          <div className="descr">
            <div>
              <hr></hr>
              <h4 className="descr_h4">Descripción:</h4>
              <p className="text_p">{datos.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Info;
