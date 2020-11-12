import React from 'react';
import {Jumbotron, Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

import './HeaderSection.css';

const HeaderSection = (props) => {

    return (
        <Jumbotron className = "styleJumbotron">
            <Row>
                <div className = "col-12">
                    <h2>
                        {props.regars}
                    </h2>
                    <p className = "personal-brand-1">
                        {props.name}
                    </p>
                    <h2 className = "text-muted">
                        <u>
                            {props.title}
                        </u>
                    </h2>
                    <br />
                    <p>
                        <Button variant="primary">Contacto</Button>
                        <div className = "icons-position col-12">
                            <FaGithub /> {' '}
                            <FaLinkedinIn />
                        </div>
                    </p>
                </div>
            </Row>
        </Jumbotron>
    )
}

export default HeaderSection;