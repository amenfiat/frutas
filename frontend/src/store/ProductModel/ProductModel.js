import React  from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import { Card } from 'react-bootstrap';
import './ProductModel.css';
import { useState } from 'react';

const ProductModel = ({ image, brief, name, pricePound, minimunSale }) => {

    const [state, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(minimunSale);

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                name: name,
                image: image,
                pricePound: pricePound,
                brief: brief,
                amount: quantity,
                minimunSale: minimunSale
            },
        });
    }

    return (
        <>
            <Card style={{ width: '20rem' }} className="container mb-4">
                <Card.Img variant="top" src={image} alt="img-fruit" className="mt-4" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {brief}
                    </Card.Text>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{pricePound}</strong>
                    </p>
                    <p className="d-flex justify-content-center align-items-center mb-3 example-parent">
                        <button className="rounded p-2 btn-light btn-sm" type="button" onClick={() => setQuantity(quantity - 1)} 
                            disabled={quantity <= minimunSale}> - 
                        </button> <div className="p-2 bd-highlight">{quantity }</div> 
                        <button className="rounded p-2 btn-light btn-sm" type="button" onClick={() => 
                            setQuantity(quantity + 1)} disabled={quantity >= 10}> + </button>
                    </p>
                    <button className="rounded" onClick={addToBasket}>Add to Basket!</button>
                </Card.Body>
            </Card>
        </>
    );
}

export { ProductModel };




/*
<div className="container">
            <div className="product">
                <div className="product__info">
                    <h4>{name}</h4>
                    <p>{brief}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{pricePound}</strong>
                    </p>
                </div>
                <img src={image} alt="img-fruit" />
                <button onClick={addToBasket}>Add to Basket!</button>
            </div>
        </div>
*/