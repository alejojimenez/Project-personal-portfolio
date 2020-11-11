import React from 'react';
import {Jumbotron, Col, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import {Button} from 'react-bootstrap';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

import './HeaderSection.css';

const HeaderSection = (props) => {

    return (
        <Jumbotron className = "styleJumbotron shadow-sm p-3 mb-5 bg-white rounded">
            <Row>
                <Col sm={6}>
                    <Row>
                        <Image className = "image-headerSection" src="https://149351115.v2.pressablecdn.com/wp-content/uploads/2020/02/iStock-1163542789-945x630.jpg" />
                    </Row>
                    <Row className = "icons-position">
                        <Col sm={12}>
                            <FaGithub />
                            <FaLinkedinIn />
                        </Col>
                    </Row>                    
                </Col>
                <Col sm={6}>
                    <br></br>
                    <br></br>
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
                    <p>
                        <Button variant="primary">Contacto</Button>
                    </p>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default HeaderSection;