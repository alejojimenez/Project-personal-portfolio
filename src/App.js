import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

//secciones 
import NavBarTop from './components/NavBarTop';
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
import Skills from './views/Skills';
import Contact from './views/Contact';
import Footer from './views/Footer';

const App = () => {
  return (
    <>
      <Container className="body-style">
        <BrowserRouter>
          <NavBarTop />
          <Home />
          <Switch>
            <Route exact path='/acerca-de-mi/' component={AboutMe} />
            <Route exact path='/proyectos/' component={Projects} />
            <Route exact path='/formacion/' component={Skills} />
            <Route exact path='/contacto/' component={Contact} />
            {/* <Route render = {NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </Container>
      <Footer />
    </>
  );
}

export default App;
