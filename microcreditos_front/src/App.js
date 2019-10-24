import React from 'react';
import MagicBox from './components/magicBox/magicBox'
import RandomNumber from './components/randomNumber/randomNumber'
import Button from './components/Button'
import Grid from './components/Grid'
import Card from './components/Card'
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="app-container">  
    
     <div>  
      <MagicBox className="magic-box"
      title="Magic Box"
      description="Magic box for generate text" />
      </div>
      <div>
      <RandomNumber className="random"
      title="Random Number"
      description="Random Number generator" />
      </div>
      <div>
      <Button className="button" tag="Click me... pleaseeeeee, click clik, Whay don´t you click me????" />
      <Grid className="grid" />
      </div>
    
    <About></About>
    </div>
  );
}

export default App;
