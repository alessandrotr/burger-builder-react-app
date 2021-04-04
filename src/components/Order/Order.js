import React from 'react';

import classes from './Order.css';
import Burger from '../Burger/Burger';

const order = (props) => {
    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        if (ig.amount > 0)
            return <span
                key={ig.name}
                style={{
                    textTransform: 'capitalize',
                    display: 'block',
                    marginTop: '5px',
                    marginBottom: '5px'
                }}
            >
                <strong>{ig.name}:</strong> {ig.amount}
            </span>;
        return null;
    });

    const orderData = [];

    for (let orderDataName in props.orderData) {
        orderData.push(
            {
                name: orderDataName,
                data: props.orderData[orderDataName]
            }
        );
    }

    const orderDataOutput = orderData.map(od => {
        return <span
            key={od.name}
            style={{
                display: 'block',
                marginTop: '5px',
                marginBottom: '5px',
                marginRight: '5px'
            }}
        >
            <strong
                style={{
                    textTransform: 'capitalize'
                }}>{od.name}: </strong>
            {od.data}
        </span>

    });

    return (
        <div className={classes.Order}>
            <div className={classes.Burger}>
                <Burger
                    ingredients={props.ingredients}
                />
            </div>
            <div className={classes.OrderInformation}>
                <h4>Your Information:</h4>
                <p>
                    {orderDataOutput[3]}
                    {orderDataOutput[4]}
                    {orderDataOutput[0]}
                    {orderDataOutput[5]}
                    {orderDataOutput[2]}
                    {orderDataOutput[1]}
                </p>
                <h4>Ingredients ordered:</h4>
                <p>{ingredientOutput}</p>
                <h4>Total Price:</h4>
                <p><strong>€{Number.parseFloat(props.price).toFixed(2)}</strong></p>
            </div>
        </div>
    );
};

export default order;