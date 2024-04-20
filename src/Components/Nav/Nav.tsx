import React from 'react';
import './Nav.css';

import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { navLinks, navRight } from '../../Data/data';

import { GrClose, GrMenu } from 'react-icons/gr';

const Nav: React.FC = () => {
	return (
		<nav>
			<div className="container nav-container">
				<Link to={'/'} className="logo">
					<img src={Logo} alt="Logo" />
				</Link>

				<ul className="nav-links">
					{navLinks.map(({ name, path }, index) => {
						return (
							<li key={index}>
								<NavLink to={path}>{name}</NavLink>
							</li>
						);
					})}
					;
				</ul>
				<div className="nav-right">
					{navRight.managements.map((item, index) => {
						return (
							<Link
								key={index}
								target="_blank"
								className="management-icons"
								to={item.link}
							>
								<item.icon />
							</Link>
						);
					})}
					;
				</div>
				<button className="menu-button">
					<GrMenu />
					<GrClose />
				</button>
			</div>
		</nav>
	);
};
export default Nav;
