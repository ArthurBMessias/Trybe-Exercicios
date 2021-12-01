// src/TrafficSignal.jsx

import React, { useContext }from 'react';
import { MyContext } from './MyContext';
import redSignalImg from './images/redSignal.jpeg';
import yellowSignalImg from './images/yellowSignal.jpeg';
import greenSignalImg from './images/greenSignal.jpeg';

const renderSignal = (img) => {
  if (img === 'red') return redSignalImg;
  if (img ===  'yellow') return yellowSignalImg;
  if (img ===  'green' ) return greenSignalImg;
  return null;
};

const TrafficSignal = () => {
  const data = useContext(MyContext)
  return (
    <div>
      <div className="button-container">
        <button onClick={() => data.redSignal()} type="button">
          Red
        </button>
        <button onClick={() => data.yellowSignal()} type="button">
          Yellow
        </button>
        <button onClick={() => data.greenSignal()} type="button">
          Green
        </button>
      </div>
      <img className="signal "src= {renderSignal(data.signal)}  alt="meupau"/>
    </div>
  );
};


export default TrafficSignal;
