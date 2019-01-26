import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/iconbuttons.css";
import PropTypes from "prop-types";

export class IconButton extends React.Component {
	render() {
		return (
			<div className="button">
				<div className="circle" />
				<div className="icon" style={{ textAlign: "center" }}>
					<i className={this.props.icon} />
				</div>
			</div>
		);
	}
}
IconButton.propTypes = {
	icon: PropTypes.string
};
