import React from "react";
import { Header, Footer } from "./components/";
import AppRouter from "./router/router";

const App = () => {
	return (
		<div className="container">
			<Header />
			<AppRouter />
			<Footer />
		</div>
	);
};

export default App;
