import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage/Home';

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" component={HomePage} exact />

        {/* Add new routes here */}

        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;