import React from "react";
import { useDatos } from '../../apis/Datos';
import { ProductModel } from "../ProductModel/ProductModel";

const { search } = window.location;
const query = new URLSearchParams(search).get("s");

const Searchresult = () => {
  const prodtest = useDatos();
  if (query) {
    const filteredprod = prodtest.filter(function (itm) {
      const titlelower = itm.name.toLowerCase();
      return titlelower.includes(query.toLowerCase());
    });
    if (!(filteredprod.length > 0)) {
      return (
        <div className="container">
          <h3>No se hallaron resultados para: {query}</h3>
        </div>
      );
    } else {
      return (
        <div className="container mt-2">
          {filteredprod.map((item) => (
            <ProductModel
              key={item.id}
              name={item.name}
              brief={item.brief}
              pricePound={item.pricePound}
              image={item.image}
            />
          ))}
        </div>
      );
    }
  } else {
    return (
      <div>
        <h1>No se fijó ningún parámetro de búsqueda... </h1>
      </div>
    );
  }
};

export { Searchresult };