import React, { useState } from "react";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const username = {
        username: text,
      };

      //
      const response = await fetch("http://localhost:3002/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(username),
      });

      if (response.ok) {
        // If the response is successful, change the URL
        window.location.href = "http://localhost:3000/room";
        // navigate(`/id/${responseData.id}/${text}`);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error submitting:", error.message || error);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h4 className={styles.title}>Chor Police</h4>
      </div>
      <div className={styles.container}>
        <h4 className={styles.name}>Enter Your Name:</h4>
        <div>
          <input
            className={styles.input_field}
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>
      </div>
      <div className={styles.button}>
        <button
          onClick={() => {
            submit();
          }}
          className={styles["submit-btn"]}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Home;
