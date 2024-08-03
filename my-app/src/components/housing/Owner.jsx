import React from "react";

const Owner = (props) => {
	let nameParsed = props.name.split(" ");
	return (
		<div className="owner">
			<div className="owner-name">
				<p>{nameParsed[0]}</p>
				<p>{nameParsed[1]}</p>
			</div>
			<div className="owner-picture">
				<img src={props.image}></img>
			</div>
		</div>
	);
};

export default Owner;
