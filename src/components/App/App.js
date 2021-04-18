import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <MainLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/info' component={Info} />
        </Switch>
      </BrowserRouter>
    </MainLayout>
  </div>
);

export default App;
