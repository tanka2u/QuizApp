import { useEffect, useState } from "react";

export default function QuizTimer(timeout, onTimeOut) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [timeout, onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  // setTimeout(() => {    onTimeOut();}, timeout);
  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
