import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import CardsContainer from "../components/CardsContainer.jsx";


const Home = () => {
	return (
		<div>
			<div className="container">
				<Header />
				<Banner />
				<CardsContainer />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
