import "./styles.css";

function Language({ onClick, language }) {
  return (
    <div className="languages">
      <button
        className={"language-en " + (language !== "en" ? "disabled" : "")}
        value="en"
        onClick={onClick}
      >
        🇬🇧EN
      </button>
      <button
        className={"language-es " + (language !== "es" ? "disabled" : "")}
        value="es"
        onClick={onClick}
      >
        🇪🇸ES
      </button>
    </div>
  );
}

export default Language;
