import React from 'react';
import logo from './logo.svg';
import './App.css';
import './numberPad'
import NumberPad from './numberPad';

function App() {
  return (
    <div className="App">
      <p className="info">Ben and Charlie, for your final clue you must enter the correct pass code.</p>
      <NumberPad code="1985"></NumberPad>
      <div className="hidden">
        <h1>WELL DONE!</h1>
        <p>Now to get your final prize, find a place where you can see your eyes.</p>
        <p>HAPPY BUNNY DAY!!!</p>
      </div>
    </div>
  );
}

export default App;
