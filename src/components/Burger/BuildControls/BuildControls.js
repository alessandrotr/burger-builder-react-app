import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad', cost: 0.50 },
    { label: 'Bacon', type: 'bacon', cost: 1 },
    { label: 'Cheese', type: 'cheese', cost: 0.50 },
    { label: 'Meat', type: 'meat', cost: 1.50 }
];


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <h1 className={classes.titleDesktop}>Build your burger</h1>

        <div className={classes.CurrentPrice}>
            <span> <strong>€{props.price.toFixed(2)}</strong></span>
        </div>

        <div>

            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    cost={ctrl.cost}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
        </div>
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>
    </div>

);

export default buildControls;