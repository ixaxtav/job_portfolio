import React from "react";
import Projects from "./projects.jsx";
import Zoom from "react-reveal/Zoom";

const ListOfProjects = () => {
	return (
		<div className="highlight_wrapper mt-5 pt-5">
			<h2> Projects </h2>

			<div
				className="row justify-content-center pt-2
		">
				<Zoom duration={500}>
					<div className="col-sm-3">
						<Projects />
					</div>
				</Zoom>

				<Zoom duration={500} delay={500}>
					<div className="col-sm-3">
						<Projects />
					</div>
				</Zoom>
			</div>
		</div>
	);
};

export default ListOfProjects;
