import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import { scroller } from "react-scroll";

const RightDrawer = props => {
	const scrollToElement = element => {
		scroller.scrollTo(element, {
			duration: 1500,
			delay: 100,
			smooth: true,
			offset: -150
		});
		props.onClose(false);
	};

	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}>
			<List component="nav">
				<ListItem button onClick={() => scrollToElement("featured")}>
					About
				</ListItem>

				<ListItem button onClick={() => scrollToElement("venuenfo")}>
					Experiences
				</ListItem>

				<ListItem button onClick={() => scrollToElement("highlights")}>
					Projects
				</ListItem>

				<ListItem button onClick={() => scrollToElement("pricing")}>
					Skills
				</ListItem>

				<ListItem button onClick={() => scrollToElement("location")}>
					Education
				</ListItem>
				<ListItem button onClick={() => scrollToElement("location")}>
					Contact
				</ListItem>
				<ListItem button onClick={() => scrollToElement("location")}>
					Resume
				</ListItem>
			</List>
		</Drawer>
	);
};

export default RightDrawer;

RightDrawer.propTypes = {
	open: PropTypes.bool,
	onClose: PropTypes.func
};
