import "./styles.css";

function Mistakes({ mistakes }) {
  return (
    <h3 className="mistakes">
      <span className="number-mistakes">{mistakes}</span> mistakes
    </h3>
  );
}

export default Mistakes;
