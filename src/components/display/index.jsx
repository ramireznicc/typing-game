import { LevelTitle, Stopwatch, WordsLeft } from "../index";

import "./styles.css";

function Display({
  level,
  wordsLeft,
  word,
  isLevelPassed,
  isGameStarted,
  winMessage,
  isClockRunnig,
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
      <div className="top-container">
        <div>
          <LevelTitle level={level} />
        </div>
        <div className="clock-words-container">
          <Stopwatch isRunning={isClockRunnig} />
          <WordsLeft wordsLeft={wordsLeft} />
        </div>
      </div>
      <div className={"screen" + (isLevelPassed ? " winner" : "")}>
        <p className={"text " + getText().class}>{getText().text}</p>
      </div>
    </div>
  );
}

export default Display;
