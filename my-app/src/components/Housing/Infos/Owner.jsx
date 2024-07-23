import React from "react";

const Owner = (props) => {
	return (
		<div className="owner">
			<div className="owner-name">
				<p>{props.name}</p>
				<p></p>
			</div>
			<div className="owner-picture">
				<img src={props.image}></img>
			</div>
		</div>
	);
};

export default Owner;
