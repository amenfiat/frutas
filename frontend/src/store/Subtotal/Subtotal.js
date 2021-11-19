import React from 'react';
import './Subtotal.css';
import NumberFormat from 'react-number-format';
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../StateProvider/reducer';

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(dispatch);
    return (
        <div className="subtotal">
            <NumberFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items ) = <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export { Subtotal };