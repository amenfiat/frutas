import React from 'react';
import { useStateValue } from '../StateProvider/StateProvider';
import { Card } from 'react-bootstrap';
import './ProductModel.css';

const ProductModel = ({ image, brief, name, pricePound }) => {

    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                name: name,
                image: image,
                pricePound: pricePound,
                brief: brief
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
                    <button onClick={addToBasket}>Add to Basket!</button>
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