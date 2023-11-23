
const Decorations = () => {
  const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="decorations">
      <div className="Filter">
        <button>Boules</button>
        <button>Etoiles</button>
        <button>Extra</button>
      </div>
      {table.map((decoration) => {
        return (
          <div className="decoration" key={decoration}>
            {decoration}
          </div>
        );
      })}
    </div>
  );
};

export default Decorations;
