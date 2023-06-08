import React, {useState} from "react";
import Square from "./Square";
export default function Board({ xIsNext, squares, onPlay }) {
  // const [squares, setSquare] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
   function CalculateWinner(squares){
    const lines=[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for(let i=0; i< lines.length; i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i){
    if(squares[i] || CalculateWinner(squares)){return;}
    //copy squares arr
    const nextSquares = squares.slice();
    xIsNext? nextSquares[i] = "X" :nextSquares[i] = "O";
  //  setSquare(nextSquares);
  //  setXIsNext(!xIsNext);
  onPlay(nextSquares);
  } 
  const winner = CalculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
      <>
       <div className="Board">
        <h5 className="text-center m-2">{status}</h5>
        <div className="row Board-row">
          <div className="col-1  "><Square value={squares[0]} onSquareClick={() => handleClick(0)}  /></div>
          <div className="col-1"><Square value={squares[1]} onSquareClick={() => handleClick(1)} /></div>
          <div className="col-1"><Square value={squares[2]}  onSquareClick={() => handleClick(2)}/></div>
        </div>
        <div className="row Board-row">
          <div className="col-1"><Square value={squares[3]}  onSquareClick={() => handleClick(3)}/></div>
          <div className="col-1"><Square value={squares[4]} onSquareClick={() => handleClick(4)} /></div>
          <div className="col-1"><Square value={squares[5]} onSquareClick={() => handleClick(5)}/></div>
        </div>
        <div className="row Board-row">
          <div className="col-1"><Square value={squares[6]} onSquareClick={() => handleClick(6)}/></div>
          <div className="col-1"><Square value={squares[7]} onSquareClick={() => handleClick(7)}/></div>
          <div className="col-1"><Square value={squares[8]} onSquareClick={() => handleClick(8)}/></div>
        </div>
      </div>
      </>
    );
  }