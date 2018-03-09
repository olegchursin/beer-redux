import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { root } from './reducer'

const store = createStore(root) // creating a store and giving it a {root} from the reducer as a param

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
