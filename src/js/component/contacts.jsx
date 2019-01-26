import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

class ContactInfo extends React.Component {
	render() {
		return (
			<div>
				<h1> Reach out to me</h1>
				<ul style={{ listStyle: "none", fontSize: "20px" }}>
					<li>
						<a
							href="mailto:ixaxtav@gmail.com"
							rel="noopener noreferrer"
							target="_blank">
							<i className="fas fa-envelope-square" /> -
							ixaxtav@gmail.com
						</a>
					</li>

					<li>
						<a
							href="https://www.linkedin.com/in/ixaxtavm"
							rel="noopener noreferrer"
							target="_blank">
							<i className="fab fa-linkedin" /> -
							www.linkedin.com/in/ixaxtavm
						</a>
					</li>

					<li>
						<a
							href="https://github.com/ixaxtav"
							rel="noopener noreferrer"
							target="_blank">
							<i className="fab fa-github-square" /> -
							https://github.com/ixaxtav
						</a>
					</li>
					<li>
						<a
							href="https://twitter.com/IxaxTavarez"
							rel="noopener noreferrer"
							target="_blank">
							<i className="fab fa-twitter-square" /> -
							https://twitter.com/IxaxTavarez
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
export default ContactInfo;
