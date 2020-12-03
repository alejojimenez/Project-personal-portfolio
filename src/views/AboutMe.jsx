import React from 'react';
import {Image, Card, Button, Row} from 'react-bootstrap';
import {FaWhatsapp, FaEnvelope} from 'react-icons/fa';
import aboutMe from '../images/image_about_me.jpg';
import '../App.css';

const AboutMe = () => {

    return (
        <>  
        <div id="quien-soy">
            <Card className="col-md-12 border-0 shadow-sm p-3 mb-1">
                <Row>
                    <div className = "col-sm-6">
                        <Row>
                            <Image className = "image-aboutMe" variant="right" src={aboutMe} alt="Acerca de mi" />
                        </Row>
                        <div className = "icons-position col-12">
                            <FaWhatsapp /> {' '}
                            <FaEnvelope />
                        </div>
                    </div>
                    <div className = "col-sm-6">
                        <Card.Body>
                            <Card.Text>
                                <h2>Acerca de Mí</h2>
                                <p>
                                    Hola!!! que gusto tenerte por aquí y que muestres interés en saber más sobre mí. 
                                    Haz dado un gran paso, por lo que te hablare un poco más acerca de mí.
                                </p>
                                <p>
                                    Mi nombre, seguramente ya lo conoces. Soy Alexander Jiménez Rengifo y me defino
                                    como una persona entusiasta, dispuesta a enfrentar nuevos retos.
                                </p>
                                <p>
                                    Comprometido con el logro de los objetivos, con fuerte orientación hacia el cliente, 
                                    focalizado en los detalles y en brindar calidad de servicio. 
                                </p>
                                <p>
                                    Me mantengo en el estado del arte, siempre actualizándome en todo momento sobre las
                                    nuevas tendencias en el gran mundo del desarrollo.
                                </p>
                                <p>
                                    Por otro lado, quienes me conocen realmente me definen como una persona empática, 
                                    comunicativa, analítica, planificada, comprometida con fuerte orientación hacia el 
                                    liderazgo y al trabajo en equipo.
                                </p>
                                {/* <p>
                                    Seguramente veras mi perfil en LinkedIn, bravo por eso.  Tal vez te surjan algunas 
                                    dudas, aprovechare de dejarte por acá algunos detalles que te pueda ayudar en 
                                    aclararlas. 
                                </p> */}
                                <p>
                                    Mis inicios, fueron en el mundo del desarrollo, durante mi crecimiento profesional 
                                    decidí pasar a otras áreas, por lo que me alejé de la programación.
                                </p>
                                {/* <p>
                                    Las oportunidades en su momento hicieron que me desarrollara en area como Infraestructura
                                    de Servidores, Sistemas ERP, Redes y Telecomunicaciones. 
                                </p> */}
                                <p>
                                    Para ser sincero, aprendí mucho y también coordine, ejecute y liderice muy buenos
                                    proyectos, pero decidí volver a mis inicios, esta vez con nuevas y potentes tecnologías.
                                </p>
                                <p>
                                    Es por ello que te muestro en este Portafolio, un poco de mis trabajos.  
                                    Espero que lo que observe aquí, te ilustre un poco lo que soy capaz de hacer.
                                </p>
                            </Card.Text>
                            <Button variant="primary">Download CV</Button>
                        </Card.Body>
                    </div>
                </Row>
            </Card>
        </div>
        </>
    )
}

export default AboutMe;