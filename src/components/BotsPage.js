import React ,{useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const[data, setData] = useState({});
  //start here with your code for step one
  // fetch function
useEffect(() => {
  fetch("http://localhost:8002/bots")
  .then(resp => resp.json())
  .then((bots) => setData(bots));
}, []);
console.log(data);
  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={data}/>
    </div>
  )
}

export default BotsPage;
