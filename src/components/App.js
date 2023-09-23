import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";

function App() {
	const [pigs, setPigs] = useState(hogs)
	const [selectedPig,setSelectedPig]= useState(null)

	// function displayPigData(pig){
	// 	setSelectedPig(pig)
	// }

	return (
		<div className="App">
			<Nav pigs={pigs} setSelectedPig={setSelectedPig}/>
		</div>
	);
}

export default App;
