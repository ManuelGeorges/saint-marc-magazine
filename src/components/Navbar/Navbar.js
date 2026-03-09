'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/', icon: '🏠' },
    { name: 'المقالات', path: '/articles', icon: '📝' },
    { name: 'الطاقم', path: '/about', icon: '❓' },
    { name: 'تواصل', path: '/contact', icon: '📍' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href="/">الريادة<span>.</span></Link>
          </div>

          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className={`${styles.link} ${pathname === link.path ? styles.active : ''}`}
                >
                  <span className={styles.icon}>{link.icon}</span>
                  <span className={styles.text}>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <button className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* الموبايل ميني - تصميم Full Screen ناعم */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          {navLinks.map((link, i) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={styles.mLink} 
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.mIcon}>{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}