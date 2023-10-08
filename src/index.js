import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './comp/home/home';
import GrowingPlant from './comp/growingplant/growingPlant';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

