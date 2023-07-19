import { useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "../../components/index";

import "./styles.css";

function Home() {
  const [display, setDisplay] = useState(true);

  setTimeout(() => {
    setDisplay(false);
  }, 5000);

  return (
    <div className="container home">
      <div className="home-container">
        <h3 className={display ? "show" : "hidden"}>Welcome to</h3>
        <h1>The typing game</h1>
        <h4>Let's see how fast you can type.</h4>
      </div>
      <Link to="/game">
        <Button icon="faPlay">Start</Button>
      </Link>
    </div>
  );
}

export default Home;
