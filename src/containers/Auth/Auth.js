import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import { updateObject, checkValidity } from '../../shared/utility';

import * as actions from '../../store/actions/index';

const auth = props => {
    const [authForm, setAuthForm] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'E-Mail Address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true,
                validationText: 'A valid E-Mail is required'
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                validationText: 'A password must be at least 6 characters'
            },
            valid: false,
            touched: false
        }
    })
    const [isSignup, setIsSignup] = useState(true);

    const { buildingBurger, authRedirectPath, onSetAuthRedirectPath } = props;

    useEffect(() => {
        if (!buildingBurger && authRedirectPath !== '/') {
            onSetAuthRedirectPath();
        }
    }, [buildingBurger, authRedirectPath, onSetAuthRedirectPath]);

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(authForm, {
            [controlName]: updateObject(authForm[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, authForm[controlName].validation)
            })
        });
        setAuthForm(updatedControls);
    }

    const markTouchedHandler = (inputElement) => {
        const updatedAuthForm = { ...authForm };
        const updatedInputElement = { ...updatedAuthForm[inputElement] };
        updatedInputElement.touched = true;
        updatedAuthForm[inputElement] = updatedInputElement;
        setAuthForm(updatedAuthForm);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value, authForm.password.value, isSignup);
    }

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup);
    }

    let titleLogin = <h1>Create your Account</h1>;
    if (!isSignup) {
        titleLogin = <h1>Log into your Account</h1>;
    }

    const formElementsArray = [];
    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        });
    }

    let form = formElementsArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            markTouched={() => markTouchedHandler(formElement.id)}
            changed={(event) => inputChangedHandler(event, formElement.id)}
        />
    ));

    if (props.loading) {
        form = <Spinner />
    }

    let errorMessage = null;

    if (props.error) {
        errorMessage = (
            <p style={{ textAlign: 'left' }}>{props.error.message.replace(/_/g, ' ')}</p>
        );
        console.log(props.error);
    }

    let authRedirect = null;
    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }

    return (
        <div className={classes.AuthContainer}>
            <div className={classes.TopBread}></div>
            <div className={classes.Auth}>
                {titleLogin}
                {authRedirect}
                {errorMessage}
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button
                    clicked={switchAuthModeHandler}
                    btnType="Switch"
                >{isSignup ? 'Do  you already have an account? Log in!' : 'Don\'t have an account yet? Create one!'}</Button>
            </div>
            <div className={classes.BottomBread}></div>
        </div >
    );
}

const mapStateTopProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}
export default connect(mapStateTopProps, mapDispatchToProps)(auth);