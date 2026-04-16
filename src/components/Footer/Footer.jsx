import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const smoothTransition = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <p className="logo">
                        <span className="logo-dot"></span>
                        boing.
                    </p>
                    <p className="footer-text">{t.footer.desc}</p>
                </div>
                <div className="footer-right">
                    <div className="social-links footer-socials">
                        <a href="https://github.com/DionathanDevs" target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
                        <a href="https://www.linkedin.com/in/dionathan-boing/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
                        <a href="mailto:dionathandev@gmail.com" target="_blank" rel="noopener noreferrer"><Mail size={18} /></a>
                    </div>
                    <p className="copyright">© {new Date().getFullYear()} {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
