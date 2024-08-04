import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, About, Housing, NotFound } from "../pages";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/housing/:id" element={<Housing />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
