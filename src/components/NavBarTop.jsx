import React from 'react';
import { Link } from 'react-router-dom';
import {Image, Navbar, Nav} from 'react-bootstrap';
import './NavBarTop.css';

const NavBarTop = () => {

    return (
        <>
            {/* <Image src="" fluid /> */}
            <Navbar className = "navbar-fixed-top menu-navbar-top" bg="primary" variant="dark">
                <Navbar.Brand className = "personal-brand" href="#home">Alejo Jiménez</Navbar.Brand>
                <Nav className="navbar-inner ml-auto" variant="tabs">
                    <Link className = "nav-link" to = '/acerca-de-mi' >Acerca de mí</Link>
                    <Link className = "nav-link" to = '/proyectos' >Proyectos</Link>
                    <Link className = "nav-link" to = '/conocimientos-y-educacion' >Conocimientos y Educación</Link>
                    <Link className = "nav-link" to = '/contactame' >Contactame</Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBarTop;