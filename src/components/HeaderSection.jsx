import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import avatars from '../images/avatars.jpg';
import '../App.css';

const styles = {
    card: {
        borderRadius: 55,
        padding: '3rem',
        opacity: 0.6,
        backgroundColor: 'white',
    },
    cardImage: {
        width: '60%',
        height: '100%',
        objectFit: 'cover',
    }
}

const HeaderSection = (props) => {

    return (
        <div className = "color-background shadow-sm p-3 mb-1">
            <Row>
                <Col sm={6} className = "header-position">
                    <Row>
                        <Col sm={12}>
                            <Image src={avatars} alt="Alejo Jimenez" style={styles.cardImage} roundedCircle thumbnail />   
                        </Col>                        
                        <div className = "icons-position col-12">
                            <FaGithub /> {' '}
                            <FaLinkedinIn />
                        </div>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={12}>
                            <h2 className = "text-image-navbar">
                                {props.regars}
                            </h2>
                        </Col>
                        <Col sm={12}>
                            <p className = "personal-brand-1">
                                {props.name}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <h2 className = "text-muted text-image-navbar">
                                <u>
                                    {props.title1}
                                </u>
                            </h2>
                            <h2 className = "text-muted text-image-navbar">
                                <u>
                                    {props.title2}
                                </u>
                            </h2>
                        </Col>
                        <br />
                        <Col sm={12}>
                            <p>
                                <Button className = "color-buttom">Contacto</Button>
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6} className = "image-navbar">               
                </Col>
            </Row>
        </div>
    )
}

export default HeaderSection;