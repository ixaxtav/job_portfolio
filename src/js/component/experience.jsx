import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import PropTypes from "prop-types";

export class Experience extends React.Component {
	render() {
		return (
			<div
				className="card justify-content-center mx-auto"
				style={{ width: "60rem" }}>
				<div className="card-header" style={{ fontSize: "36px" }}>
					{this.props.titleJob}
				</div>
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<ul>
							<li>{this.props.bulletOne}</li>
							<li>{this.props.bulletTwo}</li>
							<li>{this.props.bulletThree}</li>
						</ul>
						<footer className="blockquote-footer">
							{this.props.monthJob}{" "}
							<cite title="Source Title">
								{this.props.yearJob}
							</cite>{" "}
							- {this.props.endMonthJob}{" "}
							<cite title="Source Title">
								{this.props.endYearJob}
							</cite>
						</footer>
					</blockquote>
				</div>
			</div>
		);
	}
}
Experience.propTypes = {
	titleJob: PropTypes.string,
	bulletOne: PropTypes.string,
	bulletTwo: PropTypes.string,
	bulletThree: PropTypes.string,
	monthJob: PropTypes.string,
	yearJob: PropTypes.string,
	endMonthJob: PropTypes.string,
	endYearJob: PropTypes.string
};
