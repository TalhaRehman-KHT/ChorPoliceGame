import chor from "./chor.jpg";
import police from "./police.jpg";
import doctor from "./doctor.jpg";
import civilian from "./civilian.jpg";
import { useState } from "react";


function GenerateNumber() {
  return Math.floor(Math.random() * 3);
}

function Shuffle() {
  const UserStatus = [chor, police, doctor, civilian];
  const [random,setRandom] = useState("")
 
  function PicsGenerator() {
    const UserRandomPic = UserStatus[GenerateNumber()];
    setRandom(()=>UserRandomPic)
  }
  return (
    <div>
      <img src={random} alt="randomPics" />
      <button onClick={PicsGenerator}>Shuffle</button>
    </div>
  );
}

export default Shuffle;
