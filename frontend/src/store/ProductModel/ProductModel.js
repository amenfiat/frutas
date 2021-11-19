import React from 'react';
import './ProductModel.css';
import { useStateValue } from '../StateProvider/StateProvider';

const ProductModel = ({ id, image, brief, title, price }) => {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                brief: brief
            },
        });
        console.log(state);
    }

    return (
        <div className="container">
            <div className="product">
                <div className="product__info">
                    <h4>{title}</h4>
                    <p>{brief}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>

                </div>
                <img src={image} alt="img-fruit" />
                <button onClick={addToBasket}>Add to Basket!</button>
            </div>
        </div>
    );
}

export { ProductModel };
