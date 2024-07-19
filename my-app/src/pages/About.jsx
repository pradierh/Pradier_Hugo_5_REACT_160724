import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collapsible from "../components/Collapsible";
import Footer from "../components/Footer";

const About = () => {
	return (
		<div className="tets">
			<Header />
			<Banner />
			<Collapsible title={"yo wassup"} text={"Hey wtf"} />
			<Footer />
		</div>
	);
};

export default About;
