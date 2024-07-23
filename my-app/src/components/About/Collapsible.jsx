import React, { useState } from "react";

const Collapsible = ({ open = false, children, title }) => {
	const [isOpen, setIsOpen] = useState(open);

	const handleFilterOpening = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<div className="card">
				<div>
					<div className="p-3 border-bottom d-flex justify-content-between">
						<h6 className="font-weight-bold">{title}</h6>
						<button
							type="button"
							className="btn"
							onClick={handleFilterOpening}
						>
							{!isOpen ? (
								<i className="fa-solid fa-caret-up"></i>
							) : (
								<i className="fa-solid fa-caret-down"></i>
							)}
						</button>
					</div>
				</div>

				<div className="border-bottom">
					<div>{isOpen && <div className="p-3">{children}</div>}</div>
				</div>
			</div>
		</>
	);
};

export default Collapsible;
