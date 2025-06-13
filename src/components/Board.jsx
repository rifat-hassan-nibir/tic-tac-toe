import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleSquareClick = (i) => {
    // Check if the square is already filled
    if (squares[i]) return;

    // Create a new array for game history
    const nextSquares = squares.slice();

    // Toggle between X and O
    if (isXNext) {
      nextSquares[i] = "X";
      setIsXNext(false);
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen bg-gray-100">
      <div className="flex gap-2">
        <Square value={squares[0]} onSquareClick={() => handleSquareClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleSquareClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleSquareClick(2)} />
      </div>

      <div className="flex gap-2">
        <Square value={squares[3]} onSquareClick={() => handleSquareClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleSquareClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleSquareClick(5)} />
      </div>

      <div className="flex gap-2">
        <Square value={squares[6]} onSquareClick={() => handleSquareClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleSquareClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleSquareClick(8)} />
      </div>
    </div>
  );
};

export default Board;
