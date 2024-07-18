import React from "react";
import Cards from "./Cards";
import locations from "../data/data.json";

function CardsContainer() {
	return (
		<div className="cards-container">
			{locations.map((location) => (
				<Cards key={location.id} location={location} />
			))}
		</div>
	);
}

export default CardsContainer;
