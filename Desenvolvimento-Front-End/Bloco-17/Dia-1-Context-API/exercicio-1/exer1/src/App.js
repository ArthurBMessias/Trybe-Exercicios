import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import { useState } from 'react';
import { MyContext } from './MyContext';


function App() {

  const initialState = {
    signal: { color: 'red' },
  }

  const [redS, setReds ] = useState({color: 'red'})
  const [yellowS, setYellows ] = useState({color: 'yellow'})
  const [greenS, setGreens ] = useState({color: 'green'})
  const [signal, setSignal ] = useState('red')

  const redSignal = () => {
    setReds({color: 'red'})
    setSignal('red')
  }
  const yellowSignal = () => {
    setYellows({color: 'yellow' })
    setSignal('yellow')
  }
  const greenSignal = () => {
    setGreens({color: 'green' })
    setSignal('green')
  }


  const contextValue ={
    redS,
    yellowS,
    greenS,
    signal,
    redSignal,
    yellowSignal,
    greenSignal,
  }

  return (
    <div className="container">
      <MyContext.Provider value={contextValue}>
      <Cars />
      <TrafficSignal />
      </MyContext.Provider>

    </div>
  );
}

export default App;
