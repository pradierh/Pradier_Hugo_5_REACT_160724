import React from "react";
import logo from "../../assets/LOGOcolored.svg";
import { Routes, Route, Navigate, useMatch, NavLink } from "react-router-dom";

function Header() {
	const isActive = (path) => {
		const match = useMatch(path);
		return match ? "active" : "";
	};

	return (
		<header>
			<img src={logo} alt="Logo" />
			<nav>
				<ul>
					<li className={isActive("/")}>
						<NavLink to="/">Accueil</NavLink>
					</li>
					<li className={isActive("/about")}>
						<NavLink to="/about">À Propos</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
