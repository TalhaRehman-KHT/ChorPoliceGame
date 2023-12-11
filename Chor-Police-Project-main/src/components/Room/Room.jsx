import React, { useState, useEffect } from "react";
import styles from "./Room.module.css";
import { useNavigate } from "react-router-dom";

function Room({ same, roomID, setRoomID }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  //  const [roomID, setRoomID] = useState("");

  const createRoom = async () => {
    try {
      const userID = Math.random().toString(36).substring(7);
      const data = {
        userId: userID,
      };

      const response = await fetch("http://localhost:3002/createRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Room created successfully:", responseData.message);
        const createdRoomID = responseData.message; // want to export that createdRoomID
        setRoomID(createdRoomID);
        console.log(`ROOMID = ${createdRoomID}`);

        //
      } else {
        console.error("Failed to create room:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating room:", error.message || error);
    }
  };

  //
  const checkRoomId = async () => {
    try {
      // if (text === same) {
      //   alert("Correct Room ID was Entered");
      //   navigate("/avatar");
      // } else {
      //   alert("Invalid Room ID was Entered");
      //   return; // Return early if the Room ID is invalid
      // }

      const userID = Math.random().toString(36).substring(7);

      const userData = {
        roomId: text, // And I need that text value here dynamically
        userId: userID,
      };

      const response = await fetch("http://localhost:3002/joinRoom", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("JOIN DATA Working");
      } else {
        throw new Error(`Failed to join room: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error joining room:", error.message || error);
      // Handle the error (e.g., show a user-friendly message)
      alert("Error joining room. Please try again.");
    }
  };
  function handleChange(e) {
    setText(e.target.value);
    console.log(e.target.value);
  }
  //

  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h4 className={styles.title}>Chor Police</h4>
      </div>
      <div className={styles.container}>
        <h4 className={styles.heading}>Create or Join Room</h4>
        <div className={styles["input-field"]}>
          <input onChange={handleChange} type="text" placeholder="Room ID" />
          {/* i want to get that text when user click on joinButton  */}
        </div>
      </div>
      <div className={styles.btns}>
        {/* <button onClick= {()=> {checkRoomId(); navigate('/lobby')}} className={styles["join-btn"]}>
          Join Room
        </button> */}
        <button
          onClick={() => {
            checkRoomId(roomID);
            navigate(`/avatar`);
          }}
          className={styles["join-btn"]}
        >
          Join Room
        </button>

        <p>or</p>
        <button
          className={styles["create-btn"]}
          onClick={() => {
            createRoom();
            navigate(`/id/${roomID}`);
          }}
        >
          Create Room
        </button>
      </div>
    </div>
  );
}

export default Room;
