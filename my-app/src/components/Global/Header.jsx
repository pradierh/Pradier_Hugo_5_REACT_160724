import React from "react";
import logo from "../../assets/LOGOcolored.svg";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<img src={logo} alt="Logo" />
			<nav>
				<ul>
					<li>
						<Link to="/">Accueil</Link>
					</li>
					<li>
						<Link to="/about">À Propos</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
