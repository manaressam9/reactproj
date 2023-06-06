import React, {useEffect, useState} from "react";
import { CreateConnection } from "./chat";
console.log('outside comp body');
const rooms =['general', 'study', 'music', 'sports'];

export default function ChatRoom(){
    console.log('comp mounted')
    const [roomId, setRoomId] = useState(0);
    const [isShown, setIsShown] = useState(false);
    useEffect(() => {
        console.log('effect called');
         const connection = CreateConnection(roomId);
        
         connection.connect();
        return () =>{
           connection.disconnect();
          
        }
    },[roomId])

    return(
        <>
        <label>Choose room to connect to:  </label>{' '}
        <select value={roomId} onChange={e => setRoomId(e.target.value)}>
         {rooms.map(r => (
            <option key={rooms.indexOf(r)} value={rooms.indexOf(r)}>{rooms[rooms.indexOf(r)]}</option>
         ))}
        </select>
        <hr/>
        <button onClick={()=>setIsShown(!isShown)}>{isShown? 'close chat': 'open chat'}</button>
         {isShown && <h6>welcome to room {rooms[roomId]}</h6>} 
        </>
    );
}