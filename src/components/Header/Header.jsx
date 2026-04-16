import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = () => {
    const { t, lang, toggleLanguage } = useLanguage();

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-dot"></span>
                    boing.
                </Link>
                <nav className="nav-links">
                    <a href="/#about">{t.nav.about}</a>
                    <a href="/#stacks">{t.nav.stacks}</a>
                    <a href="/#experience">{t.nav.experience}</a>
                    <a href="/#projects">{t.nav.projects}</a>
                </nav>
                <div className="social-links">
                    <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language" title={`Switch to ${lang === 'pt' ? 'English' : 'Portuguese'}`}>
                        <span className="lang-label">{lang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}</span>
                    </button>

                    <div className="social-divider" />

                    <a href="https://github.com/DionathanDevs" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><Github size={18} /></a>
                    <a href="https://www.linkedin.com/in/dionathan-boing/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><Linkedin size={18} /></a>
                    <a href="mailto:dionathandev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email"><Mail size={18} /></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
