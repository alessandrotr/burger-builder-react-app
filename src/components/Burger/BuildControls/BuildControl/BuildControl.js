import React, { useState } from 'react';

import classes from './BuildControl.css'

const buildControl = (props) => {

    const [counter, setCounter] = useState(0);
    const [cost, setCost] = useState(0);


    return (
        <div className={classes.BuildControl}>
            <div className={classes.CostIngredient}>€{props.cost}</div>
            <div className={classes.Label}>{props.label}</div>
            <div className={classes.AmountIngredient}>{counter}</div>


            <button
                className={classes.Less}
                onClick={() => {
                    props.removed();
                    setCounter(counter - 1);
                    setCost(cost - props.cost);
                }
                }
                disabled={props.disabled}
            >-</button>

            <button
                className={classes.More}
                onClick={() => {
                    props.added();
                    setCounter(counter + 1);
                    setCost(cost + props.cost);
                }
                }
            >+</button>
            <div className={classes.Cost}>€{cost}</div>
        </div >
    );
};

export default buildControl;