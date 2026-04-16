import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './ProjectDetails.css';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const { t, projectsData, lang } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProject = projectsData.find(p => p.id === id);
        setProject(foundProject);
    }, [id, projectsData]);

    if (!project) {
        return (
            <div className="container" style={{ paddingTop: '120px', minHeight: '100vh', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--red)' }}>{t.details.notFound}</h2>
                <Link to="/" className="btn btn-outline" style={{ marginTop: '2rem' }}>{t.details.return}</Link>
            </div>
        );
    }

    return (
        <motion.div
            className="project-details-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={smoothTransition}
        >
            <div className="container">
                <Link to="/" className="back-link">
                    <ArrowLeft size={18} />
                    {t.details.back}
                </Link>

                <div className="details-header">
                    <motion.h1
                        className="details-title"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ...smoothTransition, delay: 0.2 }}
                    >
                        {project.title}
                    </motion.h1>

                    <motion.div
                        className="details-actions"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ...smoothTransition, delay: 0.3 }}
                    >
                        {project.githubUrl !== "#" && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                                <Github size={18} /> {t.details.code}
                            </a>
                        )}
                        {project.demoUrl !== "#" && (
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <ExternalLink size={18} /> {t.details.demo}
                            </a>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    className="details-image-container"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ...smoothTransition, delay: 0.4 }}
                >
                    <img src={project.image} alt={project.title} className="details-hero-image" />
                </motion.div>

                <div className="details-content-grid">
                    <motion.div
                        className="details-main-content"
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ...smoothTransition, delay: 0.5 }}
                    >
                        <h3>{t.details.about}</h3>
                        <p className="long-description">{project.longDescription}</p>
                    </motion.div>

                    <motion.div
                        className="details-sidebar"
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ...smoothTransition, delay: 0.6 }}
                    >
                        <div className="sidebar-card">
                            <h4>{t.details.tech}</h4>
                            <div className="sidebar-tags">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className="tag subtle">
                                        <Code2 size={14} /> {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <h4>{t.details.timeline}</h4>
                            <p className="sidebar-text">
                                <Calendar size={18} className="sidebar-icon" />
                                2026
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;
