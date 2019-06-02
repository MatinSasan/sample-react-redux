import React from 'react';

import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Maker
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
  );
};

export default NavigationItems;