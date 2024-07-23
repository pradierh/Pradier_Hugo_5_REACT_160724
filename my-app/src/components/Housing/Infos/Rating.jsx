import React from "react";

const Rating = ({ number }) => {
	const totalStars = 5;
	const stars = Array.from({ length: totalStars }, (_, index) => {
		return index < number ? (
			<i key={index} className="fa-solid fa-star"></i>
		) : (
			<i key={index} className="fa-solid fa-star void"></i>
		);
	});

	return <div className="rating">{stars}</div>;
};

export default Rating;
