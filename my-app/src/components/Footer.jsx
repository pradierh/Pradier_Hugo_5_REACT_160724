import React from "react";
import logo from "../assets/LOGO.svg";
function Footer() {
	return (
		<footer>
			<img src={logo} alt="Logo" />
			<p>
				<i className="fa-regular fa-copyright"></i> 2020 All rights
				reserved
			</p>
		</footer>
	);
}

export default Footer;
