import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoContainer from './Components/TodoContainer';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
