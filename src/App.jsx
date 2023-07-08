import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollspy from 'react-scrollspy';

const App = () => {
	return (
		<>
			<Nav />
			<Scrollspy>
				{/* <Header /> */}
				<About />
				{/* <Experience /> */}
				<Portfolio />
				<Contact />
			</Scrollspy>
			<Footer />
		</>
	);
};

export default App;
