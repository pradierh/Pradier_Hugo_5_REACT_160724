import React from "react";

function Tags(props) {
	var tags = props.array;
	return (
		<div className="tags">
			{tags.map((item) => (
				<div key={item} className="tag">
					<p>{item}</p>
				</div>
			))}
		</div>
	);
}

export default Tags;
