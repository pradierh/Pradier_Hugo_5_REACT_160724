import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Navigate to="/pages/NotFound" />} />
				<Route path="/logement/:id" element={<Housing />} />;
			</Routes>
		</div>
	);
};

export default App;
