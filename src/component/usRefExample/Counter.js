import React, { useState, useEffect, useRef } from 'react';

export default function Counter(){
  let ref = useRef(0);
  let regVar = 0;
   function handleClick(){
    ref.current = ref.current + 1;
    regVar = regVar +1;
    console.log(`ref ${ref.current} \n regVar ${regVar}`);
   }
    return(
    <>
     <button onClick={handleClick}>Click</button>
    </>);
}