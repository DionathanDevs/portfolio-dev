import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    Calendar,
    Terminal,
    Copy,
    Check,
    Share2,
    Sparkles,
    Info,
    AlertTriangle,
    Heart,
    ListTree,
    Tag
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/images/profile.jpeg';
import './Blog.css';

const smoothTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };
const CATEGORY_KEYS = ['all', 'architecture', 'ai', 'backend', 'frontend', 'career'];

const CodeBlock = ({ language, filename, code, copyLabel, copiedLabel }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Fallback ignored if clipboard blocked
        }
    };

    return (
        <div className="blog-code-block">
            <div className="blog-code-header">
                <div className="blog-code-meta">
                    <span className="code-dots">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                    </span>
                    <span className="blog-code-filename">{filename || language}</span>
                </div>
                <div className="blog-code-actions">
                    <span className="blog-code-lang">{language}</span>
                    <button type="button" className="blog-code-copy-btn" onClick={handleCopy}>
                        {copied ? <Check size={13} /> : <Copy size={13} />}
                        <span>{copied ? copiedLabel : copyLabel}</span>
                    </button>
                </div>
            </div>
            <pre className="blog-code-pre">
                <code>{code}</code>
            </pre>
        </div>
    );
};

const CalloutBox = ({ variant = 'info', title, text }) => {
    const IconComponent = variant === 'warning' ? AlertTriangle : variant === 'tip' ? Sparkles : Info;
    return (
        <div className={`blog-callout blog-callout-${variant}`}>
            <div className="blog-callout-icon">
                <IconComponent size={18} />
            </div>
            <div className="blog-callout-body">
                {title && <h4 className="blog-callout-title">{title}</h4>}
                <p className="blog-callout-text">{text}</p>
            </div>
        </div>
    );
};

