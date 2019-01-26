import React from "react";
import Barchart from "../../component/barchart.jsx";
import Fade from "react-reveal/Fade";

const Skills = () => {
	return (
		<Fade>
			<div className="highlight_wrapper mt-5 pt-5">
				<Barchart />
			</div>
		</Fade>
	);
};

export default Skills;
