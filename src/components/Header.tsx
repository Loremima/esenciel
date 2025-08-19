import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/qui-suis-je', label: 'Qui suis-je' },
    {
      label: 'Services',
      submenu: [
        { path: '/services', label: 'Tous les services' },
        { path: '/sante-qualite-vie', label: 'Santé & Qualité de Vie' },
        { path: '/pleine-conscience', label: 'Pleine Conscience' },
        { path: '/jeu-du-tao', label: 'Jeu du Tao' },
      ]
    },
    { path: '/programmes-mbsr-mbct', label: 'Programmes MBSR/MBCT' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact-reservation', label: 'Contact & Réservation' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link" aria-label="Retour à l'accueil">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Navigation principale">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  {item.submenu ? (
                    <div 
                      className="nav-dropdown"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button 
                        className="nav-link dropdown-trigger"
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <ChevronDown size={16} />
                      </button>
                      {isServicesOpen && (
                        <ul className="dropdown-menu">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`dropdown-link ${location.pathname === subItem.path ? 'active' : ''}`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu de navigation"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav" aria-label="Navigation mobile">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  {item.submenu ? (
                    <>
                      <button
                        className="mobile-nav-link dropdown-trigger"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        aria-expanded={isServicesOpen}
                      >
                        {item.label}
                        <ChevronDown size={16} />
                      </button>
                      {isServicesOpen && (
                        <ul className="mobile-dropdown">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`mobile-dropdown-link ${location.pathname === subItem.path ? 'active' : ''}`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(245, 245, 220, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(85, 107, 47, 0.1);
          transition: all var(--transition-normal);
        }

        .header.scrolled {
          background: rgba(245, 245, 220, 0.98);
          box-shadow: var(--shadow-md);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-4) 0;
        }

        .logo-link {
          text-decoration: none;
        }

        .desktop-nav {
          display: none;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: var(--spacing-8);
          align-items: center;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          text-decoration: none;
          color: var(--color-primary);
          font-weight: 500;
          padding: var(--spacing-2) var(--spacing-3);
          border-radius: var(--radius-md);
          transition: all var(--transition-normal);
          display: flex;
          align-items: center;
          gap: var(--spacing-1);
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-secondary);
          background: rgba(218, 165, 32, 0.1);
        }

        .dropdown-trigger {
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 1rem;
        }

        .nav-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--color-white);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          padding: var(--spacing-2);
          min-width: 220px;
          list-style: none;
          z-index: 100;
          animation: fadeInUp 0.2s ease-out;
        }

        .dropdown-link {
          display: block;
          padding: var(--spacing-3) var(--spacing-4);
          color: var(--color-gray-700);
          text-decoration: none;
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .dropdown-link:hover,
        .dropdown-link.active {
          background: var(--color-accent);
          color: var(--color-primary);
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          padding: var(--spacing-2);
          border-radius: var(--radius-md);
          transition: all var(--transition-fast);
        }

        .mobile-menu-btn:hover {
          background: rgba(85, 107, 47, 0.1);
        }

        .mobile-nav {
          background: var(--color-white);
          border-radius: var(--radius-xl);
          margin-top: var(--spacing-4);
          box-shadow: var(--shadow-lg);
          animation: fadeInUp 0.3s ease-out;
        }

        .mobile-nav-list {
          list-style: none;
          padding: var(--spacing-4);
        }

        .mobile-nav-item {
          border-bottom: 1px solid var(--color-gray-100);
        }

        .mobile-nav-item:last-child {
          border-bottom: none;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--spacing-4) 0;
          text-decoration: none;
          color: var(--color-gray-700);
          font-weight: 500;
          transition: color var(--transition-fast);
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--color-primary);
        }

        .mobile-dropdown {
          list-style: none;
          padding-left: var(--spacing-4);
          margin-top: var(--spacing-2);
        }

        .mobile-dropdown-link {
          display: block;
          padding: var(--spacing-2) 0;
          color: var(--color-gray-600);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }

        .mobile-dropdown-link:hover,
        .mobile-dropdown-link.active {
          color: var(--color-secondary);
        }

        @media (min-width: 1024px) {
          .desktop-nav {
            display: block;
          }

          .mobile-menu-btn {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;