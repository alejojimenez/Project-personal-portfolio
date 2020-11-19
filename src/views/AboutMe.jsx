import React from 'react';
import {Image, Card, Button, Row} from 'react-bootstrap';
import {FaWhatsapp, FaEnvelope} from 'react-icons/fa';
// import './AboutMe.css';
import '../App.css';

const AboutMe = () => {

    return (
        <>
            <Card className="col-md-12 border-0 shadow p-3 mb-5">
                <Row>
                    <div className = "col-sm-6">
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
                    </div>
                    <div className = "col-sm-6">
                        <Row>
                            <Image className = "image-aboutMe" variant="right" src="https://images.idgesg.net/images/article/2020/03/cso_user_laptop_binary_code_coding_programming_development_by_metamorworks_gettyimages-1092965422_2400x1600-100835431-large.jpg" />
                        </Row>
                        <div className = "icons-position col-12">
                            <FaWhatsapp /> {' '}
                            <FaEnvelope />
                        </div>
                    </div>
                </Row>
            </Card>
        </>
    )
}

export default AboutMe;