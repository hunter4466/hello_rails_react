import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import App from './App';

const Index = () => (
  <Provider store={store}>
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <App/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  </Provider>
);
export default Index;
