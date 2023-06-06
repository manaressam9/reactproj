import React, { useState, useEffect } from 'react';
console.log('outside comp');
export default function Counter() {
    console.log('inside comp');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('effect called');
    const intervalId = setInterval(() => {
      setCount(c => c + 1); // ✅ Pass a state updater
    }, 10000);
    return () => {console.log('clear effect called');clearInterval(intervalId);};
  }, []); // ✅ Now count is not a dependency

  return <h1>{count}</h1>;
}