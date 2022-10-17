import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContext from './contexts/UserContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <App />
    </UserContext>
  </React.StrictMode>
);
