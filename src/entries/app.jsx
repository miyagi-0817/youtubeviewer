import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import App from '~/routings/App';
import GlobalStyle from '~/style/GlobalStyle';  // 追加する

const rootEl = document.getElementById('root');

/* 以下修正する */
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootEl,
);
