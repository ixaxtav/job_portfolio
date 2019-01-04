import React from "react";

export class Sidebar extends React.Component {
	render() {
		return (
			<nav className="col-md-2 d-none d-md-block bg-light sidebar">
				<div className="sidebar-sticky">
					<ul className="nav flex-column">
						<li className="nav-item">
							<a className="nav-link" href="#">
								<span data-feather="home" />
								About{" "}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Experience
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Skills
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Education
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
