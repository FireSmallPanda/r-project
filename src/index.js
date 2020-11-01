import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import time from './views/Time/Time'
import btnFlag from './views/BtnFlag/BtnFlag'
import cCom from './views/CCom/CCom'
import dataChange from './views/DataChange/DataChange'
import tabBtn from './views/TabBtn/TabBtn'
import parentProps from './views/ParentProps/ParentProps'

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
time();
btnFlag();
cCom();
dataChange();
tabBtn();
parentProps();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
