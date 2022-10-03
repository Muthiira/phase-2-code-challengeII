

import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, army, setArmy, setData, setActiveBot }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} army={army} setArmy={setArmy} setData={setData} setActiveBot={setActiveBot}/>

          ))}
      </div>
    </div>
  );
}

export default BotCollection;
