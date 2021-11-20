import React from "react";
import "./Tienda.css";
import { ProductModel } from "../ProductModel/ProductModel";
// import Ecommerce from '../../assets/images/ecommerce.jpg';
import Ecomm from "../../assets/images/ecommerce1.jpg";
import { productest } from "../../assets/data/products";

const prtst = productest();
const distribution = [2, 3, 2];
const items = [];
let j = 0;
for (let i = 0; i < distribution.length; i++) {
  const element = distribution[i];
  const line = [];
  for (let index = 0; index < element; index++) {
    line.push(
      <ProductModel
        id={prtst[j].id}
        title={prtst[j].title}
        brief={prtst[j].brief}
        price={prtst[j].price}
        image={prtst[j].image}
      />
    );
    j += 1;
  }
  items.push(line);
}

const Tienda = () => {
  return (
    <div className="container">
      <div className="store">
        <div className="store__container">
          <img src={Ecomm} alt="ecommerce" className="store__image" />
          {items.map((its) => (
            <div className="store__row">{its}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Tienda };
