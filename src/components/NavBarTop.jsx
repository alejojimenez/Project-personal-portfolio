import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';

// Secciones

const NavBarTop = () => {
    return (
        <>  
            <Navbar clasName = "navbar shadow-sm p-2 mb-1 " fixed="top" expand="lg">
                <Navbar.Brand href="/">Alejo Jiménez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className = "navbar ml-auto nav-tabs">
                        <Link className = "nav-item nav-link" to = '/inicio' >Inicio</Link>
                        <Link className = "nav-item nav-link" href="acerca-de-mi" to = '/acerca-de-mi/' >Acerca de mí</Link>
                        <Link className = "nav-item nav-link" href="proyectos" to = '/proyectos/' >Proyectos</Link>
                        <Link className = "nav-item nav-link" href="formacion" to = '/formacion/' >Formación</Link>
                        <Link className = "nav-item nav-link" href="contacto" to = '/contacto/' >Contacto</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavBarTop;