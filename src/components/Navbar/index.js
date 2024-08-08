import './index.scss';
import React, { useState, useEffect } from 'react';
import LogoS from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', scrollActive);

    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <div className="nav-bar">
      <NavLink className="logo" to="/">
        {/* <img src={LogoS} alt="Logo" /> */}
      </NavLink>

      <nav className="nav">
        <ul className="nav__list">
          <NavLink to="/home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}>
            <i className="ri-home-5-line"></i>
            <span className="nav__name">Home</span>
          </NavLink>

          <NavLink to="/profile" className={`nav__link ${activeSection === 'profile' ? 'active-link' : ''}`}>
            <i className="ri-user-line"></i>
            <span className="nav__name">Profile</span>
          </NavLink>

          <NavLink to="/message" className={`nav__link ${activeSection === 'message' ? 'active-link' : ''}`}>
            <i className="ri-chat-3-line"></i>
            <span className="nav__name">Message</span>
          </NavLink>

          <NavLink to="/mail" className={`nav__link ${activeSection === 'mail' ? 'active-link' : ''}`}>
            <i className="ri-mail-open-line"></i>
            <span className="nav__name">Mail</span>
          </NavLink>

          <NavLink to="/settings" className={`nav__link ${activeSection === 'settings' ? 'active-link' : ''}`}>
            <i className="ri-settings-line"></i>
            <span className="nav__name">Settings</span>
          </NavLink>

          <svg className="indicator" width="94" height="56" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="47" cy="28" rx="24" ry="28" />
            <path d="M24 20C24 20 28 55.9999 48 56L0 55.9997C18 55.9998 24 20 24 20Z" />
            <path d="M70 20C70 20 66 55.9999 46 56L94 55.9997C76 55.9998 70 20 70 20Z" />
          </svg>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;