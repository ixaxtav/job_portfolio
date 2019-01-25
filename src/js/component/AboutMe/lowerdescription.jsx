import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

class LowerDescription extends Component {
	state = {
		porcentageStart: 0,
		porcentageEnd: 110
	};

	porcentage = () => {
		if (this.state.porcentageStart < this.state.porcentageEnd) {
			this.setState({
				porcentageStart: this.state.porcentageStart + 1
			});
		}
	};

	componentDidUpdate() {
		setTimeout(() => {
			this.porcentage();
		}, 30);
	}

	render() {
		return (
			<div className="center_wrapper" style={{ border: "solid" }}>
				<div className="discount_wrapper">
					<Fade onReveal={() => this.porcentage()}>
						<div className="s_porcentage">
							<span>
								Current focus: Give {this.state.porcentageStart}
								% effort to future projects !
							</span>
						</div>
					</Fade>
				</div>
			</div>
		);
	}
}

export default LowerDescription;
