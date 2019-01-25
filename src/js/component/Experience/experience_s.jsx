import React from "react";
import { Experience } from "./experience.jsx";

export default class Experiences extends React.Component {
	render() {
		return (
			<div className="container-fluid highlight_wrapper mt-5 pt-5">
				<h2>Experiences</h2>
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
			</div>
		);
	}
}
