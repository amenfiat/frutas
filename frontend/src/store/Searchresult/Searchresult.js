import React from "react";
import { productest } from "../../assets/data/products";

const { search } = window.location;
const query = new URLSearchParams(search).get("s");
const prodtest = productest();

const Searchresult = () => {
  if (query) {
    const filteredprod = prodtest.filter(function (itm) {
      const titlelower = itm.title.toLowerCase();
      return titlelower.includes(query.toLowerCase());
    });
    if (!(filteredprod.length > 0)) {
      return (
        <div>
          <h1>No se hallaron resultados para {query}</h1>
        </div>
      );
    } else {
      return (
        <div>
          {filteredprod.map((value) => (
            <div>
              <h1>{value.title}</h1>
              <p>{value.brief}</p>
            </div>
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
