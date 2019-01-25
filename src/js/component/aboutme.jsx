import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class AboutMe extends React.Component {
	render() {
		return (
			<div className="container" id="about">
				<p
					className="pl-2"
					style={{ fontSize: "22px", lineHeight: "1.6" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras ullamcorper orci id nibh posuere, eu malesuada lacus
					feugiat. Maecenas quis commodo libero, non mollis nunc.
					Quisque dictum quam ut est volutpat, in laoreet dolor
					vulputate. In nec justo dapibus, aliquam ipsum in, finibus
					justo. Duis id eleifend felis. Nam mattis quam sed vulputate
					venenatis. Quisque ut diam at diam vestibulum viverra.
					Maecenas faucibus enim nec diam porta lacinia. Suspendisse
					volutpat eros sed tortor tincidunt, interdum hendrerit sem
					sagittis. Nunc et gravida justo.Maecenas quis commodo
					libero, non mollis nunc. Quisque dictum quam ut est
					volutpat, in laoreet dolor vulputate. In nec justo dapibus,
					aliquam ipsum in, finibus justo. Duis id eleifend felis. Nam
					mattis quam sed vulputate venenatis. Quisque ut diam at diam
					vestibulum viverra. Maecenas faucibus enim nec diam porta
					lacinia. Suspendisse volutpat eros sed tortor tincidunt,
					interdum hendrerit sem sagittis. Nunc et gravida justo
				</p>
			</div>
		);
	}
}
