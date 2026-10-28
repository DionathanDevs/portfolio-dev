import { motion } from 'framer-motion';
import { Database, Layout, Server, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Stacks.css';

const getStackData = (lang) => [
    {
        category: "Front-end",
        icon: <Layout size={20} className="stack-icon" />,
        skills: ["TypeScript", "Angular", "JavaScript", "HTML & CSS", "Bootstrap & jQuery"]
    },
    {
        category: "Back-end",
        icon: <Server size={20} className="stack-icon" />,
        skills: ["Node.js", "Java", "APIs REST", "BullMQ"]
    },
    {
        category: lang === 'pt' ? "Dados & ERPs" : "Data & ERPs",
        icon: <Database size={20} className="stack-icon" />,
        skills: ["MySQL, MongoDB & Redis", "SAP & Pirâmide", "TOTVS RM & Protheus"]
    },
    {
        category: lang === 'pt' ? "Infra, DevOps & IA" : "Infra, DevOps & AI",
        icon: <Terminal size={20} className="stack-icon" />,
        skills: [
            "Docker & Docker Compose",
            "Git, Jenkins & GitHub Actions",
            "Azure DevOps & Postman",
            lang === 'pt' ? "Dev Assistido por IA & Code Review" : "AI-Assisted Dev & Code Review"
        ]
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
    const { t, lang } = useLanguage();
    const stackData = getStackData(lang);

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
