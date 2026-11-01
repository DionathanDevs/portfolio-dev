import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Linkedin, Mail, BookOpen, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './Header.css';

const Header = () => {
    const { t, lang, toggleLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isBlogRoute = location.pathname.startsWith('/blog');

    const handleSectionNavigation = (e, sectionId) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`header ${isBlogRoute ? 'header-blog-active' : ''}`}>
            <div className="header-container">
                <div className="header-brand-group">
                    <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
                        <span className="logo-dot"></span>
                        boing.
                    </Link>
                    {isBlogRoute && (
                        <Link to="/blog" className="logo-module-badge" onClick={() => setMobileMenuOpen(false)}>
                            /blog
                        </Link>
                    )}
                </div>

                <nav className="nav-links" aria-label="Main Navigation">
                    <a href="#about" onClick={(e) => handleSectionNavigation(e, 'about')}>{t.nav.about}</a>
                    <a href="#stacks" onClick={(e) => handleSectionNavigation(e, 'stacks')}>{t.nav.stacks}</a>
                    <a href="#experience" onClick={(e) => handleSectionNavigation(e, 'experience')}>{t.nav.experience}</a>
                    <a href="#projects" onClick={(e) => handleSectionNavigation(e, 'projects')}>{t.nav.projects}</a>
                    <Link
                        to="/blog"
                        className={`nav-blog-pill ${isBlogRoute ? 'active' : ''}`}
                    >
                        <BookOpen size={14} />
                        <span>{t.nav.blog}</span>
                    </Link>
                </nav>

                <div className="social-links">
                    <button
                        className="lang-toggle"
                        onClick={toggleLanguage}
                        aria-label="Toggle Language"
                        title={`Switch to ${lang === 'pt' ? 'English' : 'Portuguese'}`}
                    >
                        <span className="lang-label">{lang === 'pt' ? '🇺🇸 EN' : '🇧🇷 PT'}</span>
                    </button>

                    <div className="social-divider" />

                    <a href="https://github.com/DionathanDevs" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><Github size={18} /></a>
                    <a href="https://www.linkedin.com/in/dionathan-boing/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><Linkedin size={18} /></a>
                    <a href="mailto:dionathandev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Send Email"><Mail size={18} /></a>

                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="mobile-nav-drawer">
                    <a href="#about" onClick={(e) => handleSectionNavigation(e, 'about')}>{t.nav.about}</a>
                    <a href="#stacks" onClick={(e) => handleSectionNavigation(e, 'stacks')}>{t.nav.stacks}</a>
                    <a href="#experience" onClick={(e) => handleSectionNavigation(e, 'experience')}>{t.nav.experience}</a>
                    <a href="#projects" onClick={(e) => handleSectionNavigation(e, 'projects')}>{t.nav.projects}</a>
                    <Link
                        to="/blog"
                        className={`mobile-blog-link ${isBlogRoute ? 'active' : ''}`}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <BookOpen size={16} />
                        <span>{t.nav.blog}</span>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
