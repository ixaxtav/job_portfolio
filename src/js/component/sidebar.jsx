import React from "react";
import "../../styles/sidebar.css";

export class Sidebar extends React.Component {
	render() {
		return (
			<nav
				className="col-md-2 d-none d-md-block bg-light sidebar"
				style={{ fontSize: "18px" }}>
				<div className="sidebar-sticky">
					<ul className="nav flex-column">
						<li
							className="nav-item"
							style={{ margin: "20px 0 10px 0" }}>
							<a className="nav-link text-center" href="#about">
								About{" "}
							</a>
						</li>
						<li
							className="nav-item"
							style={{ margin: "0px 0 10px 0" }}>
							<a className="nav-link text-center" href="#">
								Experience
							</a>
						</li>
						<li
							className="nav-item"
							style={{
								margin: "0px 0 10px 0"
							}}>
							<a className="nav-link text-center" href="#">
								Projects
							</a>
						</li>
						<li
							className="nav-item"
							style={{ margin: "0px 0 10px 0" }}>
							<a className="nav-link text-center" href="#">
								Skills
							</a>
						</li>
						<li
							className="nav-item"
							style={{ margin: "0px 0 10px 0" }}>
							<a className="nav-link text-center" href="#">
								Education
							</a>
						</li>
						<li
							className="nav-item"
							style={{ margin: "0px 0 10px 0" }}>
							<a className="nav-link text-center" href="#">
								Contacts
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link text-center"
								href="https://docs.google.com/document/d/1xp2BtVTaIL1E7p_8CR3RhCOcqcm9BjzCED7lttaGbiY">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
