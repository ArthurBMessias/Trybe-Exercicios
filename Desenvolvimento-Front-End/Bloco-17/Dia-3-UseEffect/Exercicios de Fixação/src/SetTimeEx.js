import React from "react";
import userTimer from '../hooks/userTimer';


export default function SetTimeEx() {
  const { number, multiply, time } = userTimer()
  return (
    <div>
      <h1>{`Número aleatório é ${number}`}</h1>
      <p> {multiply && 'Acertou '} </p>
      <p>Tempo: {time}</p>
    </div>
  );
}
