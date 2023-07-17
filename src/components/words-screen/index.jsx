import { LevelTitle } from "../index";

import "./styles.css";

function WordsScreen({ text, isWinner, level }) {
  return (
    <div className="screen-title-container">
      <LevelTitle title={`Level ${level}`} />
      <div className={"screen" + (isWinner ? " winner" : "")}>
        <p className="text">{isWinner ? "You won the game!" : text}</p>
      </div>
    </div>
  );
}

export default WordsScreen;
