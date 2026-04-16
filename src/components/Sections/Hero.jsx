import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Hero.css';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="hero" id="home">
            <div className="hero-background"></div>
            <div className="premium-glow"></div>

            {/* Realistic Rain on Glass */}
            <div className="window-glass">
                <div className="rain-pane">
                    <div className="water-drop drop-1"></div>
                    <div className="water-drop drop-2"></div>
                    <div className="water-drop drop-3"></div>
                    <div className="water-drop drop-4"></div>
                    <div className="water-drop drop-5"></div>
                    <div className="water-drop drop-6"></div>
                    <div className="water-drop drop-7"></div>
                    <div className="water-drop drop-8"></div>
                    <div className="water-drop drop-9"></div>
                    <div className="water-drop drop-10"></div>
                    <div className="water-drop drop-11"></div>
                    <div className="water-drop drop-12"></div>
                    <div className="water-drop drop-13"></div>
                    <div className="water-drop drop-14"></div>
                    <div className="water-drop drop-15"></div>
                </div>
            </div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                >
                    <motion.h1
                        className="name"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.5 }}
                    >
                        <span className="title-main">{t.hero.title1}</span>
                        <span className="title-reflection">{t.hero.title2}</span>
                    </motion.h1>

                    <motion.p
                        className="description"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.7 }}
                    >
                        {t.hero.desc}
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.9 }}
                    >
                        <a href="#projects" className="btn btn-primary btn-lg">
                            {t.hero.btnProjects}
                        </a>
                        <a href="/curriculo.pdf" download className="btn btn-outline btn-lg">
                            <Download size={16} style={{ marginRight: '6px' }} />
                            {t.hero.btnResume}
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothTransition, delay: 1.5 }}
            >
                <a href="#about" aria-label="Scroll down">
                    <ChevronDown size={28} className="bounce-arrow" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
