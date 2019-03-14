import React from "react";
import { Experience } from "./experience.jsx";
import Fade from "react-reveal/Fade";

export default class Experiences extends React.Component {
	render() {
		return (
			<div className="mt-5 p-3">
				<Fade>
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
							Experience
						</h2>
						<div className="row justify-content-center pt-4">
							<div className="col-10">
								<Experience
									titleJob="Freelance Full Stack Developer"
									bulletOne="Build responside web application for a company or person "
									bulletTwo="Manipulating back-end data using back-end services such as wordpress, django, sql, etc.."
									bulletThree="Engaging sites through React Javascript along many other tools"
									monthJob="November"
									yearJob="2018"
									endMonthJob="Present"
								/>
								<br />
							</div>
						</div>
						<div className="row justify-content-center pt-4">
							<div className="col-10">
								<Experience
									titleJob="Apple Specialist"
									bulletOne="Demonstrated substantial knowledge in the services and products' benefits offered by Apple as well as some third party products to provide the customer with a complete solution. "
									bulletTwo="Aiding on any apple related technical difficulties."
									bulletThree="Educate the customer with any Apple related question"
									monthJob="October"
									yearJob="2018"
									endMonthJob="January"
									endYearJob="2019"
								/>
								<br />
							</div>
						</div>
						<div className="row justify-content-center pt-4">
							<div className="col-10">
								<Experience
									titleJob="Computer Technician"
									bulletOne="Provided technical assistance to any department on the hotel. Installed computer operating systems hardware and software "
									bulletTwo="Maintain computers performance"
									bulletThree="Installing new devices, operating system and test software to implement"
									monthJob="March"
									yearJob="2018"
									endMonthJob="June"
									endYearJob="2019"
								/>
							</div>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
}
