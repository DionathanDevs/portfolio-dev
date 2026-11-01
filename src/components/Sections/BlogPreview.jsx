import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import './BlogPreview.css';

const smoothTransition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

const BlogPreview = () => {
    const { t, blogPosts } = useLanguage();
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section className="section blog-preview-section" id="blog-preview">
            <div className="container">
                <div className="blog-preview-header">
                    <Motion.div
                        className="section-header"
                        style={{ marginBottom: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={smoothTransition}
                    >
                        <span className="section-label">{t.blog.homeSection.label}</span>
                        <h2 className="section-title left-align">{t.blog.homeSection.title}</h2>
                        <p className="section-desc">{t.blog.homeSection.desc}</p>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ ...smoothTransition, delay: 0.15 }}
                    >
                        <Link to="/blog" className="btn btn-outline">
                            <span>{t.blog.homeSection.viewAll}</span>
                            <ArrowRight size={16} />
                        </Link>
                    </Motion.div>
                </div>

                <div className="blog-preview-grid">
                    {recentPosts.map((post, idx) => (
                        <Motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ ...smoothTransition, delay: idx * 0.12 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="blog-preview-card">
                                <div className="blog-preview-meta">
                                    <span className="blog-preview-category">{post.categoryLabel}</span>
                                    <span className="blog-preview-date">
                                        <Calendar size={12} />
                                        {post.displayDate}
                                    </span>
                                </div>

                                <h3 className="blog-preview-title">{post.title}</h3>
                                <p className="blog-preview-excerpt">{post.excerpt}</p>

                                <div className="blog-preview-footer">
                                    <span className="blog-preview-readtime">
                                        <Clock size={13} />
                                        {post.readingTime} {t.blog.minRead}
                                    </span>
                                    <span className="blog-preview-cta">
                                        {t.blog.readArticle}
                                        <ArrowUpRight size={15} />
                                    </span>
                                </div>
                            </Link>
                        </Motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
