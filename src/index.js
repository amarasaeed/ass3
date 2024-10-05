import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards from './Components/Cards/Cards';
import Card from './Components/Props/Props';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {<div className='flex  flex-row gap-10 w-6/6  '>
      < Cards />  </div>}
    {<div className='flex  flex-row gap-8 w-6/6 m-2 '>
      <Card name='aysha' class='teacher' />
      <Card name='maria' class='teacher' />
      <Card name='amara' class='student' />
    </div>}
  


  </React.StrictMode>
);


