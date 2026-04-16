import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import './ProjectsCarousel.css';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

const ProjectsCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false });
    const { t, projectsData } = useLanguage();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="section projects-section" id="projects">
            <div className="container">
                <div className="projects-header">
                    <motion.div
                        className="section-header"
                        style={{ marginBottom: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={smoothTransition}
                    >
                        <span className="section-label">{t.projects.label}</span>
                        <h2 className="section-title left-align">{t.projects.title}</h2>
                    </motion.div>

                    <div className="carousel-controls">
                        <button className="carousel-btn prev" onClick={scrollPrev} aria-label="Previous project">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="carousel-btn next" onClick={scrollNext} aria-label="Next project">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <motion.div
                    className="embla"
                    ref={emblaRef}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ ...smoothTransition, delay: 0.2 }}
                >
                    <div className="embla__container">
                        {projectsData.map((project) => (
                            <div className="embla__slide" key={project.id}>
                                <Link to={`/projects/${project.id}`} className="project-card">
                                    <div className="project-image-container">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                    </div>

                                    <div className="project-info">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-desc">{project.description}</p>

                                        <div className="project-footer">
                                            <div className="project-tags">
                                                {project.tags.map((tag, idx) => (
                                                    <span key={idx} className="tag">{tag}</span>
                                                ))}
                                            </div>
                                            <span className="project-link">
                                                {t.projects.viewCase} <ArrowRight size={14} style={{ marginLeft: '4px' }} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsCarousel;
