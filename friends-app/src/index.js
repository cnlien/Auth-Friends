import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import App from './App';
import * as serviceWorker from './serviceWorker';

// STYLES
import './styles/global.scss'
import theme from './utils/theme'
import { ThemeProvider } from "@chakra-ui/core";

// REDUX
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// REDUCERS
import { friendsReducer } from './reducers'

// STORE
const store = createStore (friendsReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
