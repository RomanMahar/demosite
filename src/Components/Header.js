import React from 'react';
import { NavItems, SearchBar, Alerts, Account } from './HeaderComponents';

// Make component
const Header = () => {
	return (
	<header className="header navbar navbar-expand-lg">
		<a className="navbar-brand" href="#">
			<span className="bold-text">tooth</span><span className="light-text">meister</span>
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon">
				<i className="fas fa-bars"></i>
			</span>
		</button>

		<nav className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
				<NavItems />
			</ul>
			<SearchBar 
				placeholder={"Search cases, articles, products, etc."}
			/>
			<Alerts alertsNumber={2} />
			<Account imageSrc={"img/lucy.png"} accountName={"Dr. Lucy Vasquez"} />
		</nav>       

	</header>
	);
};

// Make component available to other parts of app. Export Component
export { Header };
