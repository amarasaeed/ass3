import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards from './Components/Cards/Cards';
import Card from './Components/Pros/Pros';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Cards/>
<Card/>
<Card/>
<Card/>

  </React.StrictMode>
);


