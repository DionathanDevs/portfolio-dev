import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './Experience.css';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

const Experience = () => {
    const { t, experienceData } = useLanguage();

    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={smoothTransition}
                >
                    <span className="section-label">{t.experience.label}</span>
                    <h2 className="section-title left-align">{t.experience.title}</h2>
                    <p className="section-desc">{t.experience.desc}</p>
                </motion.div>

                <div className="experience-list">
                    {experienceData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="experience-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ ...smoothTransition, delay: index * 0.15 }}
                        >
                            <div className="exp-meta">
                                <span className="exp-period">{item.period}</span>
                            </div>
                            <div className="exp-content">
                                <h3 className="exp-role">{item.role}</h3>
                                <h4 className="exp-company">{item.company}</h4>
                                <p className="exp-desc">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
