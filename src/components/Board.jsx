import Square from "./Square";

const Board = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen bg-gray-100">
      <div className="flex gap-2">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex gap-2">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="flex gap-2">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
