import React from "react"
import { Provider } from 'react-redux';
import App from './App'
import store from './redux/configureStore';
const Index = () => {
    return (
      <Provider store={store}>
        <React.Fragment>
          <App />
        </React.Fragment>
      </Provider>
    );
}
export default Index
