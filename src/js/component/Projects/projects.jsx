import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { IconButton } from "../iconButton.jsx";

export default class Projects extends React.Component {
	render() {
		return (
			<div className="card mx-auto" style={{ width: "24rem" }}>
				<img
					className="card-img-top"
					src={this.props.projectImage}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{this.props.projectTitle}</h5>
					<div>{this.props.projectContent}</div>
					<div className="row justify-content-end mr-2">
						<div className="col-2">
							<a href={this.props.projectGit}>
								<IconButton icon="fab fa-github" />
							</a>
						</div>
						<div className="col-2">
							<a href={this.props.projectWeb}>
								<IconButton icon="fas fa-external-link-alt" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Projects.propTypes = {
	projectImage: PropTypes.string,
	projectTitle: PropTypes.string,
	projectContent: PropTypes.string,
	projectGit: PropTypes.string,
	projectWeb: PropTypes.string
};
