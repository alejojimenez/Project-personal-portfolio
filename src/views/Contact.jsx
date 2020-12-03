import React from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import {FaGithub, FaLinkedinIn, FaWhatsapp, FaEnvelope} from 'react-icons/fa';

import '../App.css';

const Contact = () => {

    return (
        <>
                    <Card className="col-md-12 shadow p-3 mb-3 rounded">
                        <Row>
                            <Col md="6">
                                <h1>Contactame</h1>
                                <br />
                                <p>Si tienes algun comentario</p>
                                <p>en cualquier momento.</p>
                                <div className = "icons-position col-12">
                                    <FaWhatsapp /> {' '}
                                    <FaEnvelope /> {' '}
                                    <FaGithub /> {' '}
                                    <FaLinkedinIn />
                                </div>
                            </Col>
                            <Col md="6">
                                <form>
                                    <p className="h4 text-center mb-4">Write to us</p>
                                    <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                        Your name
                                    </label>
                                    <input type="text" id="defaultFormContactNameEx" className="form-control" />
                                    <br />
                                    <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                        Your email
                                    </label>
                                    <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                                    <br />
                                    <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                                        Subject
                                    </label>
                                    <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
                                    <br />
                                    <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                        Your message
                                    </label>
                                    <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                                    <div className="text-center mt-4">
                                    <Button className = "btn-custom-color" type="submit">
                                        Enviar
                                        {/* <Icon far icon="paper-plane" className="ml-2" /> */}
                                    </Button>
                                    </div>
                                </form>
                            </Col>
                        </Row>
                    </Card>

        </>
    )
}

export default Contact;
