import React, { useState } from "react";
import styles from "./Avatar.module.css"; 

import { useNavigate } from "react-router-dom";

function Avatar() {
  const navigate = useNavigate();
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleNextClick = () => {
    if (selectedAvatar) {
      // If an avatar is selected, navigate to the next page
      navigate("/startgame");
    } else {
      // If no avatar is selected, show an alert or handle it accordingly
      alert("Please select an avatar before proceeding.");
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h1 className={styles.title}>Chor Police</h1>
      </div>
      <div className={styles.main}>
        <div className={styles.select}>
          <h4>Select Avatar</h4>
        </div>
        <div className={styles.container}>
          <div className={styles.avatars}>
            <img
              src="./Images/1.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("1.jpg")}
              className={selectedAvatar === "1.jpg" ? styles.selected : ""}
            />
            <img
              src="./Images/2.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("2.jpg")}
              className={selectedAvatar === "2.jpg" ? styles.selected : ""}
            />
            <img
              src="./Images/3.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("3.jpg")}
              className={selectedAvatar === "3.jpg" ? styles.selected : ""}
            />
            <img
              src="./Images/4.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("4.jpg")}
              className={selectedAvatar === "4.jpg" ? styles.selected : ""}
            />
          </div>
          <div className={styles.avatars}>
            <img
              src="./Images/5.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("5.jpg")}
              className={selectedAvatar === "5.jpg" ? styles.selected : ""}
            />
            <img
              src="./Images/6.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("6.jpg")}
              className={selectedAvatar === "6.jpg" ? styles.selected : ""}
            />
            <img
              src="./Images/7.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("7.jpg")}
              className={selectedAvatar === "7.jpg" ? styles.selected : ""}
            />
            <img
              src="./Images/8.jpg"
              alt="avatar"
              onClick={() => handleAvatarSelect("8.jpg")}
              className={selectedAvatar === "8.jpg" ? styles.selected : ""}
            />
          </div>
        </div>
        <button onClick={handleNextClick} className={styles["next-btn"]}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Avatar;
