import React from 'react';
import {Jumbotron, Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';

import './HeaderSection.css';

const HeaderSection = (props) => {

    return (
        <>
        {/* <div className = "md:flex bg-white rounded-lg p-6">
            <img className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="../images/avatars.png" />
            <div class="text-center md:text-left">
                <h2 class="text-lg">{props.name}</h2>
                <div class="text-purple-500">{props.title}</div>
                <div class="text-gray-600">alejojimenezrengifo@gmail.com</div>
                <div class="text-gray-600">+56 (9) 7819-2117</div>
            </div>
            <p>
                <Button variant="primary">Contacto</Button>
                <div className = "icons-position col-12">
                    <FaGithub /> {' '}
                    <FaLinkedinIn />
                </div>
            </p>
        </div> */}

        <Jumbotron className = "styleJumbotron">
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
        </Jumbotron>
        </>
    )
}

export default HeaderSection;