import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../component/sidebar.jsx";
import { AboutMe } from "../component/aboutme.jsx";
import { Experience } from "../component/experience.jsx";
import { Projects } from "../component/projects.jsx";
import { IconButton } from "../component/iconButton.jsx";
import { Barchart } from "../component/barchart.jsx";
import { Education } from "../component/education.jsx";
import ContactInfo from "../component/contacts.jsx";
import Banner from "../component/banner.jsx";
import umiami from "../../../src/img/umiami.png";
import fourGA from "../../../src/img/fourGA.jpg";
import "../../styles/home.css";
import slide_one from "../../../src/img/slide_one.jpg";

export class MainPage extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<div className="col-md-9 ml-sm-auto col-lg-10 px-0">
						<div
							className=" justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5"
							style={{
								height: `${window.innerHeight}px`,
								overflow: "hidden"
							}}>
							<div
								style={{
									background: `url(${slide_one})`,
									height: `${window.innerHeight}px`
								}}
							/>
						</div>{" "}
						<Banner label="About" />
						<AboutMe />
						<Banner label="Experience" />
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
						<Banner label="Projects" />
						<div className="row justify-content-center">
							<div className="col-4">
								<Projects />
							</div>
							<div className="col-4">
								<Projects />
							</div>
						</div>
						<Banner label="Skills" />
						<Barchart />
						<Banner label="Education" />
						<div className="container">
							<div className="row">
								<div className="col-sm">
									<Education
										eduLogo={umiami}
										eduLoc="University of Miami"
										eduName="Coral Gables, FL"
										eduCert="Bachelors of Science"
										eduDate="Graduation: May 13, 2017"
									/>
								</div>
								<div className="col-sm">
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
						<Banner label="Contact Me" />
						<ContactInfo />
					</div>{" "}
				</div>{" "}
			</div>
		);
	}
}
