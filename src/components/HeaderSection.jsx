import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import './HeaderSection.css';
import '../App.css';

const styles = {
    card: {
        borderRadius: 55,
        padding: '3rem',
        opacity: 0.6,
        backgroundColor: 'white',
    },
    cardImage: {
        width: '50%',
        height: '50%',
        objectFit: 'cover',
        borderRadius: 100
    }
}

const HeaderSection = (props) => {

    return (
        <div className = "color-background shadow-sm mb-5">
            <Row>
                <Col sm={6}>
                    <Row>
                        <Col sm={12}>
                            <Image src="https://us.123rf.com/450wm/kritchanut/kritchanut1406/kritchanut140600114/29213224-hombre-foto-de-perfil-silueta-avatar.jpg?ver=6" style={styles.cardImage} />
                        </Col>                        
                        <div className = "icons-position col-12">
                            <FaGithub /> {' '}
                            <FaLinkedinIn />
                        </div>
                    </Row>
                    <br />
                    <Row>
                        <Col sm={12}>
                            <h2>
                                {props.regars}
                            </h2>
                        </Col>
                        <Col sm={12}>
                            <p className = "personal-brand-1">
                                {props.name}
                            </p>
                        </Col>
                        <Col sm={12}>
                            <h2 className = "text-muted">
                                <u>
                                    {props.title1}
                                </u>
                            </h2>
                            <h2 className = "text-muted">
                                <u>
                                    {props.title2}
                                </u>
                            </h2>
                        </Col>
                        <br />
                        <Col sm={12}>
                            <p>
                                <Button variant="primary">Contacto</Button>
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