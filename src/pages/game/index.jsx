import { useEffect, useState } from "react";

import { WordsScreen, Input, Button } from "../../components";
import { wordsLevel } from "../../data/words";

function Game() {
  const [level, setLevel] = useState(1);
  const [words, setWords] = useState(wordsLevel.level1);
  const [screenTitle, setScreenTitle] = useState("Awesome.");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [isWinner, setIsWinner] = useState(false);
  const [isGameEnded, setGameEnded] = useState(false);
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
        if (level === 2) {
          setIsWinner(true);
          setButton({ title: "Next Level", function: () => nextLevel() });
          setScreenTitle("Wow. You are good.");
        }
        if (level === 3) {
          setIsWinner(true);
          setGameEnded(true);
          setButton({ title: "Play Again", function: () => restartGame() });
          setScreenTitle("You won the game.");
        } else {
          setIsWinner(true);
          setButton({ title: "Next Level", function: () => nextLevel() });
        }
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
        setButton({ title: "Restart Game", function: () => restartGame() });
      }
      if (level === 2) {
        setLevel(3);
        setIsWinner(false);
        setCurrentWordIndex(0);
        setCorrectWords(0);
        setWords(wordsLevel.level3);
        setButton({ title: "Restart Game", function: () => restartGame() });
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
    setLevel(1);
    setWords(wordsLevel.level1);
    setUserInput("");
  };

  return (
    <div className="container">
      <div className="container-margins">
        <WordsScreen
          words={words[currentWordIndex]}
          isWinner={isWinner}
          level={level}
          title={screenTitle}
        />
        <Input value={userInput} onChangeText={onHandleChangeText} />
        <Button
          isGameEnded={isGameEnded}
          isWinner={isWinner}
          onClick={button.function}
        >
          {button.title}
        </Button>
      </div>
    </div>
  );
}

export default Game;
