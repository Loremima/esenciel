import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  // Détermine si on doit utiliser le header "light" (texte et logo clairs)
  const pagesWithLightHeader = [
    '/',
    '/qui-suis-je',
    '/services',
    '/blog',
    '/infos-pratiques',
    '/contact-reservation',
    '/accompagnements-individuels',
    '/programmes-pleine-conscience',
    '/interventions-entreprises'
  ];
  const isLightHeaderPage = pagesWithLightHeader.includes(location.pathname);
  const shouldUseLightText = isLightHeaderPage && !isScrolled;

  const navLinks = [
    { path: '/qui-suis-je', label: 'Qui suis-je' },
    {
      label: 'Services',
      submenu: [
        { path: '/services', label: 'Tous les services' },
        { path: '/accompagnements-individuels', label: 'Accompagnements individuels' },
        { path: '/accompagnements-groupe', label: 'Accompagnements groupe' },
        { path: '/programmes-pleine-conscience', label: 'Programmes de pleine conscience' },
        { path: '/interventions-entreprises', label: 'Entreprises & collectivités' },
      ]
    },
    // { path: '/blog', label: 'Blog' },
    { path: '/infos-pratiques', label: 'Infos pratiques' },
    { path: '/contact-reservation', label: 'Contact' },
    { path: 'https://esenciel.setmore.com', label: 'Réserver', isButton: true, isExternal: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''} ${shouldUseLightText ? 'light-text' : 'dark-text'}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <Logo variant="navbar" isScrolled={isScrolled} theme={shouldUseLightText ? 'light' : 'dark'} />
        </Link>
        <div className="nav-right-section">
          <nav className="desktop-nav">
            {navLinks.filter(link => !link.isButton).map((link, index) => (
              <div
                key={index}
                className="nav-item"
                onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
                onMouseLeave={() => {
                  // Délai plus long pour laisser le temps à l'utilisateur
                  if (link.submenu) {
                    setTimeout(() => setOpenSubmenu(null), 300);
                  }
                }}
              >
                {link.submenu ? (
                  <NavLink to="/services" className="nav-link with-submenu">
                    <span>{link.label}</span>
                    <ChevronDown size={16} />
                  </NavLink>
                ) : (
                  <NavLink to={link.path!} className="nav-link">
                    {link.label}
                  </NavLink>
                )}
                {link.submenu && openSubmenu === link.label && (
                  <div
                    className="submenu"
                    onMouseEnter={() => setOpenSubmenu(link.label)}
                    onMouseLeave={() => {
                      // Délai plus long pour laisser le temps à l'utilisateur
                      setTimeout(() => setOpenSubmenu(null), 300);
                    }}
                  >
                    {link.submenu.map((sublink, subIndex) => (
                      <Link key={subIndex} to={sublink.path} className="submenu-link">
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <a
            href="https://esenciel.setmore.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-reserver-header ${!shouldUseLightText ? 'is-beige' : ''}`}
          >
            Réserver
          </a>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-overlay">
          <nav className="mobile-nav">
            <div className="mobile-nav-content">
              {navLinks.map((link, index) => (
                <div key={index} className="mobile-nav-item">
                  {link.submenu ? (
                    <>
                      <div
                        className="mobile-nav-link with-submenu"
                        onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                      >
                        <span>{link.label}</span>
                        <ChevronDown size={20} className={`chevron ${openSubmenu === link.label ? 'open' : ''}`} />
                      </div>
                      {openSubmenu === link.label && (
                        <div className="mobile-submenu">
                          {link.submenu.map((sublink, subIndex) => (
                            <Link key={subIndex} to={sublink.path} className="mobile-submenu-link">
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : link.isButton ? (
                    link.isExternal ? (
                      <a
                        href={link.path!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-nav-link btn-reserver-mobile"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavLink to={link.path!} className="mobile-nav-link btn-reserver-mobile">
                        {link.label}
                      </NavLink>
                    )
                  ) : (
                    <NavLink to={link.path!} className="mobile-nav-link">
                      {link.label}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, 
            rgba(255, 252, 234, 0.3) 0%, 
            rgba(255, 252, 234, 0.1) 50%, 
            rgba(255, 252, 234, 0.0) 100%
          );
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
          padding: 0.35rem 0;
        }

        .header.scrolled {
          background: linear-gradient(135deg, 
            rgba(255, 252, 234, 0.9) 0%, 
            rgba(255, 252, 234, 0.6) 50%, 
            rgba(255, 252, 234, 0.3) 100%
          );
          backdrop-filter: blur(15px);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          padding: 0.35rem 0;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1350px;
          margin: 0 auto;
          padding: 0.5rem 2rem;
        }

        .logo-link { 
          display: flex; 
          align-items: center; 
          gap: 0.75rem; 
          text-decoration: none;
        }
        .brand-name { 
          font-weight: 600;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }
        
        /* Logo beige sur la home page quand on n'a pas scrollé */
        .header.light-text .brand-name { 
          color: #fffcea; 
          text-shadow: 0 1px 3px rgba(0,0,0,0.4); 
        }
        
        /* Logo couleur primaire partout ailleurs */
        .header.dark-text .brand-name { 
          color: var(--color-primary); 
          text-shadow: none; 
        }

        .nav-right-section {
          display: flex;
          align-items: center;
          gap: var(--spacing-6);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: var(--spacing-8);
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        /* Texte beige sur la home page quand on n'a pas scrollé */
        .header.light-text .nav-link {
          color: #fffcea;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        }

        /* Texte noir partout ailleurs (autres pages ou après scroll) */
        .header.dark-text .nav-link {
          color: var(--color-gray-700);
          text-shadow: none;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary);
        }
        
        .nav-link.active::after,
        .nav-link:hover::after {
          width: 100%;
        }

        .btn-reserver {
          background: #fffcea !important;
          color: var(--color-primary) !important;
          padding: 0.6rem 1.5rem !important;
          border-radius: 25px !important;
          font-weight: 500 !important;
          transition: all 0.3s ease !important;
          text-shadow: none !important;
          border: 1px solid #fffcea !important;
        }

        .btn-reserver::after {
          display: none !important;
        }

        .btn-reserver:hover {
          background: rgba(255, 252, 234, 0.9) !important;
          color: var(--color-primary-dark) !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(255, 252, 234, 0.3);
        }

        .btn-reserver-header {
          padding: 0.6rem 1.5rem;
          border-radius: 25px;
          font-weight: 500;
          transition: all 0.3s ease;
          text-decoration: none;
          border: 1px solid #fffcea;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        /* Quand la barre est beige (scrolled ou page sombre), le bouton est bleu */
        .btn-reserver-header.is-beige {
          background: var(--color-primary);
          color: #fffcea;
          border-color: var(--color-primary);
        }

        /* Quand la barre est transparente (sur hero), le bouton est discret (pas en avant) */
        .btn-reserver-header:not(.is-beige) {
          background: transparent;
          color: #fffcea;
          border: 1px solid #fffcea;
          opacity: 0.85;
        }

        .btn-reserver-header.is-beige:hover {
          background: var(--color-primary-dark);
          border-color: var(--color-primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-reserver-header:not(.is-beige):hover {
          background: rgba(255, 252, 234, 0.1);
          opacity: 1;
          transform: translateY(-1px);
        }

        .with-submenu {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
        }

        .submenu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #fffcea;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: var(--spacing-3);
          min-width: 260px;
          z-index: 1001;
          border: 1px solid rgba(0,0,0,0.08);
        }
        
        /* Suppression de ces règles CSS obsolètes car on gère maintenant avec React state */

        @keyframes fadeIn {
          from { opacity: 0; transform: translate(-50%, -10px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .submenu-link {
          display: block;
          padding: 0.75rem 1rem;
          color: var(--color-gray-700);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }

        .submenu-link:hover {
          background: var(--color-gray-100);
          color: var(--color-primary);
        }

        .mobile-menu-toggle { display: none; }
        .mobile-nav { display: none; }

        @media (max-width: 1024px) {
          .header-container { padding: 0.5rem 1.5rem; }
          .nav-right-section { gap: var(--spacing-4); }
          .desktop-nav { gap: var(--spacing-4); }
        }

        @media (max-width: 768px) {
          .header-container { padding: 0.5rem 1rem; }
          .nav-right-section { display: none; }
          .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0.5rem;
            border-radius: 8px;
            z-index: 1004;
          }
          
          .mobile-menu-toggle:hover {
            background: rgba(255, 252, 234, 0.2);
            transform: scale(1.05);
          }
          
          /* Bouton mobile beige sur la home page quand on n'a pas scrollé */
          .header.light-text .mobile-menu-toggle {
            color: #fffcea;
          }

          /* Force la couleur quand le menu est ouvert car le fond devient clair */
          .header.menu-open .mobile-menu-toggle {
            color: var(--color-primary) !important;
          }
          
          /* Bouton mobile couleur primaire partout ailleurs */
          .header.dark-text .mobile-menu-toggle {
            color: var(--color-primary);
          }

          .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(20px);
            z-index: 1002;
            animation: fadeInOverlay 0.3s ease-out;
          }

          .mobile-nav {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100vw;
            height: 100vh;
            background: linear-gradient(
              135deg,
              rgba(255, 252, 234, 0.95) 0%,
              rgba(255, 252, 234, 0.85) 50%,
              rgba(255, 252, 234, 0.95) 100%
            );
            backdrop-filter: blur(30px);
            display: flex;
            align-items: center;
            justify-content: center;
            animation: slideInFromTop 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1003;
          }

          .mobile-nav-content {
            text-align: center;
            max-width: 300px;
            width: 90%;
          }

          .mobile-nav-item {
            margin: clamp(1.5rem, 4vw, 2.5rem) 0;
            opacity: 0;
            animation: fadeInUp 0.5s ease-out forwards;
          }

          .mobile-nav-item:nth-child(1) { animation-delay: 0.1s; }
          .mobile-nav-item:nth-child(2) { animation-delay: 0.2s; }
          .mobile-nav-item:nth-child(3) { animation-delay: 0.3s; }
          .mobile-nav-item:nth-child(4) { animation-delay: 0.4s; }
          .mobile-nav-item:nth-child(5) { animation-delay: 0.5s; }

          .mobile-nav-link {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            padding: clamp(1rem, 3vw, 1.5rem) 0;
            text-decoration: none;
            color: var(--color-primary);
            font-weight: 400;
            font-size: clamp(1.2rem, 4vw, 1.6rem);
            letter-spacing: 0.02em;
            transition: all 0.3s ease;
            border-radius: 12px;
            position: relative;
          }
          
          .mobile-nav-link:hover {
            color: var(--color-primary-dark);
            transform: translateY(-2px);
          }
          
          .mobile-nav-link.active {
            color: var(--color-primary-dark);
            font-weight: 500;
          }

          .mobile-nav-link.active::before {
            content: '';
            position: absolute;
            bottom: 0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 2px;
            background: var(--color-primary);
            border-radius: 1px;
          }

          .btn-reserver-mobile {
            background: var(--color-primary) !important;
            color: #fffcea !important;
            padding: clamp(1.2rem, 4vw, 1.8rem) clamp(2rem, 6vw, 3rem) !important;
            border-radius: 30px !important;
            font-weight: 600 !important;
            font-size: clamp(1.4rem, 5vw, 1.8rem) !important;
            margin: clamp(2rem, 5vw, 3rem) 0 !important;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
            transform: none !important;
          }

          .btn-reserver-mobile::before {
            display: none !important;
          }

          .btn-reserver-mobile:hover {
            background: var(--color-primary-dark) !important;
            color: #fffcea !important;
            transform: translateY(-3px) !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2) !important;
          }

          .mobile-submenu {
            margin-top: 1rem;
            padding: 1rem;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .mobile-submenu-link {
            display: block;
            padding: 0.8rem 0;
            color: var(--color-gray-600);
            text-decoration: none;
            font-size: clamp(1rem, 3vw, 1.2rem);
            font-weight: 300;
            transition: all 0.2s ease;
            border-radius: 8px;
          }

          .mobile-submenu-link:hover {
            color: var(--color-primary);
            transform: translateX(4px);
          }

          .chevron {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0.7;
          }
          
          .chevron.open {
            transform: rotate(180deg);
          }

          @keyframes fadeInOverlay {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideInFromTop {
            from { 
              opacity: 0;
              transform: translateY(-100%);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </header>
  );
};

export default Header;