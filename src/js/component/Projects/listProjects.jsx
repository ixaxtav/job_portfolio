import React from "react";
import Projects from "./projects.jsx";
import Zoom from "react-reveal/Zoom";
import thepokersocietylogo from "./thepokersocietylogo.jpg";
import crippyLogo from "./crippylogo.jpg";

const ListOfProjects = () => {
	return (
		<div className="mt-5 p-3">
			<div>
				{" "}
				<h2
					className="text-center"
					style={{
						textAlign: "center",
						textTransform: "uppercase",
						color: "#2c2c2c",
						fontSize: "52px"
					}}>
					Projects
				</h2>
				<div className="row justify-content-center pt-3 ">
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
		</div>
	);
};

export default ListOfProjects;
