import React, { useState } from "react";

const Carousel = ({ images }) => {
	let [currentSlideIndex, setActiveIndex] = useState(1);
	let totalSlides = images.length - 1;

	const increment = () => {
		if (currentSlideIndex == totalSlides) {
			setActiveIndex((currentSlideIndex = 1));
		} else {
			setActiveIndex(currentSlideIndex + 1);
		}
	};
	const decrement = () => {
		if (currentSlideIndex == 1) {
			setActiveIndex((currentSlideIndex = totalSlides));
			console.log("minus");
		} else {
			setActiveIndex(currentSlideIndex - 1);
		}
	};

	if (totalSlides + 1 == 1) {
		return (
			<div className="carousel">
				<img src={images[0]} className="carousel__img" />
				<div className="carousel_index_indicator">
					<span>1 / 1</span>
				</div>
			</div>
		);
	}

	return (
		<div className="carousel">
			<button className="button_left" onClick={decrement}>
				<i className="fa-solid fa-chevron-left"></i>
			</button>
			<img src={images[currentSlideIndex]} className="carousel__img" />
			<button className="button_right" onClick={increment}>
				<i className="fa-solid fa-chevron-right"></i>
			</button>
			<div className="carousel_index_indicator">
				<span>
					{currentSlideIndex} / {totalSlides}
				</span>
			</div>
		</div>
	);
};
export default Carousel;