const BlogPostArticle = ({ post, prevPost, nextPost, t, navigate }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSectionId, setActiveSectionId] = useState(() => post.sections?.[0]?.id || '');
    const [linkCopied, setLinkCopied] = useState(false);
    const [claps, setClaps] = useState(() => Number(localStorage.getItem(`blog-claps-${post.slug}`) || 12));
    const [hasClapped, setHasClapped] = useState(() => localStorage.getItem(`blog-clapped-${post.slug}`) === 'true');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post.slug]);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight > 0) {
                const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
                setScrollProgress(progress);
            }

            if (post?.sections?.length) {
                let currentId = post.sections[0].id;
                for (const section of post.sections) {
                    const el = document.getElementById(section.id);
                    if (el) {
                        const rect = el.getBoundingClientRect();
                        if (rect.top <= 160) {
                            currentId = section.id;
                        }
                    }
                }
                setActiveSectionId(currentId);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [post]);

    const handleScrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 110;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSectionId(sectionId);
        }
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        } catch {
            // Ignore clipboard errors
        }
    };

    const handleClap = () => {
        const nextClaps = claps + 1;
        setClaps(nextClaps);
        setHasClapped(true);
        localStorage.setItem(`blog-claps-${post.slug}`, String(nextClaps));
        localStorage.setItem(`blog-clapped-${post.slug}`, 'true');
    };

    return (
        <div className="blog-page blog-post-page">
            {/* Reading Progress Bar */}
            <div className="blog-reading-progress-track">
                <div
                    className="blog-reading-progress-bar"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Dedicated Blog Module Sub-Menu Bar */}
            <div className="blog-module-menubar">
                <div className="container blog-menubar-inner">
                    <div className="blog-menubar-left">
                        <Link to="/blog" className="blog-menubar-back">
                            <ArrowLeft size={14} />
                            <span>{t.blog.backToBlog}</span>
                        </Link>
                        <span className="blog-menubar-divider">/</span>
                        <span className="blog-terminal-path">
                            <Terminal size={14} />
                            {t.blog.terminalPath}/{post.category}
                        </span>
                    </div>

                    <nav className="blog-categories-menu" aria-label="Blog Categories Menu">
                        {CATEGORY_KEYS.map((catKey) => (
                            <button
                                key={catKey}
                                type="button"
                                className={`blog-menu-tab ${post.category === catKey ? 'active' : ''}`}
                                onClick={() => navigate(catKey === 'all' ? '/blog' : `/blog?category=${catKey}`)}
                            >
                                <span>{t.blog.categories[catKey]}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <article className="container blog-article-container">
                {/* Article Header */}
                <Motion.header
                    className="blog-article-header"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                >
                    <div className="blog-article-meta-top">
                        <Link
                            to={`/blog?category=${post.category}`}
                            className="blog-category-pill"
                        >
                            {post.categoryLabel}
                        </Link>
                        <span className="blog-article-date">
                            <Calendar size={14} />
                            {post.displayDate}
                        </span>
                        <span className="blog-article-readtime">
                            <Clock size={14} />
                            {post.readingTime} {t.blog.minRead}
                        </span>
                    </div>

                    <h1 className="blog-article-title">{post.title}</h1>
                    <p className="blog-article-lead">{post.excerpt}</p>

                    <div className="blog-author-bar">
                        <div className="blog-author-info">
                            <img src={profileImg} alt="Dionathan Boing" className="blog-author-avatar" />
                            <div>
                                <div className="blog-author-name">Dionathan Boing</div>
                                <div className="blog-author-role">{t.blog.authorRole}</div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="blog-share-pill"
                            onClick={handleCopyLink}
                        >
                            {linkCopied ? <Check size={14} /> : <Share2 size={14} />}
                            <span>{linkCopied ? t.blog.linkCopied : t.blog.copyLink}</span>
                        </button>
                    </div>
                </Motion.header>

                {/* Article Content + Sticky Sidebar Grid */}
                <div className="blog-article-grid">
                    <Motion.div
                        className="blog-article-body"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.12 }}
                    >
                        {post.sections.map((section) => (
                            <section key={section.id} id={section.id} className="blog-content-section">
                                <h2 className="blog-section-heading">
                                    <a
                                        href={`#${section.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleScrollToSection(section.id);
                                        }}
                                        className="blog-heading-anchor"
                                    >
                                        #
                                    </a>
                                    {section.title}
                                </h2>

                                {section.blocks.map((block, bIdx) => {
                                    if (block.type === 'paragraph') {
                                        return (
                                            <p key={bIdx} className="blog-paragraph">
                                                {block.text}
                                            </p>
                                        );
                                    }
                                    if (block.type === 'code') {
                                        return (
                                            <CodeBlock
                                                key={bIdx}
                                                language={block.language}
                                                filename={block.filename}
                                                code={block.code}
                                                copyLabel={t.blog.copyCode}
                                                copiedLabel={t.blog.codeCopied}
                                            />
                                        );
                                    }
                                    if (block.type === 'callout') {
                                        return (
                                            <CalloutBox
                                                key={bIdx}
                                                variant={block.variant}
                                                title={block.title}
                                                text={block.text}
                                            />
                                        );
                                    }
                                    if (block.type === 'list') {
                                        return (
                                            <ul key={bIdx} className="blog-bullet-list">
                                                {block.items.map((item, iIdx) => (
                                                    <li key={iIdx}>{item}</li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    if (block.type === 'quote') {
                                        return (
                                            <blockquote key={bIdx} className="blog-blockquote">
                                                <p>“{block.text}”</p>
                                            </blockquote>
                                        );
                                    }
                                    return null;
                                })}
                            </section>
                        ))}

                        {/* Interactive Post Footer (Applause + Share) */}
                        <div className="blog-engagement-card">
                            <div className="blog-engagement-left">
                                <h4>{t.blog.helpfulPrompt}</h4>
                                <p>{t.blog.helpfulSub}</p>
                            </div>
                            <div className="blog-engagement-actions">
                                <button
                                    type="button"
                                    className={`blog-clap-btn ${hasClapped ? 'clapped' : ''}`}
                                    onClick={handleClap}
                                >
                                    <Heart size={16} />
                                    <span>{claps}</span>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline"
                                    onClick={handleCopyLink}
                                >
                                    {linkCopied ? <Check size={15} /> : <Share2 size={15} />}
                                    <span>{linkCopied ? t.blog.linkCopied : t.blog.copyLink}</span>
                                </button>
                            </div>
                        </div>

                        {/* Prev / Next Navigation */}
                        <nav className="blog-post-pagination" aria-label="Article Pagination">
                            {prevPost ? (
                                <Link to={`/blog/${prevPost.slug}`} className="blog-pagination-card prev">
                                    <span className="pagination-label">
                                        <ArrowLeft size={14} />
                                        {t.blog.prevPost}
                                    </span>
                                    <span className="pagination-title">{prevPost.title}</span>
                                </Link>
                            ) : <div />}

                            {nextPost ? (
                                <Link to={`/blog/${nextPost.slug}`} className="blog-pagination-card next">
                                    <span className="pagination-label">
                                        {t.blog.nextPost}
                                        <ArrowRight size={14} />
                                    </span>
                                    <span className="pagination-title">{nextPost.title}</span>
                                </Link>
                            ) : <div />}
                        </nav>
                    </Motion.div>

                    {/* Sticky Sidebar Menu (Table of Contents + Tags) */}
                    <aside className="blog-article-sidebar">
                        <div className="blog-sidebar-sticky">
                            <div className="blog-sidebar-card">
                                <h4 className="blog-sidebar-heading">
                                    <ListTree size={15} />
                                    <span>{t.blog.tocTitle}</span>
                                </h4>
                                <nav className="blog-toc-nav" aria-label="Table of Contents">
                                    {post.sections.map((sec) => (
                                        <button
                                            key={sec.id}
                                            type="button"
                                            className={`blog-toc-link ${activeSectionId === sec.id ? 'active' : ''}`}
                                            onClick={() => handleScrollToSection(sec.id)}
                                        >
                                            {sec.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            <div className="blog-sidebar-card">
                                <h4 className="blog-sidebar-heading">
                                    <Tag size={15} />
                                    <span>{t.blog.tagsTitle}</span>
                                </h4>
                                <div className="blog-sidebar-tags">
                                    {post.tags.map((tag) => (
                                        <Link
                                            key={tag}
                                            to={`/blog?tag=${encodeURIComponent(tag)}`}
                                            className="blog-tag-chip clickable"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </article>
        </div>
    );
};

const BlogPost = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { t, blogPosts } = useLanguage();

    const postIndex = useMemo(
        () => blogPosts.findIndex((p) => p.slug === slug),
        [blogPosts, slug]
    );
    const post = postIndex !== -1 ? blogPosts[postIndex] : null;
    const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
    const nextPost = postIndex !== -1 && postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

    if (!post) {
        return (
            <div className="blog-page">
                <div className="container" style={{ paddingTop: '120px', textAlign: 'center', minHeight: '70vh' }}>
                    <h2 style={{ marginBottom: '1rem' }}>{t.blog.notFoundTitle}</h2>
                    <p style={{ color: 'var(--foreground-muted)', marginBottom: '2rem' }}>{t.blog.notFoundDesc}</p>
                    <Link to="/blog" className="btn btn-outline">
                        <ArrowLeft size={16} />
                        {t.blog.backToBlog}
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <BlogPostArticle
            key={post.slug}
            post={post}
            prevPost={prevPost}
            nextPost={nextPost}
            t={t}
            navigate={navigate}
        />
    );
};

export default BlogPost;
