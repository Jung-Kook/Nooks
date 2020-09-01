import { useState, useEffect } from "react";

export const useTimeCheck = (timeout) => {
  const [time, setTime] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });
  return time;
};
