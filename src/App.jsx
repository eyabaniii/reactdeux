import React from 'react';
import './App.css';

import Card from 'react-bootstrap/Card';
import Name from '../src/components/name.jsx';
import Price from '../src/components/price.jsx';
import Description from '../src/components/description.jsx';
import Url from './components/url';



const App = () => {
const firstName=prompt("enter your firstName");
  return (
    <div>
    <Card style={{ width: '18rem' }}>
<Url/>
    <Card.Body>
      <Card.Title> <Name/> </Card.Title>
      <Card.Text>
<Price/>
<Description/>
      </Card.Text>

    </Card.Body>
  </Card>
   
        <div>
            {firstName? 
              <div>
              <p> Hello,{firstName}!</p> 
              <img   src="https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg" alt="Hello Image" /> 
              </div>: 
              <p> Hello there </p> }
        </div>

  
  </div>
  );
};

export default App;
