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
				<ListItem button onClick={() => scrollToElement("About")}>
					About
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Experiences")}>
					Experiences
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Projects")}>
					Projects
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Skills")}>
					Skills
				</ListItem>

				<ListItem button onClick={() => scrollToElement("Education")}>
					Education
				</ListItem>
				<ListItem button onClick={() => scrollToElement("Contact")}>
					Contact
				</ListItem>
				<ListItem button>
					<a
						rel="noopener noreferrer"
						href="https://docs.google.com/document/d/1xp2BtVTaIL1E7p_8CR3RhCOcqcm9BjzCED7lttaGbiY/edit"
						target="_blank">
						Resume
					</a>
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
