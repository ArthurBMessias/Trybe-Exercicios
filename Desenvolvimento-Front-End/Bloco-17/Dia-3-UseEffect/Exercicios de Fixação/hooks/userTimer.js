import {useEffect, useState} from "react";

const userTimer = () => {
  const [num, setNum] = useState(1);
  const [multiply, setMultiply] = useState(false);
  const [time, setTime] = useState(1);

  const timeInterval = 1000;
  const numberTime = 10000;
  const noMagicNum = 4000;
  const minRandom = 1;
  const maxRandom = 100;

  const increaseTime = () => setTime(time => time + 1);

  const verifyMultiply = randomN => {
    if( randomN % 3 === 0 || randomN % 5 === 0) {
      setMultiply(true);
      setTimeout(() => {
        setMultiply(false)
      }, noMagicNum);
    }
  }

   const pickRandomNumber = () => {
     const randomNumber = Math.round(
       Math.floor(Math.random() * maxRandom) + minRandom
     );
     verifyMultiply(randomNumber);
     setNum(randomNumber);
     setTimeout(0)

   };

   useEffect(() => {
    const interval = setInterval(pickRandomNumber, numberTime );
    const setTimerInterval = setInterval(increaseTime, timeInterval);
    return () => {pickRandomNumber
      clearInterval(interval);
      clearInterval(setTimerInterval);
    };
  }, []);

  return { num, multiply, time };
}

export default userTimer;
