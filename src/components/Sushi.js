import React from "react";

function Sushi({ sushi, eatSushi }) {
  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {sushi.eaten ? null : (
          <img
            id={sushi.id}
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
            data-price={sushi.price}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
