import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Banner extends React.Component {
	render() {
		return (
			<div>
				<h1 className="bg-dark text-white pl-2">{this.props.label}</h1>
			</div>
		);
	}
}
export default Banner;

Banner.propTypes = {
	label: PropTypes.string
};
