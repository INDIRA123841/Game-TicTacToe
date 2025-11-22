import Board from "./Components/Board";
import "./App.css"
import { useState } from "react";

function calculateWinner(squares){
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (const [a,b,c] of lines){
      if(squares[a] && squares[a] === squares[b] && squares[a]=== squares[c]){
        return {
          winner: squares[a],
          line :[a,b,c]  
        }
      }
      
    }
    return null;
  }

    function App(){
      const [squares, setSquares] = useState(Array(9).fill(null));
      const [xIsNext, setXIsNext] = useState(true);

      const winnerInfo = calculateWinner(squares);
      const winner = winnerInfo?.winner?? null;
      const winningLine = winnerInfo?.line ?? null;
      const isDraw = !winner && squares.every((sq)=> sq !== null);


      const handleSquareClick = (index) =>{
        if(winner || squares[index]){
          return;
        }
        const nextSquares = [...squares];
        nextSquares[index] = xIsNext? "X":"O"  
  

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }
      const handleReset=()=>{
        setSquares(Array(9).fill(null));
        setXIsNext(true);
      }
      let statustext;
      if(winner){
        statustext = `Winner is ${winner}`
      }
      else if(isDraw){
        statustext = `Game is Draw`;
      }
      else{
        statustext = `Next player is ${xIsNext?"X": "O"}`
      }

      const statusClassName = `game-status ${winner? "winner":""} ${isDraw? "draw": ""}`;

      return (
        <main className="gameApp">
           <div className="game-card">
            <header className="game-header">
              <h1 className="title">TIC-TAC-TOE</h1>
              <p className="subtitle">Play tictactoe game in modern react UI.</p>
            </header>
            <section className="game-main">
              <Board 
              squares ={squares}
              onSquaresClick ={handleSquareClick}
              winningLine={winningLine}
              />

            </section>
           </div>
            <aside className="game-pannel">
              <div className="game-meta">
                <span className="badge">
                  {xIsNext? "X's turn" :"O's turn"}
                </span>
              </div>
              <p className={statusClassName}>{statustext}</p>
              <button 
              type="button"
              className="reset"
              onClick={handleReset}
              >Restart Game</button>
            </aside>
        </main>
        
      )
      
    }
export default App;

