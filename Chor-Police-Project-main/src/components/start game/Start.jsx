import React, { useState } from "react";
import styles from "./Start.module.css"; // Import the CSS module

function Start({ id }) {
  const [isModerator, setIsModerator] = useState(false);

  const handleCheckboxChange = () => {
    setIsModerator(!isModerator);
  };

  const handleStartGame = () => {
    if (isModerator) {
      // Logic to start the game when the moderator checkbox is checked
      console.log("Game started!");
    } else {
      // Display an alert or handle it accordingly if the moderator checkbox is not checked
      alert("You must be a moderator to start the game.");
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h3>Lobby!</h3>
        <h3>#{id}</h3>
      </div>
      <div className={styles.chor}>
        <p className={styles.span}>NO OF CHOR</p>
        <input className={styles.number} type="number"></input>
      </div>

      <h3 className={styles.team}>Teams:</h3>
      <div className={styles.container}>
        <div className={styles.avatars}>
          <img src="./Images/1.jpg" alt="avatar" />
          <p>MASAB</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/2.jpg" alt="avatar" />
          <p>BOBBY</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/3.jpg" alt="avatar" />
          <p>SABIR</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/4.jpg" alt="avatar" />
          <p>AHMAR</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/5.jpg" alt="avatar" />
          <p>HAMMAD</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/6.jpg" alt="avatar" />
          <p>TALHA</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/7.jpg" alt="avatar" />
          <p>DANISH</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/8.jpg" alt="avatar" />
          <p>HASHIR</p>
        </div>
      </div>
      <div className={styles.bharwa}>
        <div className={styles.check}>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isModerator}
          ></input>
          <p className={styles.mod}>I'M MODERATOR</p>
        </div>

        <button
          type="button"
          onClick={handleStartGame}
          className={`${styles.start} ${!isModerator && styles.disabled}`}
          disabled={!isModerator}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Start;
