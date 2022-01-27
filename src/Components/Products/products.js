import React, { Fragment } from "react";
import Carta from "./Carta/carta.js";
import "./style.css";
const Product = ({ dato }) => {
  var validar = true;

  if (
    !Array.isArray(dato) &&
    (dato.length !== 0 || dato.length !== undefined)
  ) {
    validar = false;
  }

  return (
    <Fragment>
      <div className="margen">
        {validar ? (
          dato?.map((item, index) => (
            <div key={index}>
              <Carta item={item} />
            </div>
          ))
        ) : (
          <Carta item={dato} />
        )}
      </div>
    </Fragment>
  );
};
export default Product;
