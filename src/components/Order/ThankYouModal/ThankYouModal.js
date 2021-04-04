import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ThankYouModal.css'

import Button from './../../UI/Button/Button';

const ThankYouModal = () => {
    return (
        <React.Fragment>
            <div className={classes.ThankYouModal}>
                <h2>Your purchase was a success!</h2>
                <h4>You can see your order in the orders page.</h4>
                <h4>Thank you for trusting us!</h4>
                <Button
                    btnType="Success"
                >
                    <Link
                        to="/"
                        style={{
                            color: '#fbc63f',
                            textDecoration: 'none'
                        }}
                        onClick={() => window.location.reload()}
                    >
                        OKAY</Link>
                </Button>
                {/* <Button
                btnType="Success"
            >
                <Link
                    style={{
                        color: '#fff',
                        textDecoration: 'none'
                    }}
                >
                    Go to the order page</Link>
            </Button> */}
            </div>
        </React.Fragment>
    );
}

export default ThankYouModal;