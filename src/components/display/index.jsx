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
  isWrong,
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
          <LevelTitle level={level} />
        </div>
        <div className="right-container">
          <Stopwatch isRunning={isClockRunnig} />
          <WordsLeft wordsLeft={wordsLeft} />
        </div>
      </div>
      <div
        className={
          "screen" + (isLevelPassed ? " winner" : isWrong ? " wrong" : "")
        }
      >
        <p className={"text " + getText().class}>{getText().text}</p>
      </div>
    </div>
  );
}

export default Display;
