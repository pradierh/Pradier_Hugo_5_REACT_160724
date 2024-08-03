import React from "react";
import Collapsible from "../components/Collapsible";

const content_first = `	Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées pas nos équipes.`;

const content_second = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discrinatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`;

const content_third = `	La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatiare, cela permet à ns équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`;

const About = () => {
	return (
		<div className="about">
			<div className="banner"></div>
			<div className="collapsibles-container">
				<Collapsible title="Fiabilité">
					<p>{content_first}</p>
				</Collapsible>
				<Collapsible title="Respect">
					<p>{content_second}</p>
				</Collapsible>
				<Collapsible title="Service">
					<p>{content_second}</p>
				</Collapsible>
				<Collapsible title="Sécurité">
					<p>{content_third}</p>
				</Collapsible>
			</div>
		</div>
	);
};

export default About;
