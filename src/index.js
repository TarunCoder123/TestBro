import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './App/store'
import { Provider } from 'react-redux'
import { Counter } from './feature/counter/Counter'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Counter/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

