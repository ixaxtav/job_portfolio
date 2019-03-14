import React from "react";
import Fade from "react-reveal/Fade";

const Description = () => {
	return (
		<Fade>
			<div>
				{" "}
				<h2
					className="text-center"
					style={{
						textAlign: "center",
						textTransform: "uppercase",
						color: "#2c2c2c",
						fontSize: "52px"
					}}>
					About Me
				</h2>
				<div className="row justify-content-center pt-4">
					<div className="col-9 mx-auto">
						I’ve been always been the kind of person that goes
						towards the challenges that are meaningful to me in some
						type of way . I always strive to learn, to try something
						new, to become a better version of myself every single
						day and to expand my creativity to a level that is
						unmeasurable. Although my professional path has taken so
						many twists and turns from being kid that wanted to be a
						professional player, to a university student that wanted
						to pursue the medical path, to now a driven full stack
						web developer.
						<br />
						<br />
						The reason I decided to become a web developer was
						because this careers match my personality, I adore the
						details behind the creation of any app. My mission is to
						be more engage in the programing field and work close to
						a high growth company that are interested for a software
						developer.
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Description;
