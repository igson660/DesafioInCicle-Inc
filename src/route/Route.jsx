import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../page/Home'


export default function Routers() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={ Home } />
      </Switch>
    </>
  );
}
