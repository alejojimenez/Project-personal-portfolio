import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBarTop from './components/NavBarTop';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

//secciones 
import Home from './views/Home';
import AboutMe from './views/AboutMe';
import Projects from './views/Projects';
//import Tasks from './views/Tasks';

const App = () => {
  return (
    <Container className = "body-style">
      <BrowserRouter>
        <Row>
          <Col>
            <NavBarTop />
          </Col>
        </Row>
        <Row>
          <Col>
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/acerca-de-mi' component = {AboutMe} />
              <Route exact path = '/proyectos' component = {Projects} />
              {/* <Route render = {NotFound} /> */}
            </Switch>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
}

export default App;
