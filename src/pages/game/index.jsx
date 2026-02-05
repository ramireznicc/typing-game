import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import LEVEL_DATA from "../../data/level-data.json";
import { Display, Input, Button } from "../../components";
import "./styles.css";

function Game() {
  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang") || "en";

  const [level, setLevel] = useState(1);
  const [isLevelPassed, setIsLevelPassed] = useState(false);
  const [isGameStarted, setGameStarted] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isClockRunnig, setIsClockRunning] = useState(false);
  const [isWordWrong, setIsWordWrong] = useState(false);
  const wordsLeft = Math.max(0, words.length - currentWordIndex);

  const onHandleChangeText = (event) => {
    setUserInput(event.target.value.toLowerCase());
  };

  const onHandleEnterKey = useCallback(() => {
    if (!isGameStarted) {
      setGameStarted(true);
    }
  }, [isGameStarted]);

  const nextLevel = () => {
    setGameStarted(false);
    setIsLevelPassed(false);
    setCurrentWordIndex(0);
    setUserInput("");
    setIsWordWrong(false);
    setIsClockRunning(false);
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
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        onHandleEnterKey();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onHandleEnterKey]);

  useEffect(() => {
    const languageData = LEVEL_DATA[language] || LEVEL_DATA["en"];
    const filteredByLevel = languageData.find((item) => item.value === level);
    setWords(filteredByLevel.words);
    setWinMessage(filteredByLevel.winMessage);
  }, [level, language]);

  useEffect(() => {
    if (currentWordIndex < words.length && userInput === words[currentWordIndex]) {
      setCurrentWordIndex((prev) => prev + 1);
      setUserInput("");
      return;
    }

    if (isGameStarted && currentWordIndex >= words.length) {
      setIsLevelPassed(true);
    }

    if (isGameStarted && currentWordIndex < words.length) {
      setIsClockRunning(true);
      const currentWord = words[currentWordIndex];
      let wrong = false;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] !== currentWord[i]) {
          wrong = true;
          break;
        }
      }
      setIsWordWrong(wrong);
    }

    if (userInput === "") {
      setIsWordWrong(false);
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
          userInput={userInput}
          currentWordIndex={currentWordIndex}
          isWrong={isWordWrong}
          level={level}
          wordsLeft={wordsLeft}
          totalWords={words.length}
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
          isWrong={isWordWrong}
        />
        {getButton()}
      </div>
    </div>
  );
}

export default Game;
