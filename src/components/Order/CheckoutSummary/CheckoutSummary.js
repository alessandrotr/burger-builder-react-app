import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div className={classes.Burger}>
                <h1 className={classes.MobileOnly}>Here is your burger!</h1>
                <Burger
                    ingredients={props.ingredients}
                />
                <div className={classes.Message}>
                    <h1 className={classes.DesktopOnly}>Here is your burger!</h1>
                    <h3>Enjoy its juicy deliciousness</h3>
                    <p>If you really want to continue with your order, please click on continue and enter your delivery data.</p>
                    <div>
                        <Button
                            btnType="Danger"
                            clicked={props.checkoutCancelled}
                        >CANCEL</Button>

                        <Button
                            btnType="Success"
                            clicked={props.checkoutContinued}
                        >CONTINUE</Button>
                    </div>
                </div >
            </div>

        </div >
    );
}

export default CheckoutSummary;