import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Button } from "../../components/index";

import "./styles.css";

function Home() {
  const [display, setDisplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  setTimeout(() => {
    setDisplay(false);
  }, 5000);

  const handleSetDisplay = () => {
    setDisplay(!display);
  };

  const isMobileDevice = () => {
    const mobiles =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const userAgent = navigator.userAgent;
    return mobiles.test(userAgent);
  };

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return (
    <div className="container home">
      <div className="home-container">
        <span style={{ color: "white" }}>
          {isMobile ? "Estas en un mobil" : "Estas en un desktop"}
        </span>
        <h3 className={display ? "show" : "hidden"}>Welcome to</h3>
        <h1>the Typing game</h1>
        <h4>Let's see how fast you can type.</h4>
      </div>
      <Link to="/game">
        <Button icon="faPlay" onClick={handleSetDisplay}>
          Start
        </Button>
      </Link>
    </div>
  );
}

export default Home;
