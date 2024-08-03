import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
	Owner,
	Rating,
	Tags,
	Title,
	Carousel,
	Collapsible,
} from "../components/";
import data from "../data/data.json";

const Housing = () => {
	const { id } = useParams();
	const [housing, setHousing] = useState(null);

	useEffect(() => {
		const foundHousing = data.find((location) => location.id === id);
		setHousing(foundHousing);
	}, [id]);

	const ids = data.map((item) => item.id);

	if (!ids.includes(id)) {
		return <Navigate to="/notfound" />;
	}

	if (!housing) {
		return <div>Logement non trouvé</div>;
	}
	const wordParagraphs = housing.equipments.map((word, index) => (
		<p key={index}>{word}</p>
	));

	const wordContainer = (
		<div className="words-equipments">{wordParagraphs}</div>
	);

	const description = <p>{housing.description}</p>;

	return (
		<div className="housing">
			<Carousel images={housing.pictures} />
			<div className="info-panel">
				<div className="left-info-panel">
					<Title title={housing.title} subtitle={housing.location} />
					<Tags array={housing.tags} />
				</div>
				<div className="right-info-panel">
					<Owner
						name={housing.host.name}
						image={housing.host.picture}
					/>
					<Rating number={housing.rating} />
				</div>
			</div>
			<div className="collapsibles-container">
				<Collapsible title="Description" children={description} />
				<Collapsible title="Equipements" children={wordContainer} />
			</div>
		</div>
	);
};

export default Housing;
