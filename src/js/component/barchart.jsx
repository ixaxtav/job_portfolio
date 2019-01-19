import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/barprogress.scss";

export class Barchart extends React.Component {
	render() {
		return (
			<div className="container-skills">
				<div className="html">
					<p className="bar-title">
						HTML / HTML5 & CSS
						<span className="percent align-right">90%</span>
					</p>
					<div className="bar">
						<div className="bar-fill bar-fill-html start" />
					</div>
				</div>
				<div className="javascript">
					<p className="bar-title">
						Javascript
						<span className="percent align-right">60%</span>
					</p>
					<div className="bar">
						<div className="bar-fill bar-fill-javascript start" />
					</div>
				</div>
				<div className="jquery">
					<p className="bar-title">
						JQuery
						<span className="percent align-right">70%</span>
					</p>
					<div className="bar">
						<div className="bar-fill bar-fill-jquery start" />
					</div>
				</div>
				<div className="responsive-design">
					<p className="bar-title">
						Responsive Design
						<span className="percent align-right">90%</span>
					</p>
					<div className="bar">
						<div className="bar-fill bar-fill-responsive start" />
					</div>
				</div>
				<div className="photoshop">
					<p className="bar-title">
						Photoshop
						<span className="percent align-right">20%</span>
					</p>
					<div className="bar">
						<div className="bar-fill bar-fill-photoshop start" />
					</div>
				</div>
			</div>
		);
	}
}
