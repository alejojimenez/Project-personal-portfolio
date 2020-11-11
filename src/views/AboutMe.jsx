import React from 'react';
import HeaderSection from '../components/HeaderSection';
import {Card, Button, Row, Col} from 'react-bootstrap';
import {FaWhatsapp, FaEnvelope} from 'react-icons/fa';

const AboutMe = () => {

    return (
        <>
            <HeaderSection 
                regars = 'Hola, yo soy' 
                name = 'Alexander José Jiménez'
                title = 'Desarrollador Web Full Stack Junior'
            />
            <Card className = "shadow p-3 mb-5" style={{ width: '100%' }}>
                <Card.Img variant="right" src="" />
                <Row>
                    <Col sm={12}>
                        <FaWhatsapp />
                        <FaEnvelope />
                    </Col>
                </Row>
                <Card.Body>
                    <Card.Title>Acerca de Mí</Card.Title>
                    <Card.Text>
                        <p>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <p>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                    </Card.Text>
                    <Button variant="primary">Download CV</Button>

                </Card.Body>
            </Card>
        </>
    )
}

export default AboutMe;