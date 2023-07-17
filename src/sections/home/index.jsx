import { useEffect, useMemo, useState } from "react";

import { Text, Input } from "../../components";
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

  const onHandleChangeText = (event) => {
    setUserInput(event.target.value);
  };

  useEffect(() => {
    const nextWord = () => {
      setCurrentWordIndex((prev) => prev + 1);
      setCorrectWords((prev) => prev + 1);
      setUserInput("");
    };

    const game = () => {
      if (correctWords === words.length - 1) {
        setIsWinner(true);
        setUserInput("");
      } else {
        nextWord();
      }
    };

    if (userInput === words[currentWordIndex]) {
      game();
    }
  }, [userInput, words, currentWordIndex, isWinner, correctWords]);

  return (
    <div className="container">
      <Text text={words[currentWordIndex]} isWinner={isWinner} />
      <Input value={userInput} onChangeText={onHandleChangeText} />
    </div>
  );
}

export default Home;
