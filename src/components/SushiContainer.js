import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ fourSushis, eatSushi, getSushi }) {
  const sushisList = fourSushis.filter(s => !s.eaten).map(s => 
    <Sushi sushi={s} eatSushi={eatSushi} />
  )

  return (
    <div className="belt">
      {sushisList}
      <MoreButton getSushi={getSushi} />
    </div>
  );
}

export default SushiContainer;
