export function CreateConnection(roomId){
 return{
    connect(){
    console.log(`connected to room ${roomId}`);
    },
    disconnect(){
        console.log(`disconnected from room ${roomId}`);
    },
 }
}