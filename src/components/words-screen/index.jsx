import { LevelTitle } from "../index";

import "./styles.css";

function WordsScreen({ words, isWinner, level, title }) {
  return (
    <div className="screen-title-container">
      <LevelTitle title={`Level ${level}`} />
      <div className={"screen" + (isWinner ? " winner" : "")}>
        <p className="text">{isWinner ? title : words}</p>
      </div>
    </div>
  );
}

export default WordsScreen;
