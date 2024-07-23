import React from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Banner from "../components/Home/Banner.jsx";
import CardsContainer from "../components/Home/CardsContainer.jsx";

const Home = () => {
	return (
		<div className="home">
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
