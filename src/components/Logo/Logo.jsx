import React from 'react';

import pizzaLogo from '../../assets/images/133 burger-logo.png';
import classes from './Logo.module.css';

const Logo = props => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={pizzaLogo} alt="Pizza Logo" />
    </div>
  );
};

export default Logo;
