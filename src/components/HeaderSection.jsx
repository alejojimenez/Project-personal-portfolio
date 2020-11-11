import React from 'react';
import {Jumbotron, Col, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {Button} from 'react-bootstrap';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

import './HeaderSection.css';

const HeaderSection = (props) => {

    return (
        <Jumbotron className = "styleJumbotron shadow p-3 mb-5 bg-white rounded">
            <Row>
                <Col sm={4}>
                    <Image src="./images/avatars.png" roundedCircle />
                    <Row className = "icons-position">
                        <Col sm={1}>
                            <FaGithub />
                        </Col>
                        <Col sm={1}>                
                            <FaLinkedinIn />
                        </Col>
                    </Row>                    
                </Col>
                <Col sm={8}>
                    <h1>
                        {props.regars}
                    </h1>
                    <p className = "personal-brand-1">
                        {props.name}
                    </p>
                    <h2 className = "text-muted">
                        <u>
                            {props.title}
                        </u>
                    </h2>
                    <br></br>
                    <br></br>
                    <p>
                        <Button variant="primary">Contactame</Button>
                    </p>
                </Col>
            </Row>
            <br></br>
        </Jumbotron>
    )
}

export default HeaderSection;