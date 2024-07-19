import React from "react";
import Cards from "./Cards";
import locations from "../data/data.json";

function CardsContainer() {
	return (
		<div className="cards-container">
			{locations.map((item) => (
				<Cards key={item.id} location={item} />
			))}
		</div>
	);
}

export default CardsContainer;
