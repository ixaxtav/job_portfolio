import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { IconButton } from "../component/iconButton.jsx";

export class Projects extends React.Component {
	render() {
		return (
			<div className="card" style={{ width: "24rem" }}>
				<img
					className="card-img-top"
					src="http://placekitten.com/220/140"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris id.
					</div>
					<div className="row justify-content-end mr-2">
						<div className="col-2">
							<IconButton icon="fab fa-github" />
						</div>
						<div className="col-2">
							<IconButton icon="fas fa-external-link-alt" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
