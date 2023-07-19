import "./styles.css";

function LevelTitle({ level }) {
  return (
    <h3 className="level-title">
      Level <span className="level">{level}</span>
    </h3>
  );
}

export default LevelTitle;
