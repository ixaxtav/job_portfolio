import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";
import "../styles/index.css";

import { MainPage } from "./views/main.jsx";
import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { Single } from "./views/single.jsx";
import Store from "./store/appContext.jsx";
import { Element } from "react-scroll";

import { Navbar } from "./component/navbar.jsx";
import { NavbarRight } from "./component/NavBar/navbarRight.jsx";
import { MainPic } from "./component/mainPic.jsx";
import { Footer } from "./component/footer.jsx";
import AboutMe from "./component/AboutMe/aboutMe.jsx";
import Experiences from "./component/Experience/experience_s.jsx";
import ListOfProjects from "./component/Projects/listProjects.jsx";
import Skills from "./component/Skills/skills.jsx";
import ListOfEducation from "./component/Education/listOfEducation.jsx";
import AllContacts from "./component/Contact/allContacts.jsx";
//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<ScrollToTop>
					<NavbarRight />
					<MainPic />
					<Element name="About">
						<AboutMe />
					</Element>
					<Element name="Experiences">
						<Experiences />
					</Element>
					<Element name="Projects">
						<ListOfProjects />
					</Element>

					<Element name="Skills">
						<Skills />
					</Element>
					<Element name="Education">
						<ListOfEducation />
					</Element>

					<Element name="Contact">
						<AllContacts />
					</Element>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		);
	}
}

export default Store(Layout);
