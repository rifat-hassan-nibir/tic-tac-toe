import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  // check for winner
  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  const handleSquareClick = (i) => {
    // Check if the square is already filled
    if (squares[i] || winner) return;

    // Create a new array for game history
    const nextSquares = squares.slice();

    // Toggle between X and O
    if (isXNext) {
      nextSquares[i] = "X";
      setIsXNext(false);
    } else {
      nextSquares[i] = "O";
      setIsXNext(true);
    }
    setSquares(nextSquares);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen bg-gray-100">
      <p className="text-2xl text-black">{status}</p>
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

function calculateWinner(squares) {
  // This function can be implemented to check for a winner
  // It will return the winner ('X' or 'O') or null if there is no winner yet

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner ('X' or 'O')
    }
  }
  return null;
}
