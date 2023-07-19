import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faForward, faPlay } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Button({ children, onClick, icon }) {
  const selectIcon = (icon) => {
    if (icon === "faRotate") {
      return faRotate;
    }
    if (icon === "faForward") {
      return faForward;
    }
    if (icon === "faPlay") {
      return faPlay;
    }
  };

  return (
    <button className="button" onClick={onClick}>
      <FontAwesomeIcon className="icon-button" icon={selectIcon(icon)} />
      {children}
    </button>
  );
}

export default Button;
