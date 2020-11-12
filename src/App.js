import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
            <Home />
          </Col>
        </Row>
        <Switch>
          <Route exact path = '/quien-soy/' component = {AboutMe} />
          <Route exact path = '/proyectos/' component = {Projects} />
          {/* <Route render = {NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
