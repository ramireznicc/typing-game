import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Link to="/game">Start Game</Link>
    </div>
  );
}

export default Home;
