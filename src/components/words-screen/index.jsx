import { LevelTitle, WordsLeft } from "../index";

import "./styles.css";

function WordsScreen({
  level,
  wordsLeft,
  word,
  isLevelPassed,
  isGameStarted,
  winMessage,
}) {
  const getText = () => {
    if (!isGameStarted) {
      return { class: "medium", text: "Press enter to start." };
    } else {
      if (isLevelPassed) {
        return { class: "medium", text: winMessage };
      } else {
        return { class: "large", text: word };
      }
    }
  };

  return (
    <div className="screen-title-container">
      <div className="level-words-container">
        <LevelTitle level={level} />
        <WordsLeft wordsLeft={wordsLeft} />
      </div>
      <div className={"screen" + (isLevelPassed ? " winner" : "")}>
        <p className={"text " + getText().class}>{getText().text}</p>
      </div>
    </div>
  );
}

export default WordsScreen;
