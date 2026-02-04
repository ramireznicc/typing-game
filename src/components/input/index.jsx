import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Input({
  value,
  onChangeText,
  onKeyPress,
  isGameStarted,
  isLevelPassed,
  isWrong,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isGameStarted) {
      inputRef.current.focus();
    }
  }, [isGameStarted]);

  const inputClass = isWrong ? "input-wrong" : value ? "input-correct" : "";

  return (
    <div className="input-container">
      <FontAwesomeIcon className="icon-input" icon={faChevronRight} />
      <input
        value={value}
        type="text"
        onChange={onChangeText}
        disabled={!isGameStarted || isLevelPassed}
        ref={inputRef}
        onKeyDown={onKeyPress}
        className={inputClass}
        aria-label="Type the word shown on screen"
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
}

export default Input;
