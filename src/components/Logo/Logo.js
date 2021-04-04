import React from 'react';
import { Link } from 'react-router-dom';

// import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <Link className={classes.Link} to="/"><h2>Burger Builder</h2></Link>
    </div>
);

export default logo;