import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const navLinks = [
    { path: '/qui-suis-je', label: 'Qui suis-je' },
    {
      label: 'Services',
      submenu: [
        { path: '/services', label: 'Tous les services' },
        { path: '/accompagnements-individuels', label: 'Accompagnements individuels' },
        { path: '/accompagnements-groupe', label: 'Accompagnements groupe' },
        { path: '/programmes-mbsr-mbct', label: 'Programmes de pleine conscience' },
        { path: '/interventions-entreprises', label: 'Interventions en Entreprises' },
      ]
    },
    { path: '/blog', label: 'Blog' },
    { path: '/infos-pratiques', label: 'Infos pratiques' },
    { path: '/contact-reservation', label: 'Contact' },
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
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo-link">
          <Logo variant="navbar" isScrolled={isScrolled} />
        </Link>
        <nav className="desktop-nav">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className="nav-item"
              onMouseEnter={() => link.submenu && setOpenSubmenu(link.label)}
              onMouseLeave={(e) => {
                // Ne fermer que si on ne va pas vers le submenu
                const relatedTarget = e.relatedTarget as HTMLElement;
                if (link.submenu && relatedTarget && !relatedTarget.closest('.submenu')) {
                  setTimeout(() => setOpenSubmenu(null), 150);
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
                  onMouseLeave={() => setTimeout(() => setOpenSubmenu(null), 150)}
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
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link, index) => (
            <div key={index} className="mobile-nav-item">
              {link.submenu ? (
                <>
                  <div
                    className="mobile-nav-link with-submenu"
                    onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                  >
                    <span>{link.label}</span>
                    <ChevronDown size={16} className={openSubmenu === link.label ? 'open' : ''} />
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
              ) : (
                <NavLink to={link.path!} className="mobile-nav-link">
                  {link.label}
                </NavLink>
              )}
            </div>
          ))}
        </nav>
      )}

      <style jsx>{`
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
          padding: 1.25rem 0;
        }

        .header.scrolled {
          background: linear-gradient(135deg, 
            rgba(255, 252, 234, 0.9) 0%, 
            rgba(255, 252, 234, 0.6) 50%, 
            rgba(255, 252, 234, 0.3) 100%
          );
          backdrop-filter: blur(15px);
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-6);
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
          color: #fffcea;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s ease;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }

        .header.scrolled .nav-link {
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

        .with-submenu {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
        }

        .submenu {
          position: absolute;
          top: calc(100% - 5px);
          left: 50%;
          transform: translateX(-50%);
          background: #fffcea;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          padding: var(--spacing-2);
          padding-top: calc(var(--spacing-2) + 5px);
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        .nav-item:hover .submenu,
        .submenu:hover {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
        }

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

        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--color-primary);
          }

          .mobile-nav {
            display: block;
            background: #fffcea;
            padding: var(--spacing-4) var(--spacing-6);
            border-top: 1px solid var(--color-gray-200);
          }

          .mobile-nav-item {
            border-bottom: 1px solid var(--color-gray-200);
          }
          
          .mobile-nav-item:last-child {
            border-bottom: none;
          }

          .mobile-nav-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
            text-decoration: none;
            color: var(--color-gray-700);
            font-weight: 500;
          }
          
          .mobile-nav-link.active {
            color: var(--color-primary);
          }

          .mobile-submenu {
            padding-left: 1rem;
            padding-bottom: 0.5rem;
          }

          .mobile-submenu-link {
            display: block;
            padding: 0.75rem 0;
            color: var(--color-gray-600);
            text-decoration: none;
          }

          .with-submenu .chevron {
            transition: transform 0.3s ease;
          }
          
          .with-submenu .chevron.open {
            transform: rotate(180deg);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;