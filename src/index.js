import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoContainer from './functionBased/Components/TodoContainer';
import './functionBased/App.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
