import Square from "./Square";
import "./Board.css"

function Board(props){
    function renderSquare(index){
        // Check if the square is part of the winning line
        const isWinning = props.winningLine && props.winningLine.includes(index);
        

        return (
            <Square
            key={index}
            value={props.squares[index]}
            // Gets the value for this square from the board array. Example: props.Squares = ["X", null, "O", …]So this square will display “X” or “O”.
            onClick ={() => props.onSquaresClick(index)}
            isWinning ={isWinning}
            />
        );
    }
    return (
        <div className="board">
            <div className="row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

        </div>
    )
}

export default Board;