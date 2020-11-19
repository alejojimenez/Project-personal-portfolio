import React from 'react';
import {Card, CardDeck, Button} from 'react-bootstrap';
// import './Projects.css';
import '../App.css';

const Projects = () => {

    return (
        <>
            <div className = "color-background shadow-sm p-3 mb-5">
                {/* Proyectos educativos realizados en academias */}
                <h2 className = "position-left">Proyectos Educativos</h2>
                <div className = "linea"></div>
                <CardDeck>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img className = "image-card" variant="top" src="https://servicities.com/blog/wp-content/uploads/2016/05/7-problemas-de-gesti%C3%B3n-empresarial-en-PYMEs.jpg" />
                        <Card.Body>
                            <Card.Title>Proyecto # 1</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://www.inalde.edu.co/wp-content/uploads/2020/05/imagen-estrategia-empresarial-en-tiempo-de-vodi-19-blog-inalde-business-school.jpg" />
                        <Card.Body>
                            <Card.Title>Proyecto # 2</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://servicities.com/blog/wp-content/uploads/2016/05/7-problemas-de-gesti%C3%B3n-empresarial-en-PYMEs.jpg" />
                        <Card.Body>
                            <Card.Title>Proyecto # 3</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://www.inalde.edu.co/wp-content/uploads/2020/05/imagen-estrategia-empresarial-en-tiempo-de-vodi-19-blog-inalde-business-school.jpg" />
                        <Card.Body>
                            <Card.Title>Proyecto # 4</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                {/* Proyectos Colaborativos realizados en academias */}
                <h2 className = "position-left">Proyectos Colaborativos</h2>
                <div className = "linea"></div>
                <CardDeck>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_t_J_rz1_nlxpUgXtOUtWcqO4Cq5FUxO5hg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Proyecto # 1</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZm6IkXQ5S0TB7JAMiMIMLJkkV0gxg1haVMw&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Proyecto # 2</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_t_J_rz1_nlxpUgXtOUtWcqO4Cq5FUxO5hg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Proyecto # 3</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZm6IkXQ5S0TB7JAMiMIMLJkkV0gxg1haVMw&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Proyecto # 4</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                {/* Proyectos Propios */}
                <h2 className = "position-left">Proyectos Propios</h2>
                <div className = "linea"></div>
                <CardDeck>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSLJIH7ZsH3pp3yt4JrY4Ox9QiPm-i7IV0vg&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Proyecto # 1</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2eVtE_ruXLKyHpjz3GZBK852xkVTOalOQiQ&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Proyecto # 2</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://www.wdesign.cl/upload/noticias/desarrollo-de-paginas-web-profesionales-en-osorno-a11bda17f8522e39a9bcf3cad3794341.jpg" />
                        <Card.Body>
                            <Card.Title>Proyecto # 3</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                    <Card border="light" className="col-md-10 shadow p-3 mb-5">
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSb-Sg4wuBtbMf7mkvyA1BwlaMQeAp4T-yt8Q&usqp=CAU" />
                        <Card.Body>
                            <Card.Title>Proyecto # 4</Card.Title>
                            <Card.Text>
                                <p>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Detalles</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </>
    )
}

export default Projects;