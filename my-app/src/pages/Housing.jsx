import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Global/Header.jsx";
import Footer from "../components/Global/Footer.jsx";
import Caroussel from "../components/Housing/Caroussel.jsx";
import Title from "../components/Housing/Infos/Title.jsx";
import Tags from "../components/Housing/Infos/Tags.jsx";
import Owner from "../components/Housing/Infos/Owner.jsx";
import Rating from "../components/Housing/Infos/Rating.jsx";

import data from "../data/data.json";

const Housing = () => {
	return (
		<div className="housing">
			<div className="container">
				<Header />
				<Caroussel />
				<div className="info-panel">
					<div className="left-info-panel">
						<Title />
						<Tags />
					</div>
					<div className="right-info-panel">
						<Owner />
						<Rating />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Housing;
