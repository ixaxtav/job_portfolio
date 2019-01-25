import React from "react";
import { Link } from "react-router-dom";
import "../../styles/barprogress.scss";
import umiami from "../../../src/img/umiami.png";
import PropTypes from "prop-types";

export class Education extends React.Component {
	render() {
		return (
			<div
				className="card text-center"
				style={{
					width: "400px"
				}}>
				<div className="card-header text-center">
					<div
						className="text-center"
						style={{
							width: "300px",
							height: "250px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}>
						<img src={this.props.eduLogo} alt="centered image" />
					</div>
				</div>
				<div className="card-body">
					<h4 className="card-title">{this.props.eduName}</h4>
					<h6 className="card-title">{this.props.eduLoc}</h6>
					<p className="card-text">{this.props.eduCert}</p>
				</div>
				<div className="card-footer text-muted">
					{this.props.eduDate}
				</div>
			</div>
		);
	}
}
Education.propTypes = {
	eduLogo: PropTypes.string,
	eduName: PropTypes.string,
	eduLoc: PropTypes.string,
	eduCert: PropTypes.string,
	eduDate: PropTypes.string
};
