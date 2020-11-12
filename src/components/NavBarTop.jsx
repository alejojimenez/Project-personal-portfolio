import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSection from './HeaderSection';
import {Navbar, Nav} from 'react-bootstrap';
import './NavBarTop.css';

const NavBarTop = () => {

    return (
        <>  
            <header className = "image-navbar">
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