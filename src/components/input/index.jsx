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
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isGameStarted) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="input-container">
      <FontAwesomeIcon className="icon-input" icon={faChevronRight} />
      <input
        value={value}
        type="text"
        onChange={onChangeText}
        disabled={isLevelPassed}
        ref={inputRef}
        onKeyDown={onKeyPress}
      />
    </div>
  );
}

export default Input;
