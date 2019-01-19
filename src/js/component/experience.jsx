import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export class Experience extends React.Component {
	render() {
		return (
			<div
				className="card justify-content-center mx-auto"
				style={{ width: "60rem" }}>
				<div className="card-header" style={{ fontSize: "32px" }}>
					Lorem ipsum
				</div>
				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<ul>
							<li>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Integer posuere erat a ante.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Integer posuere erat a ante.
							</li>
							<li>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Integer posuere erat a ante.
							</li>
						</ul>
						<footer className="blockquote-footer">
							January 5 <cite title="Source Title">2018</cite>
						</footer>
					</blockquote>
				</div>
			</div>
		);
	}
}
