import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './role/user/pages/home/index.jsx';
import About from './role/user/pages/about/index.jsx';
import Experience from './role/user/pages/experience/index.jsx';
import Work from './role/user/pages/work/index.jsx';
import Service from './role/user/pages/service/index.jsx';
import Plan from './role/user/pages/plan/index.jsx';
import Contact from './role/user/pages/contact/index.jsx';
import Blog from './role/user/pages/blog/index.jsx';
import './role/user/style.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="navbar">
            <div className="logo" style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4ade80"/>
                    <path d="M2 17L12 22L22 17" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>

            <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                {['Home', 'About', 'Experience', 'Service', 'Blog', 'Contact'].map(item => (
                    <li key={item}>
                        <Link 
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                            onClick={() => setIsOpen(false)}
                            className="nav-item"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const RouteChangeTracker = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (window.AOS) {
            setTimeout(() => {
                window.AOS.refresh();
            }, 100);
        }
    }, [location]);

    return null;
};

const App = () => (
    <BrowserRouter>
        <RouteChangeTracker />
        <div className="bg-glow glow-blue"></div>
        <div className="bg-glow glow-bottom-blue"></div>
        <div className="bg-glow glow-green"></div>
        <Navbar />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/work" element={<Work />} />
                <Route path="/service" element={<Service />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
