import React, { useEffect, useState } from "react";
import './CountDown.scss';

const getRemainTime = () => {
  let now = new Date(),
    remainTime = (new Date('Sep 31 2020 00:00:00 GMT-0500') - now + 1000) / 1000,
    remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2), 
    remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
  }
}

const totalTimeLeft = getRemainTime();

const CountDown = () => {

  const [timeLeft, setTimeLeft] = useState(getRemainTime());

  useEffect(() => {
    const timerUpDate = setTimeout(() => {
      setTimeLeft(getRemainTime());
    }, 1000);
    if (timeLeft.remainTime <= 1) {
      clearTimeout(timerUpDate);
    }
    return () => clearTimeout(timerUpDate);
  });

  return (
    <div className={'countdown-container'}>
      <div className={'countdown-container__message'}>
        <p>closing in</p> 
      </div>
      <div className={'countdown-container__timer'}>
        s
      </div>  
    </div>
  ); 
}

export default CountDown;

{/*<h1>Tiempo restante para que me la chupes</h1>
<p>{timeLeft.remainDays}d:{timeLeft.remainHours}h:{timeLeft.remainMinutes}m:{timeLeft.remainSeconds}s</p>
{timeLeft.remainTime <= 1 && <p>Ya me la puedes chupar</p>}*/}