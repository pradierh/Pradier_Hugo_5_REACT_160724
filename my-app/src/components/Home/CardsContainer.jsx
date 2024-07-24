import React from "react";
import Cards from "./Cards";
import locations from "../../data/data.json";
import { Link } from "react-router-dom";

function CardsContainer() {
	return (
		<div className="cards-background">
			<div className="cards-container">
				{locations.map((item) => (
					<Link key={item.id} to={`/logement/${item.id}`}>
						<Cards location={item} />
					</Link>
					
				))}
			</div>
		</div>
	);
}

export default CardsContainer;
