import React from 'react';
import {Carousel, Image} from 'react-bootstrap';
import './ProjectsCarousel.css';

const ProjectsCarousel = () => {

    return (
        <Carousel className = "size-carousel shadow-sm p-3 mb-5 bg-white rounded">
            {/* <div className = "size-image"> */}
                <Carousel.Item>
                    <Image 
                        className="d-block w-100"
                        src="https://lh3.googleusercontent.com/proxy/irMkChzZjVSPWtEa0MOjUknc8v9jMByBLKSNdvsYU2l9tc0LV5jEabeclnFOjetPQ5AGJC8wS9oFDHm7vYk63Frp6WtzY2rF-G6F-I_xMyqpKyE7BOj1WzP8AVvD1zvQplSf22cgDN_suGPVMv4D1w"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Proyecto # 1 - Seccion Colaborativos</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="https://servicities.com/blog/wp-content/uploads/2016/05/7-problemas-de-gesti%C3%B3n-empresarial-en-PYMEs.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Proyectos # 3 - Seccion Educativos</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSLJIH7ZsH3pp3yt4JrY4Ox9QiPm-i7IV0vg&usqp=CAU"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Proyecto # 1 - Seccion Propios</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            {/* </div> */}
        </Carousel> 
    )
}

export default ProjectsCarousel;