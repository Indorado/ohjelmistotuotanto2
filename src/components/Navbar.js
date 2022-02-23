import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				<img className="image" src="https://i.imgur.com/0jRzKI9.png"></img>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Koti
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Matkakohde" className="nav-link" onClick={closeMenu}>
						Matkakohde
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/Jasenet" className="nav-link" onClick={closeMenu}>
						Jäsenet
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/PorukanMatkat" className="nav-link" onClick={closeMenu}>
						Porukan matkat
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/OmatMatkat" className="nav-link" onClick={closeMenu}>
						Omat matkat
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/OmatTiedot" className="nav-link" onClick={closeMenu}>
						Omat tiedot
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
