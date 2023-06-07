import React, {useState, useRef} from "react";

export default function StopWatch(){
  const [startTime, setStarttime] = useState(null);
  const [now , setNow] = useState(null);
  const intervalRef = useRef(null);

 let passedTime =0;

  function handleStart(){
    setStarttime(Date.now());
   // console.log(startTime);
    setNow(Date.now());
  //  console.log(now);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(()=>{setNow(Date.now());},10) ;
  }
  function handleStop(){
    clearInterval(intervalRef.current);
    /************** */
    
    
  } 
  
 
 
  if(startTime != null && now != null){
    
        passedTime = (now - startTime)/1000;
    
   
  }
    return(
        <>
        <h6>Time Passed {passedTime}</h6>
         <button onClick={handleStart}>Start</button> 
         <button onClick={handleStop}>Stop</button>
        
        </>
    );
}