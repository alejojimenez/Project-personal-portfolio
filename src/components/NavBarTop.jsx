import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import './NavBarTop.css';

const NavBarTop = () => {

    return (
        <>
            <Navbar className = "shadow p-3 mb-5 bg-white rounded fixed-top" bg="light" variant="primary">
                <Navbar.Brand className = "personal-brand" href="/">Alejo Jiménez</Navbar.Brand>
                <Nav className="navbar-inner ml-auto" >
                    <Link className = "nav-link" to = '/inicio' >Inicio</Link>
                    <Link className = "nav-link" to = '/acerca-de' >Acerca de</Link>
                    <Link className = "nav-link" to = '/proyectos' >Proyectos</Link>
                    <Link className = "nav-link" to = '/formacion' >Formacion</Link>
                    <Link className = "nav-link" to = '/contacto' >Contacto</Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default NavBarTop;