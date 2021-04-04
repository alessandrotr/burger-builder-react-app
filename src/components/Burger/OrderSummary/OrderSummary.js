import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

import classes from './OrderSummary.css'

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            if (props.ingredients[igKey] !== 0) {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>{igKey}:</span> {props.ingredients[igKey]}
                    </li>)
            } else {
                return igKey = null
            }
        });
    return (
        <Auxiliary>
            <div className={classes.OrderSummary}>
                <h2>Your Order</h2>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={props.purchaseCanceled}>CANCEL</Button>
                <Button
                    btnType="Success"
                    clicked={props.purchaseContinued}>CONTINUE</Button>
            </div>
        </Auxiliary>
    );
}

export default orderSummary;