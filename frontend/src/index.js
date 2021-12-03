import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from './store/StateProvider/StateProvider';
import reducer, { initialState } from './store/StateProvider/reducer';
import App from './App';
import './index.css';

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);