import { useEffect, useState } from "react";

import { WordsScreen, Input, Button } from "../../components";
import { wordsLevel } from "../../data/words";
import "./styles.css";

function Game() {
  const [level, setLevel] = useState(1);
  const [words, setWords] = useState(wordsLevel.level1);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [button, setButton] = useState({
    title: "Restart Game",
    function: () => restartGame(),
  });

  const onHandleChangeText = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    const game = () => {
      if (correctWords === words.length - 1) {
        setIsWinner(true);
        setButton({ title: "Next Level", function: () => nextLevel() });
      } else {
        setCurrentWordIndex((prev) => prev + 1);
        setCorrectWords((prev) => prev + 1);
      }
    };

    const nextLevel = () => {
      if (level === 1) {
        setLevel(2);
        setIsWinner(false);
        setCurrentWordIndex(0);
        setCorrectWords(0);
        setWords(wordsLevel.level2);
      }
    };

    if (userInput === words[currentWordIndex]) {
      setUserInput("");
      game();
    }
  }, [userInput, words, currentWordIndex, isWinner, correctWords, level]);

  const restartGame = () => {
    setIsWinner(false);
    setCurrentWordIndex(0);
    setCorrectWords(0);
    setUserInput("");
  };

  return (
    <div className="container">
      <div className="container-margins">
        <WordsScreen
          text={words[currentWordIndex]}
          isWinner={isWinner}
          level={level}
        />
        <Input value={userInput} onChangeText={onHandleChangeText} />
        <Button onClick={button.function}>{button.title}</Button>
      </div>
    </div>
  );
}

export default Game;
