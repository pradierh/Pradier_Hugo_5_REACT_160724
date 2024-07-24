import React from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Banner from "../components/About/Banner";
import Collapsible from "../components/About/Collapsible";

const About = () => {
	return (
		<div className="about">
			<div className="container">
				<Header />
				<Banner />
				<div className="collapsibles-container">
					<Collapsible close header="Fiabilité">
						Les annonces postées sur Kasa garantissent une fiabilité
						totale. Les photos sont conformes aux logements, et
						toutes les informations sont régulièrement vérifiées pas
						nos équipes.
					</Collapsible>
					<Collapsible close header="Respect">
						La bienveillance fait partie des valeurs fondatrices de
						Kasa. Tout comportement discrinatoire ou de perturbation
						du voisinage entraînera une exclusion de notre
						plateforme.
					</Collapsible>
					<Collapsible close header="Service">
						La bienveillance fait partie des valeurs fondatrices de
						Kasa. Tout comportement discrinatoire ou de perturbation
						du voisinage entraînera une exclusion de notre
						plateforme.
					</Collapsible>
					<Collapsible close header="Sécurité">
						La sécurité est la priorité de Kasa. Aussi bien pour nos
						hôtes que pour les voyageurs, chaque logement correspond
						aux critères de sécurité établis par nos services. En
						laissant une note aussi bien à l'hôte qu'au locatiare,
						cela permet à ns équipes de vérifier que les standards
						sont bien respectés. Nous organisons également des
						ateliers sur la sécurité domestique pour nos hôtes.
					</Collapsible>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
