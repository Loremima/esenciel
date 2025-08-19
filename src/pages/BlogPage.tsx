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
      author: 'Véronique Carrie',
      category: 'Pleine Conscience',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      tags: ['mindfulness', 'stress', 'bien-être']
    },
    {
      id: 2,
      title: 'Comment devenir acteur de sa santé ?',
      excerpt: 'Explorez les clés pour reprendre le contrôle de votre bien-être et développer votre autonomie en santé.',
      date: '8 Mars 2024',
      author: 'Véronique Carrie',
      category: 'Santé',
      image: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg',
      tags: ['santé', 'autonomie', 'prévention']
    },
    {
      id: 3,
      title: 'Le Jeu du Tao : explorer son potentiel par le jeu',
      excerpt: 'Une approche ludique du développement personnel qui révèle vos ressources cachées.',
      date: '1er Mars 2024',
      author: 'Véronique Carrie',
      category: 'Développement Personnel',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      tags: ['créativité', 'jeu', 'potentiel']
    },
    {
      id: 4,
      title: 'MBSR : 8 semaines pour transformer sa vie',
      excerpt: 'Retour d\'expérience sur les programmes MBSR et leurs effets durables sur le bien-être.',
      date: '22 Février 2024',
      author: 'Véronique Carrie',
      category: 'MBSR',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      tags: ['MBSR', 'programme', 'transformation']
    },
    {
      id: 5,
      title: 'Neuroplasticité et méditation : ce que dit la science',
      excerpt: 'Les découvertes neuroscientifiques sur les effets de la méditation sur notre cerveau.',
      date: '14 Février 2024',
      author: 'Véronique Carrie',
      category: 'Neurosciences',
      image: 'https://images.pexels.com/photos/3760627/pexels-photo-3760627.jpeg',
      tags: ['neurosciences', 'méditation', 'recherche']
    },
    {
      id: 6,
      title: 'Cultiver la bienveillance envers soi-même',
      excerpt: 'Apprenez à développer une relation plus douce et compassionnelle avec vous-même.',
      date: '7 Février 2024',
      author: 'Véronique Carrie',
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
      {/* Hero Section */}
      <section className="hero-blog">
        <div className="container">
          <div className="hero-content">
            <h1>Blog</h1>
            <p className="hero-subtitle">
              Conseils, réflexions et actualités autour du bien-être et de la pleine conscience
            </p>
          </div>
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
      <section className="section articles-section">
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

      {/* Newsletter */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <h2>Restez informé(e)</h2>
            <p>
              Recevez mes derniers articles et conseils bien-être directement dans votre boîte mail
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">
                S'abonner
              </button>
            </form>
            <p className="newsletter-note">
              Pas de spam, désinscription à tout moment. Conformité RGPD garantie.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-page {
          padding-top: 80px;
        }

        .hero-blog {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          padding: var(--spacing-16) 0;
          text-align: center;
        }

        .hero-content h1 {
          color: var(--color-primary);
          margin-bottom: var(--spacing-4);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: var(--color-gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .filters-section {
          background: var(--color-white);
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
          color: var(--color-white);
        }

        .articles-section {
          background: var(--color-gray-50);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-8);
        }

        .article-card {
          background: var(--color-white);
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
          color: var(--color-white);
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

        .newsletter-section {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
          color: var(--color-white);
        }

        .newsletter-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-2xl);
          padding: var(--spacing-10);
          text-align: center;
          backdrop-filter: blur(10px);
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter-card h2 {
          color: var(--color-secondary);
          margin-bottom: var(--spacing-4);
        }

        .newsletter-card p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: var(--spacing-6);
          font-size: 1.1rem;
        }

        .newsletter-form {
          display: flex;
          gap: var(--spacing-3);
          margin-bottom: var(--spacing-4);
        }

        .newsletter-input {
          flex: 1;
          padding: var(--spacing-3);
          border: none;
          border-radius: var(--radius-lg);
          font-size: 1rem;
          background: var(--color-white);
          color: var(--color-gray-800);
        }

        .newsletter-input:focus {
          outline: 2px solid var(--color-secondary);
        }

        .newsletter-note {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-card {
            padding: var(--spacing-6);
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