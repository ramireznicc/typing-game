import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faForward, faPlay } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Button({ children, onClick, isWinner, isGameEnded }) {
  return (
    <button className="button" onClick={onClick}>
      <FontAwesomeIcon
        className="icon-button"
        icon={isGameEnded ? faPlay : isWinner ? faForward : faRotate}
      />
      {children}
    </button>
  );
}

export default Button;
