import React from "react";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
				<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
					<i className="fas fa-brain" />
				</a>{" "}
				<ul className="navbar-nav px-3">
					<li className="nav-item text-nowrap">
						<a className="nav-link" href="#">
							Ixax Tavarez | Full Stack Developer
						</a>
					</li>
				</ul>{" "}
			</nav>
		);
	}
}
