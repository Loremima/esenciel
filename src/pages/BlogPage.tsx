import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Les bienfaits de la pleine conscience sur le stress',
      excerpt: 'Découvrez comment la pratique de la mindfulness peut transformer votre relation au stress au quotidien.',
      date: '15 Mars 2024',
      author: 'Véronique Carrié',
      category: 'Pleine Conscience',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      tags: ['mindfulness', 'stress', 'bien-être']
    },
    {
      id: 2,
      title: 'Comment devenir acteur de sa santé ?',
      excerpt: 'Explorez les clés pour reprendre le contrôle de votre bien-être et développer votre autonomie en santé.',
      date: '8 Mars 2024',
      author: 'Véronique Carrié',
      category: 'Santé',
      image: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg',
      tags: ['santé', 'autonomie', 'prévention']
    },
    {
      id: 3,
      title: 'Le Jeu du Tao : explorer son potentiel par le jeu',
      excerpt: 'Une approche ludique du développement personnel qui révèle vos ressources cachées.',
      date: '1er Mars 2024',
      author: 'Véronique Carrié',
      category: 'Développement Personnel',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tags: ['créativité', 'jeu', 'potentiel']
    },
    {
      id: 4,
      title: 'MBSR : 8 semaines pour transformer sa vie',
      excerpt: 'Retour d\'expérience sur les programmes MBSR et leurs effets durables sur le bien-être.',
      date: '22 Février 2024',
      author: 'Véronique Carrié',
      category: 'MBSR',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      tags: ['MBSR', 'programme', 'transformation']
    },
    {
      id: 5,
      title: 'Neuroplasticité et méditation : ce que dit la science',
      excerpt: 'Les découvertes neuroscientifiques sur les effets de la méditation sur notre cerveau.',
      date: '14 Février 2024',
      author: 'Véronique Carrié',
      category: 'Neurosciences',
      image: 'https://images.pexels.com/photos/3760627/pexels-photo-3760627.jpeg',
      tags: ['neurosciences', 'méditation', 'recherche']
    },
    {
      id: 6,
      title: 'Cultiver la bienveillance envers soi-même',
      excerpt: 'Apprenez à développer une relation plus douce et compassionnelle avec vous-même.',
      date: '7 Février 2024',
      author: 'Véronique Carrié',
      category: 'Bien-être',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg',
      tags: ['bienveillance', 'estime de soi', 'compassion']
    }
  ];

  const categories = ['Tous', 'Pleine Conscience', 'Santé', 'Développement Personnel', 'MBSR', 'Neurosciences', 'Bien-être'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tous');

  const filteredPosts = selectedCategory === 'Tous'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      {/* Hero Section avec vidéo de fond */}
      <section className="hero-blog">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/background.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Paysage serein - MindWayLife"
          />
        </video>

        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="hero-content">
          <h1>Blog</h1>
          <p className="hero-subtitle">
            Conseils, réflexions et actualités autour du bien-être et de la pleine conscience
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="section filters-section">
        <div className="container">
          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section articles-section parallax-surface">
        <div className="container">
          <div className="articles-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="article-card">
                <div className="article-image">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div className="article-category">{post.category}</div>
                </div>

                <div className="article-content">
                  <div className="article-meta">
                    <div className="meta-item">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="meta-item">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="article-title">{post.title}</h3>
                  <p className="article-excerpt">{post.excerpt}</p>

                  <div className="article-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to={`/blog/${post.id}`} className="article-link">
                    Lire l'article
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      <style jsx>{`
        .blog-page {
          padding-top: 0;
        }

        /* === HERO SECTION AVEC VIDÉO === */
        .hero-blog {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: -2;
        }

        .hero-video img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: -1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fffcea;
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-content h1 {
          font-size: clamp(3rem, 8vw, 5rem);
          line-height: 1.1;
          color: #fffcea;
          font-weight: 700;
          text-shadow: 0 4px 20px rgba(0,0,0,0.4);
          margin: 0 0 var(--spacing-6) 0;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.6rem);
          color: rgba(255, 252, 234, 0.9);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          letter-spacing: 0.025em;
        }

        /* Container défini dans globals.css */

        .section {
          padding: var(--spacing-16) 0;
        }

        .filters-section {
          background: #fffcea;
          padding: var(--spacing-8) 0;
        }

        .filters {
          display: flex;
          justify-content: center;
          gap: var(--spacing-2);
          flex-wrap: wrap;
        }

        .filter-btn {
          background: transparent;
          border: 2px solid var(--color-gray-300);
          color: var(--color-gray-700);
          padding: var(--spacing-2) var(--spacing-4);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all var(--transition-fast);
          font-weight: 500;
        }

        .filter-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }

        .filter-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: #fffcea;
        }

        .articles-section {
          background: var(--color-gray-50);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-6);
        }

        .article-card {
          background: #fffcea;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          transition: all var(--transition-normal);
        }

        .article-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .article-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .article-card:hover .article-image img {
          transform: scale(1.05);
        }

        .article-category {
          position: absolute;
          top: var(--spacing-3);
          left: var(--spacing-3);
          background: var(--color-secondary);
          color: #fffcea;
          padding: var(--spacing-1) var(--spacing-3);
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .article-content {
          padding: var(--spacing-6);
        }

        .article-meta {
          display: flex;
          gap: var(--spacing-4);
          margin-bottom: var(--spacing-4);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          font-size: 0.85rem;
          color: var(--color-gray-600);
        }

        .article-title {
          margin-bottom: var(--spacing-3);
          color: var(--color-primary);
          line-height: 1.3;
        }

        .article-excerpt {
          color: var(--color-gray-700);
          line-height: 1.6;
          margin-bottom: var(--spacing-4);
        }

        .article-tags {
          display: flex;
          gap: var(--spacing-2);
          margin-bottom: var(--spacing-4);
          flex-wrap: wrap;
        }

        .tag {
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
          background: rgba(85, 107, 47, 0.1);
          color: var(--color-primary);
          padding: var(--spacing-1) var(--spacing-2);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .article-link {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-2);
          color: var(--color-secondary);
          text-decoration: none;
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .article-link:hover {
          gap: var(--spacing-3);
        }

        @media (max-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-4);
          }
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }

          .filters {
            gap: var(--spacing-1);
          }

          .filter-btn {
            padding: var(--spacing-2) var(--spacing-3);
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;