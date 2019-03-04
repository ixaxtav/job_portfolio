import React from "react";
import portfolioJumbo from "./portfolioJumbo.jpeg";

export const MainPic = () => {
	return (
		<div
			className="carrousel_image"
			style={{
				backgroundImage: `url(${portfolioJumbo})`,
				height: `${window.innerHeight}px`
			}}
		/>
	);
};
