import React from "react";
import PropTypes from "prop-types";
import "../../../styles/index.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import RightDrawer from "./rightDrawer.jsx";

export class NavbarRight extends React.Component {
	constructor() {
		super();
		this.state = {
			drawerOpen: false,
			headerShow: false
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	handleScroll = () => {
		if (window.scrollY > 0) {
			this.setState({
				headerShow: true
			});
		} else {
			this.setState({
				headerShow: false
			});
		}
	};

	toggleDrawer = value => {
		this.setState({
			drawerOpen: value
		});
	};

	render() {
		return (
			<AppBar
				position="fixed"
				style={{
					backgroundColor: this.state.headerShow
						? "black"
						: "transparent",
					boxShadow: "none",
					padding: "10px 0px"
				}}>
				<Toolbar>
					<div className="header_logo d-none d-sm-block">
						<div className="header_logo_name">Ixax Tavarez</div>
						<div className="header_logo_title">
							Full Stack Developer
						</div>
					</div>

					<IconButton
						arial-label="Menu"
						color="inherit"
						onClick={() => this.toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<RightDrawer
						open={this.state.drawerOpen}
						onClose={value => this.toggleDrawer(value)}
					/>
				</Toolbar>
			</AppBar>
		);
	}
}

NavbarRight.propTypes = {
	AppBar: PropTypes.func
};
