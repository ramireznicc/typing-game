import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

function Input({ value, onChangeText }) {
  return (
    <div className="input-container">
      <FontAwesomeIcon className="icon" icon={faKeyboard} />
      <input value={value} type="text" onChange={onChangeText} />
    </div>
  );
}

export default Input;
