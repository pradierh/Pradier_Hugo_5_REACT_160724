import React from "react";

function Title(props) {
	return (
		<div className="title">
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
}

export default Title;
