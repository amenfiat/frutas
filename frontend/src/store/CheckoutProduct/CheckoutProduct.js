import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider/StateProvider';

const CheckoutProduct = ({ id, image, name, pricePound }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }

    return (
        <div className="container">
            <div className="checkoutProduct">
                <img src={image} alt="" className="checkoutProduct__image" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__brief">
                        {name}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{pricePound}</strong>
                    </p>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
}

export { CheckoutProduct };
