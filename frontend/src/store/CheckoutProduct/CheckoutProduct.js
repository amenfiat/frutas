import { React, useState } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider/StateProvider';

const CheckoutProduct = ({ id, image, brief, pricePound, amount, minimunSale }) => {
    const [{ basket }, dispatch] = useStateValue();
    const [ quantity, setQuantity ] = useState(amount);

    const updateBasket = () => {
        dispatch({
            type: 'UPDATE_BASKET',
            id: id,
            amount: quantity
        })
    }

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
                        {brief}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{pricePound}</strong>
                    </p>
                    <p className="d-flex justify-content-start align-items-center mb-3 example-parent">
                        <button className="rounded btn btn-light btn-sm" type="button" onClick={() => setQuantity(
                            quantity - 1,
                            )} 
                            disabled={quantity <= minimunSale}>
                             - 
                        </button> 
                        <div>{quantity}</div> 
                        <button className="rounded btn btn-light btn-sm" type="button" onClick={() => 
                            setQuantity(quantity + 1)} disabled={quantity >= 10}>
                             + 
                        </button>
                    </p>
                    <button className="rounded btn-danger" onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>
        </div>
    )
}

export { CheckoutProduct };
