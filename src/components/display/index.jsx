import { LevelTitle, Stopwatch, WordsLeft } from "../index";

import "./styles.css";

function Display({
  level,
  wordsLeft,
  totalWords,
  word,
  userInput,
  currentWordIndex,
  isLevelPassed,
  isGameStarted,
  winMessage,
  isClockRunnig,
  isWrong,
}) {
  const renderWord = () => {
    if (!isGameStarted) {
      return <span className="medium">Press enter to start.</span>;
    }

    if (isLevelPassed) {
      return <span className="medium">{winMessage}</span>;
    }

    if (!word) return null;

    return (
      <span className="large" key={currentWordIndex}>
        {word.split("").map((letter, i) => {
          let className = "letter";
          if (i < userInput.length) {
            className += userInput[i] === letter ? " correct" : " incorrect";
          }
          return (
            <span key={i} className={className}>
              {letter}
            </span>
          );
        })}
        <span className="cursor">|</span>
      </span>
    );
  };

  const progress = totalWords > 0 ? (currentWordIndex / totalWords) * 100 : 0;

  return (
    <div className="screen-title-container">
      <div className="top-container">
        <div className="left-container">
          <LevelTitle level={level} />
        </div>
        <div className="right-container">
          <Stopwatch isRunning={isClockRunnig} level={level} />
          <WordsLeft wordsLeft={wordsLeft} />
        </div>
      </div>
      <div
        className={
          "screen" + (isLevelPassed ? " winner" : isWrong ? " wrong" : "")
        }
      >
        <p className="text">{renderWord()}</p>
      </div>
      {isGameStarted && (
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default Display;
