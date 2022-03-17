import React from 'react';
import './css/BootstrapNavbar.css';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

import { NavDropdown, NavItem } from 'react-bootstrap';

const Test = () => {
    return (
        <Navbar bg="white" className="navbar-whole">
            <Container>
                <Nav>
                    <Image className="nav-img" class="img-fluid" src="https://i.imgur.com/0jRzKI9.png"></Image>
                    <Nav className='user-info'>Hei, *insert käyttäjänimi*!</Nav>
                </Nav>
            
            <Nav className="navbar-end">
                <Link to="/" className="nav-link">
                    Koti
                </Link>
                <Link to="/Matkakohde" className="nav-link">
                    Matkakohde
                </Link>
                <Link to="/Jasenet" className="nav-link">
					Jäsenet
				</Link>
                <Link to="/PorukanMatkat" className="nav-link">
					Porukan matkat
				</Link>
                <Link to="/OmatMatkat" className="nav-link" >
					Omat matkat
				</Link>
                <NavDropdown title="Omat tiedot" id="basic-nav-dropdown">
                    <NavItem>
                        <Link to="/OmatTiedot" className="nav-link">Omat tiedot</Link>
                    </NavItem>
                    <hr></hr>
                    <NavItem>
                        <Link to="/OmatTiedot" className="nav-link">Kirjaudu ulos</Link>
                    </NavItem>
                </NavDropdown>
                
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Test;