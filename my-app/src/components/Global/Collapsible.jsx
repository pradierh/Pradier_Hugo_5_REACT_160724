import React, { useState, useRef } from "react";

const Collapsible = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef(null);

	const toggleCollapsible = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="collapsible">
			<button
				className={`collapsible-toggle ${isOpen ? "open-toggle" : ""}`}
				onClick={toggleCollapsible}
			>
				{title}
				<i
					className={`fas fa-chevron-up ${isOpen ? "rotate" : ""}`}
				></i>
			</button>
			<div
				ref={contentRef}
				className={`collapsible-content ${isOpen ? "open" : ""}`}
				style={{
					maxHeight: isOpen
						? `${contentRef.current.scrollHeight}px`
						: "0px",
					marginTop: "-8px",
					position: "relative",
					zIndex: "1",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Collapsible;
