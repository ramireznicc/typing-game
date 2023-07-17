import "./styles.css";

function Text({ text, isWinner }) {
  return (
    <div className={"text-container" + (isWinner ? " winner" : "")}>
      <p className="text">{isWinner ? "You won the game!" : text}</p>
    </div>
  );
}

export default Text;
