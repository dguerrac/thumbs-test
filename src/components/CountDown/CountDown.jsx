import React, { useEffect, useState } from "react";
import './CountDown.scss';

const CountDown = () => {

  const getRemainTime = () => {
    let now = new Date(),
      remainTime = (new Date('Oct 12 2020 21:00:00 GMT-0500') - now + 1000) / 1000,
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

  const [timeLeft, setTimeLeft] = useState(getRemainTime());
  const totalTime = 2592000;

  useEffect(() => {
    const timerUpDate = setTimeout(() => {
      setTimeLeft(getRemainTime());
    }, 1000);
    if (timeLeft.remainTime <= 1) {
      clearTimeout(timerUpDate);
    }
    return () => clearTimeout(timerUpDate);
  });

  const remaining = (timeLeft.remainTime * 100) / totalTime;
  const lapsed = ((totalTime - timeLeft.remainTime) * 100) / totalTime;

  return (
    <div className={'countdown-container'}>
      {timeLeft.remainTime <= 1 ? 
        <div className={'countdown-container__time-up'}><p>Time up</p></div> : 
        <>
          <div className={'countdown-container__message'} style={{width: `${lapsed}%`}}>
            <p>closing in</p> 
          </div>
          <div className={'countdown-container__timer'} style={{width: `${remaining}%`}}>
            {timeLeft.remainDays < 1 ? <span>Today</span> : <><b>{timeLeft.remainDays}</b><span>days</span></>}
          </div>
        </>
      } 
    </div>
  ); 
}

export default CountDown;