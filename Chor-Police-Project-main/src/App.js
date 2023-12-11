import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Room from "./components/Room/Room.jsx";
import ID from "./components/ID/ID.jsx";
import Avatar from "./components/Avatars/Avatar.jsx";
import Lobby from "./components/Lobby/Lobby.jsx";
import Start from "./components/start game/Start.jsx";
import Letsplay from "./components/Lets play/Letsplay.jsx";
import Shuffle from "./components/shuffle/Shuffle.jsx";
import Moderator7 from "./components/Moderator 7/Moderator7.jsx";
import Moderator8 from "./components/Moderator 8/Modrerator8.jsx";
import Moderator9 from "./components/Moderator 9/Moderator9.jsx";
import { useState } from "react";
function randomNumber() {
  return Math.floor(Math.random() * 1000000) + 1;
}

function App() {
  const [number] = useState(() => randomNumber());

  // 
  const [roomID, setRoomID] = useState("");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room same={number.toString()} roomID={roomID} setRoomID={setRoomID}/>} />
        <Route path="/id" element={<ID id={number} roomID={roomID} setRoomID={setRoomID} />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/lobby" element={<Lobby id={number} roomID={roomID} setRoomID={setRoomID} />} />
        <Route path="/startgame" element={<Start id={number} />} />
        <Route path="/letsplay" element={<Letsplay />} />
        <Route path="/shuffle" element={<Shuffle />} />
        <Route path="/mod7" element={<Moderator7 />} />
        <Route path="/mod8" element={<Moderator8 />} />
        <Route path="/mod9" element={<Moderator9 />} />
      </Routes>
    </Router>
  );
}

export default App;
