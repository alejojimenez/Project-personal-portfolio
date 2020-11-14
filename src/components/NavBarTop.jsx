import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import './NavBarTop.css';

// Secciones
import HeaderSection from './HeaderSection';

const NavBarTop = () => {

    return (
        <>  
            <header className = "image-navbar shadow-sm p-3 mb-5">
                <Navbar clasName = "navbar navbar-light" bg="light" variant="dark">
                    <Navbar.Brand className = "personal-brand" href="/">Alejo Jiménez</Navbar.Brand>
                    <Nav className = "navbar m-auto navbar-inner">
                        <Link className = "nav-item active nav-link" to = '/inicio' >Inicio</Link>
                        <Link className = "nav-item nav-link" to = '/quien-soy/' >Quien soy</Link>
                        <Link className = "nav-item nav-link" to = '/proyectos/' >Proyectos</Link>
                        <Link className = "nav-item nav-link" to = '/formacion/' >Formación</Link>
                        <Link className = "nav-item nav-link" to = '/contacto/' >Contacto</Link>
                    </Nav>
                </Navbar>
                <HeaderSection 
                    regars = 'Hola, yo soy' 
                    name = 'Alexander José Jiménez'
                    title = 'Desarrollador Web Full Stack Junior'
                />

            </header>
        </>
    )
}

export default NavBarTop;