import "./styles.css";

function WordsLeft({ wordsLeft }) {
  return (
    <h3 className="words-left">
      <span className="left">{wordsLeft}</span> words left
    </h3>
  );
}

export default WordsLeft;
