import React from 'react';
import './Checkout.css';
import Ecomm from '../../assets/images/ecommerce2.jpg';
import { CheckoutProduct } from '../CheckoutProduct/CheckoutProduct';
import { Subtotal } from '../Subtotal/Subtotal';
import { useStateValue, useEffect } from '../StateProvider/StateProvider';
import { Link } from "react-router-dom";

const Checkout = () => {
    const [{ basket }] = useStateValue();


    return (
        <div className="container">
            <div className="checkout">
                <div className="checkout__left">
                    <img src={Ecomm} alt="" className="checkout__ad" />
                    <div>
                        <h4 className="checkout__title">
                            Carrito de compras!
                        </h4>
                        {basket.map((item) => (

                            <CheckoutProduct
                                key={item.id}
                                name={item.name}
                                brief={item.brief}
                                pricePound={item.pricePound}
                                image={item.image}
                                amount={item.amount}
                                minimunSale={item.minimunSale}
                            />
                        ))}
                    </div>
                        <div className="border-top d-flex justify-content-around align-items-center mb-3">
                            <Link to="/tienda">
                                <button className="rounded p-2 bd-highlight col-example btn-success" type="button" onClick={() => "/tienda"}> Seguir Comprando </button>
                            </Link>
                            <button className="rounded p-2 bd-highlight col-example btn-warning" 
                            
                            type="button"> Actualizar Carrito </button>
                        </div>
                </div>

                <div className="checkout__right">
                    <Subtotal />
                </div>
            </div>
        </div>
    )
}

export { Checkout };

