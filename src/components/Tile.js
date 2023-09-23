import React from "react";


function Tile({name,image}){

    return (
        <div className="tile">
        <h2>{name}</h2>
        <img src={image} alt={name} />
      </div>

    )
}

export default Tile;
