import React, { useEffect, useRef, useState } from "react";

const Collapsible = ({
	open = false,
	collapsibleClassName = "collapsible-card-edonec",
	headerClassName = "collapsible-header-edonec",
	titleClassName = "title-text-edonec",
	iconButtonClassName = "collapsible-icon-button-edonec",
	contentClassName = "collapsible-content-edonec",
	contentContainerClassName = "collapsible-content-padding-edonec",
	children,
	header,
}) => {
	const [isOpen, setIsOpen] = useState(open);
	const [height, setHeight] = useState(open ? undefined : 0);
	const [animationClass, setAnimationClass] = useState(
		open ? "opening" : "closing"
	);
	const ref = useRef(null);

	const handleFilterOpening = () => {
		setIsOpen((prev) => {
			if (prev) {
				setAnimationClass("closing");
			} else {
				setAnimationClass("opening");
			}
			return !prev;
		});
	};

	useEffect(() => {
		if (isOpen) {
			setHeight(ref.current?.getBoundingClientRect().height + 5);
			setAnimationClass("opening");
		} else {
			setHeight(0);
		}
	}, [isOpen]);

	useEffect(() => {
		if (!height && !isOpen) {
			const timeout = setTimeout(() => {
				setAnimationClass("");
			}, 300); 
			return () => clearTimeout(timeout);
		}
	}, [height, isOpen]);

	const iconRotationClass = isOpen ? "rotate" : "";

	return (
		<div className={collapsibleClassName}>
			<div className={headerClassName}>
				<div className={titleClassName}>{header}</div>
				<button
					type="button"
					className={`${iconButtonClassName} ${iconRotationClass}`}
					onClick={handleFilterOpening}
				>
					<i
						className={`fa-solid fa-chevron-up fa-2x ${
							isOpen ? "rotate-icon" : ""
						}`}
					/>
				</button>
			</div>
			<div
				className={`${contentClassName} ${animationClass}`}
				style={{ height }}
			>
				<div ref={ref}>
					<div className={contentContainerClassName}>{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Collapsible;
