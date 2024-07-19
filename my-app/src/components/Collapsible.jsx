import React from "react";

function Collapsible({ title, text }) {
	return (
		<div className="collapsibleItem">
			<button type="button" class="collapsible">
				{title}
			</button>
			<div class="content">
				<p>{text}</p>
			</div>
		</div>
	);
}

export default Collapsible;
