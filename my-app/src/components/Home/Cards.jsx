import React from "react";

function Cards({location}) {
    return (
        <div className="cards">
            <img src={location.cover}></img>
            <h2>{location.title}</h2>
        </div>
	);
}

export default Cards;
