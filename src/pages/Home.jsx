import { useEffect } from 'react';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Stacks from '../components/Sections/Stacks';
import Experience from '../components/Sections/Experience';
import ProjectsCarousel from '../components/Sections/ProjectsCarousel';
import BlogPreview from '../components/Sections/BlogPreview';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home-page">
            <Hero />
            <About />
            <Stacks />
            <Experience />
            <ProjectsCarousel />
            <BlogPreview />
        </div>
    );
};

export default Home;
