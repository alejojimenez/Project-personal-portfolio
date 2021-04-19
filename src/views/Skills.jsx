import React from 'react';
import {Card, CardDeck, Button} from 'react-bootstrap';

import '../App.css';

const Skills = () => {

    return (
        <>
            <div className = "color-background shadow p-3 mb-3 rounded">
                {/* Formación, Habilidades y Conocimientos  */}
                <h2 className = "position-left">Formación</h2>
                <div className = "linea"></div>
                <CardDeck>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img className = "image-card p-0" variant="top" src="https://servicities.com/blog/wp-content/uploads/2016/05/7-problemas-de-gesti%C3%B3n-empresarial-en-PYMEs.jpg" />
                        <Card.Body>
                            <Card.Title>Front - End</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button className = "btn-custom-color">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img className = "image-card p-0" variant="top" src="https://www.inalde.edu.co/wp-content/uploads/2020/05/imagen-estrategia-empresarial-en-tiempo-de-vodi-19-blog-inalde-business-school.jpg" />
                        <Card.Body>
                            <Card.Title>Back - End</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button className = "btn-custom-color">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img className = "image-card p-0" variant="top" src="https://servicities.com/blog/wp-content/uploads/2016/05/7-problemas-de-gesti%C3%B3n-empresarial-en-PYMEs.jpg" />
                        <Card.Body>
                            <Card.Title>Otros</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button className = "btn-custom-color">Detalles</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                {/* Educacion */}
                <h2 className = "position-left">Estudios</h2>
                <div className = "linea"></div>
                <CardDeck>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_t_J_rz1_nlxpUgXtOUtWcqO4Cq5FUxO5hg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Educación</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button className = "btn-custom-color">Download CV</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </>
    )

}

export default Skills;