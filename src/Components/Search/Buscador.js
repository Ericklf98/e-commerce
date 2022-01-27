import React from "react";
import Select from "react-select";
import Animated from "react-select/animated";
import { Api } from "../../Components/ConsumoApi/api";

const Buscador = ({ OnSearch1}) => {
  const url = `https://fakestoreapi.com/products`;
  let data = Api(url);
  let {datos } = data;
  const HandleSelect = (item) => {
    console.log("item", item);
    OnSearch1(item.id);
  };
  return (
    <div className="form-group col-md-6">
      <Select
        closeMenuOnSelect={false}
        components={Animated()}
        onChange={HandleSelect}
        placeholder="Buscar"
        options={datos}
        getOptionValue={(options) => options.id}
        getOptionLabel={(options) => options.title}
      />
    </div>
  );
};
export default Buscador;
