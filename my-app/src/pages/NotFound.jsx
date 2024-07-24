import React from "react";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";
import Error from "../components/Notfound/Error";

const NotFound = () => {
	return (
		<div className="notfound">
			<div className="container">
				<Header />
				<Error />
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
