import { LevelTitle, Mistakes, Stopwatch, WordsLeft } from "../index";

import "./styles.css";

function Display({
  level,
  wordsLeft,
  word,
  isLevelPassed,
  isGameStarted,
  winMessage,
  isClockRunnig,
  mistakes,
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
        <div className="left-container">
          <Stopwatch isRunning={isClockRunnig} />
          <LevelTitle level={level} />
        </div>
        <div className="right-container">
          <Mistakes mistakes={mistakes} />
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
