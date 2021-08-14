import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const todos = JSON.parse(localStorage.getItem('todos')) || {
  todos: [],
  counter: 0,
};

ReactDOM.render(
  <React.StrictMode>
    <App todos={todos}/>
  </React.StrictMode>,
  document.getElementById('root')
);
