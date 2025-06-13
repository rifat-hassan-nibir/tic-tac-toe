const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="h-[60px] w-[60px] bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {value}
    </button>
  );
};

export default Square;
