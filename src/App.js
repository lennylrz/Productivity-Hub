import './App.css';
import React from 'react'
import DigitalClock from './DigitalClock';
import Todolist from './Todolist';
import Calculator from './Calculator';
function App() {
  return (
    <>
    <h1>Productivity Hub</h1>
    <div className="App">
      <DigitalClock />
      <Todolist />
      <Calculator />
    </div>
    </>
  );
}

export default App;
