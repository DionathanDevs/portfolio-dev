import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Stacks.css';

const stackData = [
    {
        category: "Frontend",
        icon: <Layout size={20} className="stack-icon" />,
        skills: ["JavaScript", "React.js", "Tailwind CSS", "Bootstrap"]
    },
    {
        category: "Backend",
        icon: <Server size={20} className="stack-icon" />,
        skills: ["Node.js", "Java", "BullMQ", "REST APIs"]
    },
    {
        category: "Database",
        icon: <Database size={20} className="stack-icon" />,
        skills: ["MySQL", "MongoDB", "Redis"]
    },
    {
        category: "DevOps",
        icon: <Terminal size={20} className="stack-icon" />,
        skills: ["Git", "Docker", "Linux"]
    }
];

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: smoothTransition
    }
};

const Stacks = () => {
    const { t } = useLanguage();

    return (
        <section className="section stacks-section" id="stacks">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={smoothTransition}
                >
                    <span className="section-label">{t.stacks.label}</span>
                    <h2 className="section-title left-align">{t.stacks.title}</h2>
                    <p className="section-desc">{t.stacks.desc}</p>
                </motion.div>

                <motion.div
                    className="stacks-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {stackData.map((stack, index) => (
                        <motion.div
                            key={index}
                            className="stack-card"
                            variants={itemVariants}
                        >
                            <div className="stack-card-header">
                                <div className="icon-wrapper">
                                    {stack.icon}
                                </div>
                                <h3>{stack.category}</h3>
                            </div>

                            <ul className="skill-list">
                                {stack.skills.map((skill, i) => (
                                    <li key={i} className="skill-item">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stacks;
