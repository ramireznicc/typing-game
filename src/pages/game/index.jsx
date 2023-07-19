import { useEffect, useState } from "react";

import LEVEL_DATA from "../../data/level-data.json";
import { Display, Input, Button } from "../../components";
import "./styles.css";

function Game() {
  const [level, setLevel] = useState(1);
  const [isLevelPassed, setIsLevelPassed] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const wordsLeft = words.length - currentWordIndex;
  const [isClockRunnig, setIsClockRunning] = useState(false);

  const onHandleChangeText = (event) => {
    setUserInput(event.target.value);
  };

  const onHandleEnterKey = () => {
    if (!isGameStarted) {
      setGameStarted(true);
    }
  };

  const nextLevel = () => {
    setGameStarted(false);
    setIsLevelPassed(false);
    setCurrentWordIndex(0);
    setLevel((prev) => prev + 1);
  };

  const getButton = () => {
    if (!isLevelPassed) {
      return (
        <Button icon="faRotate" onClick={() => window.location.reload()}>
          RESTART GAME
        </Button>
      );
    }

    if (isLevelPassed) {
      if (level < 3) {
        return (
          <Button icon="faForward" onClick={nextLevel}>
            NEXT LEVEL
          </Button>
        );
      } else {
        return (
          <Button icon="faPlay" onClick={() => window.location.reload()}>
            PLAY AGAIN
          </Button>
        );
      }
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        onHandleEnterKey();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  useEffect(() => {
    const filteredByLevel = LEVEL_DATA.find((item) => item.value === level);
    setWords(filteredByLevel.words);
    setWinMessage(filteredByLevel.winMessage);
  }, [level]);

  useEffect(() => {
    if (userInput === words[currentWordIndex]) {
      setCurrentWordIndex((prev) => prev + 1);
      setUserInput("");
    }

    if (isGameStarted && currentWordIndex === words.length) {
      setIsLevelPassed(true);
    }

    if (isGameStarted) {
      setIsClockRunning(true);
    }

    if (isLevelPassed) {
      setIsClockRunning(false);
    }
  }, [
    userInput,
    words,
    currentWordIndex,
    wordsLeft,
    isGameStarted,
    isLevelPassed,
  ]);

  return (
    <div className="container game-animation">
      <div className="container-margins">
        <Display
          word={words[currentWordIndex]}
          level={level}
          wordsLeft={wordsLeft}
          winMessage={winMessage}
          isLevelPassed={isLevelPassed}
          isGameStarted={isGameStarted}
          isClockRunnig={isClockRunnig}
        />
        <Input
          value={userInput}
          onChangeText={onHandleChangeText}
          isLevelPassed={isLevelPassed}
          isGameStarted={isGameStarted}
        />
        {getButton()}
      </div>
    </div>
  );
}

export default Game;
