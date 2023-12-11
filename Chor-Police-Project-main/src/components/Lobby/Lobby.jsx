// import React, { useEffect } from "react";
// import styles from "./Lobby.module.css";
// import { io } from "socket.io-client";

// function Lobby(props) {

//   useEffect(() => {
//     // On the client side
//     const socket = io("http://localhost:3002");  // Assuming your server is running on this URL

//     socket.on("userAssigned", ({ roomId, userId }) => {
//       console.log(`User ${userId} assigned to room ${roomId}`);
//       // Perform UI updates or other actions as needed
//     });

//     // Cleanup the socket connection when the component unmounts
//     return () => {
//       socket.disconnect();
//     };
//   }, []);
//   return (
//     <div className={styles.parent}>
//       <div className={styles.nav}>
//         <h3>Lobby!</h3>
//         <h3>#{props.id}</h3>
//       </div>

//       <h3 className={styles.team}>Teams:</h3>
//       <div className={styles.container}>
//         <div className={styles.avatars}>
//           <img src="./Images/1.jpg" alt="avatar" />
//           <p className={styles.names}>MASAB</p>
//           {/* show here user whose are joining  show dynamicly */}
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/2.jpg" alt="avatar" />
//           <p className={styles.names}>BOBBY</p>
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/3.jpg"alt="avatar" />
//           <p className={styles.names}>LUQMAN</p>
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/4.jpg" alt="avatar" />
//           <p className={styles.names}>SABIR</p>
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/5.jpg" alt="avatar" />
//           <p className={styles.names}>AHMAR</p>
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/6.jpg" alt="avatar" />
//           <p className={styles.names}>HAMMAD</p>
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/7.jpg" alt="avatar" />
//           <p className={styles.names}>TALHA</p>
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/8.jpg" alt="avatar" />
//           <p className={styles.names}>DANISH</p>
//         </div>
//         <div className={styles.avatars}>
//           <img src="./Images/1.jpg" alt="avatar" />
//           <p className={styles.names}>ALYAN</p>
//         </div>{" "}
//         <div className={styles.avatars}>
//           <img src="./Images/4.jpg" alt="avatar" />
//           <p className={styles.names}>HASHIR</p>
//         </div>
//         <p className={styles.sbr}>Ruko Zara Sabr Karo!</p>
//       </div>
//     </div>
//   );
// }

// export default Lobby;

import React, { useEffect, useState } from "react";
import styles from "./Lobby.module.css";
import { io } from "socket.io-client";

import { useNavigate, useParams } from "react-router-dom";

function Lobby({roomID}) {
  // const { roomID } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Frontend code
    const socket = io("http://localhost:3002", {
      path: "/lobby/socket.io",
    });

    socket.on("userAssigned", ({ roomId, userId }) => {
      console.log(`User ${userId} assigned to room ${roomId}`);

      // Update the list of users
      setUsers((prevUsers) => [...prevUsers, userId]);
    });

    return () => {
      socket.disconnect();
    };
  }, [roomID]); // Include roomID in the dependency array

  return (
    <div className={styles.parent}>
      <div className={styles.nav}>
        <h3>Lobby!</h3>
        <h3>{roomID}</h3>
      </div>

      <h3 className={styles.team}>Teams:</h3>
      <div className={styles.container}>
        {users.map((userId) => (
          <div className={styles.avatars} key={userId}>
            <img src={`./Images/${userId}.jpg`} alt="avatar" />
            <p className={styles.names}>{userId}</p>
          </div>
        ))}

        <p className={styles.sbr}>Ruko Zara Sabr Karo!</p>
      </div>
    </div>
  );
}

export default Lobby;
