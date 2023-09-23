import React from "react";
import piggy from "../assets/porco.png";
import Tile from "./Tile"

const Nav = ({pigs, setSelectedPig}) => {

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
  				{pigs.map((pig) => (
    				<Tile 
					key={pig.name} 
					name={pig.name} 
					image={pig.image} 
					setSelectedPig={setSelectedPig}/>
 				 ))}
		</div>
		</div>
	);
};

export default Nav;
