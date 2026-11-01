import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import {
    Terminal,
    Search,
    X,
    Clock,
    Calendar,
    ArrowUpRight,
    Sparkles,
    LayoutList,
    LayoutGrid,
    Tag,
    ArrowLeft
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Blog.css';

const smoothTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] };

const CATEGORY_KEYS = ['all', 'architecture', 'ai', 'backend', 'frontend', 'career'];

const Blog = () => {
    const { t, blogPosts } = useLanguage();
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category');
    const activeCategory = CATEGORY_KEYS.includes(categoryFromUrl) ? categoryFromUrl : 'all';
    const [searchQuery, setSearchQuery] = useState(() => searchParams.get('tag') || '');
    const [viewMode, setViewMode] = useState('list');
    const searchInputRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === '/' && document.activeElement !== searchInputRef.current) {
                const tag = document.activeElement?.tagName?.toLowerCase();
                if (tag !== 'input' && tag !== 'textarea') {
                    e.preventDefault();
                    searchInputRef.current?.focus();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleCategorySelect = (catKey) => {
        const nextParams = {};
        if (catKey !== 'all') nextParams.category = catKey;
        if (searchQuery.trim()) nextParams.tag = searchQuery.trim();
        setSearchParams(nextParams, { replace: true });
    };

    const handleSearchChange = (value) => {
        setSearchQuery(value);
        const nextParams = {};
        if (activeCategory !== 'all') nextParams.category = activeCategory;
        if (value.trim()) nextParams.tag = value.trim();
        setSearchParams(nextParams, { replace: true });
    };

    const handleResetFilters = () => {
        setSearchQuery('');
        setSearchParams({}, { replace: true });
    };

    const categoryCounts = useMemo(() => {
        const counts = { all: blogPosts.length };
        CATEGORY_KEYS.slice(1).forEach((key) => {
            counts[key] = blogPosts.filter((p) => p.category === key).length;
        });
        return counts;
    }, [blogPosts]);

    const featuredPost = useMemo(
        () => blogPosts.find((post) => post.featured) || blogPosts[0],
        [blogPosts]
    );

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
            const q = searchQuery.trim().toLowerCase();
            if (!q) return matchesCategory;

            const matchesTitle = post.title.toLowerCase().includes(q);
            const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
            const matchesTags = post.tags.some((tag) => tag.toLowerCase().includes(q));
            const matchesCategoryLabel = post.categoryLabel.toLowerCase().includes(q);

            return matchesCategory && (matchesTitle || matchesExcerpt || matchesTags || matchesCategoryLabel);
        });
    }, [blogPosts, activeCategory, searchQuery]);

    const showFeaturedSpotlight = activeCategory === 'all' && !searchQuery.trim() && featuredPost;

    return (
        <div className="blog-page">
            <div className="ambient-glow" />

            {/* Dedicated Blog Module Sub-Menu Bar */}
            <div className="blog-module-menubar">
                <div className="container blog-menubar-inner">
                    <div className="blog-menubar-left">
                        <Link to="/" className="blog-menubar-back">
                            <ArrowLeft size={14} />
                            <span>{t.blog.backToPortfolio}</span>
                        </Link>
                        <span className="blog-menubar-divider">/</span>
                        <span className="blog-terminal-path">
                            <Terminal size={14} />
                            {t.blog.terminalPath}
                        </span>
                    </div>

                    <nav className="blog-categories-menu" aria-label="Blog Categories Menu">
                        {CATEGORY_KEYS.map((catKey) => (
                            <button
                                key={catKey}
                                type="button"
                                className={`blog-menu-tab ${activeCategory === catKey ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(catKey)}
                            >
                                <span>{t.blog.categories[catKey]}</span>
                                <span className="blog-menu-count">{categoryCounts[catKey]}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="container">
                {/* Hero Header */}
                <Motion.header
                    className="blog-hero"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={smoothTransition}
                >
                    <span className="section-label">{t.blog.badge}</span>
                    <h1 className="blog-main-title">{t.blog.title}</h1>
                    <p className="blog-subtitle">{t.blog.subtitle}</p>
                </Motion.header>

                {/* Featured Post Spotlight */}
                {showFeaturedSpotlight && (
                    <Motion.section
                        className="blog-featured-section"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.1 }}
                    >
                        <Link to={`/blog/${featuredPost.slug}`} className="blog-featured-card">
                            <div className="blog-featured-glow" />
                            <div className="blog-featured-top">
                                <span className="blog-featured-badge">
                                    <Sparkles size={13} />
                                    {t.blog.featuredBadge}
                                </span>
                                <span className="blog-category-pill">{featuredPost.categoryLabel}</span>
                                <div className="blog-meta-inline">
                                    <span>
                                        <Calendar size={13} />
                                        {featuredPost.displayDate}
                                    </span>
                                    <span>•</span>
                                    <span>
                                        <Clock size={13} />
                                        {featuredPost.readingTime} {t.blog.minRead}
                                    </span>
                                </div>
                            </div>

                            <h2 className="blog-featured-title">{featuredPost.title}</h2>
                            <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>

                            <div className="blog-featured-footer">
                                <div className="blog-tags-row">
                                    {featuredPost.tags.map((tag) => (
                                        <span key={tag} className="blog-tag-chip">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="blog-read-cta">
                                    {t.blog.readArticle}
                                    <ArrowUpRight size={16} />
                                </span>
                            </div>
                        </Link>
                    </Motion.section>
                )}

                {/* Search & View Controls Bar */}
                <Motion.div
                    className="blog-toolbar"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...smoothTransition, delay: 0.15 }}
                >
                    <div className="blog-search-wrapper">
                        <Search size={16} className="blog-search-icon" />
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="blog-search-input"
                            placeholder={t.blog.searchPlaceholder}
                            value={searchQuery}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            aria-label={t.blog.searchPlaceholder}
                        />
                        {searchQuery ? (
                            <button
                                type="button"
                                className="blog-search-clear"
                                onClick={() => handleSearchChange('')}
                                aria-label={t.blog.clearSearch}
                            >
                                <X size={15} />
                            </button>
                        ) : (
                            <kbd className="blog-search-kbd">{t.blog.searchShortcut}</kbd>
                        )}
                    </div>

                    <div className="blog-toolbar-right">
                        <span className="blog-results-counter">
                            {filteredPosts.length} {searchQuery || activeCategory !== 'all' ? t.blog.filteredCount : t.blog.postsCount}
                        </span>

                        <div className="blog-view-toggle" role="group" aria-label="View Mode">
                            <button
                                type="button"
                                className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                                title={t.blog.viewList}
                            >
                                <LayoutList size={16} />
                                <span>{t.blog.viewList}</span>
                            </button>
                            <button
                                type="button"
                                className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                title={t.blog.viewGrid}
                            >
                                <LayoutGrid size={16} />
                                <span>{t.blog.viewGrid}</span>
                            </button>
                        </div>
                    </div>
                </Motion.div>

                {/* Posts Feed */}
                {filteredPosts.length === 0 ? (
                    <Motion.div
                        className="blog-empty-state"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <h3>{t.blog.emptyTitle}</h3>
                        <p>{t.blog.emptyDesc}</p>
                        <button type="button" className="btn btn-outline" onClick={handleResetFilters}>
                            {t.blog.resetFilters}
                        </button>
                    </Motion.div>
                ) : viewMode === 'list' ? (
                    <Motion.div
                        className="blog-dev-list"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.2 }}
                    >
                        {filteredPosts.map((post, idx) => (
                            <Motion.article
                                key={post.slug}
                                className="blog-list-item"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...smoothTransition, delay: 0.05 * idx }}
                            >
                                <Link to={`/blog/${post.slug}`} className="blog-list-link">
                                    <div className="blog-list-meta-col">
                                        <time className="blog-list-date" dateTime={post.date}>
                                            {post.displayDate}
                                        </time>
                                        <span className="blog-list-reading-time">
                                            <Clock size={12} />
                                            {post.readingTime} {t.blog.minRead}
                                        </span>
                                    </div>

                                    <div className="blog-list-content-col">
                                        <div className="blog-list-header-row">
                                            <span className="blog-category-pill subtle">{post.categoryLabel}</span>
                                        </div>
                                        <h3 className="blog-list-title">{post.title}</h3>
                                        <p className="blog-list-excerpt">{post.excerpt}</p>
                                        <div className="blog-tags-row">
                                            {post.tags.map((tag) => (
                                                <span key={tag} className="blog-tag-chip">
                                                    <Tag size={11} />
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="blog-list-arrow-col">
                                        <span className="blog-arrow-circle">
                                            <ArrowUpRight size={18} />
                                        </span>
                                    </div>
                                </Link>
                            </Motion.article>
                        ))}
                    </Motion.div>
                ) : (
                    <Motion.div
                        className="blog-grid-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...smoothTransition, delay: 0.2 }}
                    >
                        {filteredPosts.map((post, idx) => (
                            <Motion.article
                                key={post.slug}
                                className="blog-grid-card-wrapper"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...smoothTransition, delay: 0.06 * idx }}
                            >
                                <Link to={`/blog/${post.slug}`} className="blog-grid-card">
                                    <div className="blog-grid-card-top">
                                        <span className="blog-category-pill">{post.categoryLabel}</span>
                                        <span className="blog-grid-date">{post.displayDate}</span>
                                    </div>

                                    <h3 className="blog-grid-title">{post.title}</h3>
                                    <p className="blog-grid-excerpt">{post.excerpt}</p>

                                    <div className="blog-grid-footer">
                                        <div className="blog-tags-row">
                                            {post.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} className="blog-tag-chip">#{tag}</span>
                                            ))}
                                        </div>
                                        <span className="blog-grid-readtime">
                                            <Clock size={13} />
                                            {post.readingTime} {t.blog.minRead}
                                        </span>
                                    </div>
                                </Link>
                            </Motion.article>
                        ))}
                    </Motion.div>
                )}
            </div>
        </div>
    );
};

export default Blog;
