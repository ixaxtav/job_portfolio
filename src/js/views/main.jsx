import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "../component/sidebar.jsx";
import { AboutMe } from "../component/aboutme.jsx";
import { Experience } from "../component/experience.jsx";
import Banner from "../component/banner.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
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
						<Experience />
					</div>{" "}
				</div>{" "}
			</div>
		);
	}
}
