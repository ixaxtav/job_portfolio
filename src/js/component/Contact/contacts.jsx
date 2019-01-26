import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

class ContactInfo extends React.Component {
	render() {
		return (
			<Fade>
				<div className="center_wrapper">
					<h2>Contact</h2>
					<div className="highlight_description">
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
				</div>
			</Fade>
		);
	}
}
export default ContactInfo;
