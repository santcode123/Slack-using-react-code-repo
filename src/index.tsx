import React from 'react';
import ReactDOM from 'react-dom';

// components
import { SlackApp } from './SlackApp';

//style
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SlackApp />
  </React.StrictMode>,
  document.getElementById('root')
);
