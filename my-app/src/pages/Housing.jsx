import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Global/Header.jsx";
import Footer from "../components/Global/Footer.jsx";
import Carousel from "../components/Housing/Carousel.jsx";
import Title from "../components/Housing/Infos/Title.jsx";
import Tags from "../components/Housing/Infos/Tags.jsx";
import Owner from "../components/Housing/Infos/Owner.jsx";
import Rating from "../components/Housing/Infos/Rating.jsx";
import Collapsible from "../components/Global/Collapsible.jsx";
import data from "../data/data.json";

const Housing = () => {
	const { id } = useParams();
	const [housing, setHousing] = useState(null);
	useEffect(() => {
		const foundHousing = data.find((location) => location.id === id);
		setHousing(foundHousing);
	}, [id]);

	if (!housing) {
		return <div>Logement non trouvé</div>;
	}
	const wordParagraphs = housing.equipments.map((word, index) => (
		<p key={index}>{word}</p>
	));

	const wordContainer = (
		<div className="words-equipments">{wordParagraphs}</div>
	);

	console.log(wordParagraphs);
	const description = <p>{housing.description}</p>;

	return (
		<div className="housing">
			<div className="container">
				<Header />
				<Carousel images={housing.pictures} />
				<div className="info-panel">
					<div className="left-info-panel">
						<Title
							title={housing.title}
							subtitle={housing.location}
						/>
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
			<Footer />
		</div>
	);
};

export default Housing;
