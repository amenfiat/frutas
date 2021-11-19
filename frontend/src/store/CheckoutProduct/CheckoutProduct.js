import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider/StateProvider';

const CheckoutProduct = ({ id, image, title, brief, price }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
        console.log(basket);
    }

    return (
        <div className="container">
            <div className="checkoutProduct">
                {/* <div className="checkoutProduct__title">
                    <p>Granadilla</p>
                </div> */}
                <img src={image} alt="" className="checkoutProduct__image" />
                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__brief">
                        {brief}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
}

export { CheckoutProduct };
