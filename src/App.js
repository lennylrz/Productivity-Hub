import './App.css';
import React from 'react'
import DigitalClock from './DigitalClock';
import Todolist from './Todolist';
import Calculator from './Calculator';
function App() {
  return (
    <div className="App">
      <DigitalClock />
      <Todolist />
      <Calculator />
    </div>
  );
}

export default App;
