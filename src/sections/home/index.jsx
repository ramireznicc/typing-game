import { useEffect, useMemo, useState } from "react";

import { Text, Input, Button } from "../../components";
import "./styles.css";

function Home() {
  const words = useMemo(
    () => [
      "culo",
      "lala",
      "ratata",
      "pikachu",
      "caramelo",
      "otorrino",
      "doctor",
      "asdasd",
    ],
    []
  );
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

    if (userInput === words[currentWordIndex]) {
      setUserInput("");
      game();
    }
  }, [userInput, words, currentWordIndex, isWinner, correctWords]);

  const restartGame = () => {
    setIsWinner(false);
    setCurrentWordIndex(0);
    setCorrectWords(0);
    setUserInput("");
  };

  const nextLevel = () => {
    alert("Next Level");
  };

  return (
    <div className="container">
      <Text text={words[currentWordIndex]} isWinner={isWinner} />
      <Input value={userInput} onChangeText={onHandleChangeText} />
      <Button onClick={button.function}>{button.title}</Button>
    </div>
  );
}

export default Home;
