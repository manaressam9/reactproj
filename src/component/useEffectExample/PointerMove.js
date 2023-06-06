import React,{useState, useEffect} from "react";
export default function PointerMove(){
 const [mousePos, setMousePose] = useState({x:0, y:0});
 function handleMove(e) {
    setMousePose({ x: e.clientX, y: e.clientY });
  }
 useEffect(()=>{
    window.addEventListener('pointermove', handleMove);
    return() => {
        window.removeEventListener('pointermove', handleMove);
    }
 }, []);
    return(
        <>
        <div style={{
            mousePos: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
            pointerEvents: 'none',
            left: 20,
            top: 20,
            width: 40,
            height: 40,
        }}></div>
        </>
    );
}