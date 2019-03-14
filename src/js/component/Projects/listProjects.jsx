import React from "react";
import Projects from "./projects.jsx";
import Zoom from "react-reveal/Zoom";
import thepokersocietylogo from "./thepokersocietylogo.jpg";
import crippyLogo from "./crippylogo.jpg";

const ListOfProjects = () => {
	return (
		<div className="highlight_wrapper  center_wrapper mt-5 p-3">
			<h2> Projects </h2>

			<div
				className="row justify-content-center p-2
		">
				<Zoom duration={500}>
					<div className="col">
						<Projects
							projectImage={thepokersocietylogo}
							projectTitle="The Poker Society"
							projectContent="An app where you can see tournaments available in casino located in Miami, Ford Lauderdale, and Las Vegas."
							projectGit="https://www.google.com/"
							projectWeb="https://www.facebook.com/"
						/>
					</div>
				</Zoom>

				<Zoom duration={500} delay={500}>
					<div className="col">
						<Projects
							projectImage={crippyLogo}
							projectTitle="Crippy"
							projectContent="Crippy is an app built to visualize cryptocurrency coins and compare their value to other coin."
							projectGit="https://www.google.com/"
							projectWeb="https://www.facebook.com/"
						/>
					</div>
				</Zoom>
			</div>
		</div>
	);
};

export default ListOfProjects;
