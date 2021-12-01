import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Index = () => (
  <Provider store={store}>
    <React.Fragment>
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
    </React.Fragment>
  </Provider>
);
export default Index;
