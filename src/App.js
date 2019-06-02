import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import PizzaMaker from './containers/PizzaMaker/PizzaMaker';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={PizzaMaker} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
