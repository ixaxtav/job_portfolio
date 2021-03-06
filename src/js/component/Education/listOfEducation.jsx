import React from "react";
import Education from "./education.jsx";
import umiami from "./umiami.png";
import fourGA from "./fourGA.jpg";
import Fade from "react-reveal/Fade";
const ListOfEducation = () => {
	return (
		<Fade>
			<div className="mt-5 p-3">
				{" "}
				<h2
					className="text-center"
					style={{
						textAlign: "center",
						textTransform: "uppercase",
						color: "#2c2c2c",
						fontSize: "52px"
					}}>
					Education
				</h2>
				<div className="row justify-content-center pt-4">
					<div className="col">
						<Education
							eduLogo={umiami}
							eduLoc="University of Miami"
							eduName="Coral Gables, FL"
							eduCert="Bachelors of Science"
							eduDate="Graduation: May 13, 2017"
						/>
					</div>
					<div className="col">
						<Education
							eduLogo={fourGA}
							eduLoc="4Geeks Academy"
							eduName="Downtown Miami, FL"
							eduCert="Full Stack Developer Certificate"
							eduDate="Graduation: October 23, 2018"
						/>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default ListOfEducation;
