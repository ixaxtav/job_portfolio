import React from "react";
import portfolioJumbo from "./portfolioJumbo.jpeg";

export const MainPic = () => {
	return (
		<div>
			<div
				className="carrousel_image d-none d-sm-block"
				style={{
					backgroundImage: `url(${portfolioJumbo})`,
					height: `${window.innerHeight}px`
				}}
			/>

			<div className="carrousel_image d-block d-sm-none" />
		</div>
	);
};
