import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";
import "../styles/index.css";

import { MainPage } from "./views/main.jsx";
import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { NavbarRight } from "./component/NavBar/navbarRight.jsx";
import { MainPic } from "./component/mainPic.jsx";
import { Footer } from "./component/footer.jsx";
import AboutMe from "./component/AboutMe/aboutMe.jsx";
import Experiences from "./component/Experience/experience_s.jsx";
import Projects from "./component/Experience/projects.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<NavbarRight />

					<MainPic />
					<AboutMe />
					<Experiences />
					<Projects />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
