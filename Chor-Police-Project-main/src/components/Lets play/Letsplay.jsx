import React from "react";
import styles from "./Letsplay.module.css";
function Letsplay() {
  return (
    <div className={styles.parent}>
      <div className={styles.you}>
        <img src="./Images/1.jpg" alt="avatar" />
        <p className={styles.names}>You</p>
      </div>

      <h3 className={styles.team}>Let's Play</h3>
      <div className={styles.container}>
        <div className={styles.avatars}>
          <img src="./Images/2.jpg" alt="avatar" />
          <p>MASAB</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/3.jpg" alt="avatar" />
          <p>BOBBY</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/4.jpg" alt="avatar" />
          <p>LUQMAN</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/5.jpg" alt="avatar" />
          <p>SABIR</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/6.jpg" alt="avatar" />
          <p>AHMAR</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/7.jpg" alt="avatar" />
          <p>HAMMAD</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/8.jpg" alt="avatar" />
          <p>TALHA</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/2.jpg" alt="avatar" />
          <p>DANISH</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/5.jpg" alt="avatar" />
          <p>ALYAN</p>
        </div>
        <div className={styles.avatars}>
          <img src="./Images/3.jpg" alt="avatar" />
          <p>HASHIR</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p className={styles.name}>Vote Now</p>
        <button className={styles.start}>Submit</button>
      </div>
    </div>
  );
}

export default Letsplay;
