import React from "react";
import { Api } from "../../Components/ConsumoApi/api";
import "./index.css";
const Categoria = ({ SpecificProd }) => {
  const url = "https://fakestoreapi.com/products/categories";
  let data = Api(url);
  let { load, datos } = data;
  if (!load) {
    datos[4] = "all products";
  }
  const HandleClick = (item) => {
    SpecificProd(item);
  };
  return (
    <div className="componente__category">
      {load ? (
        <div></div>
      ) : (
        datos?.map((item, index) => (
          <div key={index}>
            <button
              type="button"
              className="btn btn__category"
              onClick={() => {
                HandleClick(item);
              }}
            >
              {item}
            </button>
          </div>
        ))
      )}
    </div>
  );
};
export default Categoria;
