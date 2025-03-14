import { useState } from "react";
import styles from "./CookieClicker.module.css";

export default function CookieClicker() {
  const [score, setScore] = useState(0);

  function handleClick() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <div>
      <h2>Poeng: {score}</h2>

      <button
        className={styles.cookieButton}
        id="cookieButton"
        onClick={handleClick}
      >
        <img
          className="buttonImg"
          id="buttonImg"
          src="/images/cookie.png"
          alt="Kjeks"
        />
        <p>Click Me</p>
      </button>

      <button
        className={styles.resetButton}
        id="cookieButton"
        onClick={resetScore}
      >
        <img
          className="buttonImg"
          id="buttonImg"
          src="/images/cookie.png"
          alt="Kjeks"
        />
        <p>Reset</p>
      </button>
    </div>
  );
}
