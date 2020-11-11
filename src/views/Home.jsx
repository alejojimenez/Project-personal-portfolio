import React from 'react';
import HeaderSection from '../components/HeaderSection';
import ProjectsCarousel from '../components/ProjectsCarousel';

const Home = () => {

    return (
        <>
            <HeaderSection 
                regars = 'Hola, yo soy' 
                name = 'Alexander José Jiménez'
                title = 'Desarrollador Web Full Stack Junior'
            />
            <ProjectsCarousel />
        </>
    )
}

export default Home;