import React from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";
const Error = () => {
	return (
		<div className="error">
			<Header />
			<div className="error-message">
				<h1>404</h1>
				<h2>Oups! La page que vous demandez n'existe pas.</h2>
				<span>Retourner sur la page d'accueil</span>
			</div>
			<Footer />
		</div>
	);
};

export default Error;
