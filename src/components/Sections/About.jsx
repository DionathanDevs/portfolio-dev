import { motion } from 'framer-motion';
import { Code, Globe, Coffee } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import profileImage from '../../assets/images/profile.jpeg';
import './About.css';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

const About = () => {
    const { t } = useLanguage();

    return (
        <section className="section about-section" id="about">
            <div className="container">
                <div className="about-grid">

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={smoothTransition}
                    >
                        <span className="section-label">{t.about.label}</span>
                        <h2 className="section-title left-align">{t.about.title}</h2>

                        <div className="about-text">
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-card">
                                <Coffee className="stat-icon" size={24} />
                                <span className="stat-value">{t.about.stat1v}</span>
                                <span className="stat-label">{t.about.stat1l}</span>
                            </div>
                            <div className="stat-card">
                                <Code className="stat-icon" size={24} />
                                <span className="stat-value">{t.about.stat2v}</span>
                                <span className="stat-label">{t.about.stat2l}</span>
                            </div>
                            <div className="stat-card">
                                <Globe className="stat-icon" size={24} />
                                <span className="stat-value">{t.about.stat3v}</span>
                                <span className="stat-label">{t.about.stat3l}</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ ...smoothTransition, delay: 0.3 }}
                    >
                        <div className="profile-card">
                            <div className="profile-image-container">
                                <img src={profileImage} alt="Profile" className="profile-photo" />
                            </div>
                            <div className="profile-info">
                                <h3>Dionathan Boing</h3>
                                <p>{t.about.role}</p>
                            </div>
                        </div>

                        <div className="decoration-blur blur-1"></div>
                        <div className="decoration-blur blur-2"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
