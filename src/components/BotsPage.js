import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [data, setData] = useState([]);
  const [army, setArmy] = useState([]);
  const [activeBot, setActiveBot] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data)
  return (
    <div>
      <YourBotArmy
        army={army}
        setArmy={setArmy}
        setData={setData}
      />
      {activeBot ? (<BotSpecs bot={activeBot} setActiveBot={setActiveBot} setArmy={setArmy}/>
      ) : (
        <BotCollection
          setArmy={setArmy}
          bots={data}
          army={army}
          setData={setData}
          setActiveBot={setActiveBot}
        />
      )}
    </div>
  );
}

export default BotsPage;
