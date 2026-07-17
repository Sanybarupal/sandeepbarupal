import React from 'react';

const ContactAndFooter = () => {
    return (
        <section className="contact-footer-section" style={{ position: 'relative', zIndex: 1, width: '100%' }}>


            {/* Footer */}
            <footer data-aos="fade-up" data-aos-offset="0" style={{
                padding: '100px 5vw 40px',
                width: '100%',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
                background: 'radial-gradient(ellipse at bottom, rgba(74, 222, 128, 0.05) 0%, transparent 60%)',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px', position: 'relative', zIndex: 1 }}>

                    {/* Top Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>

                        {/* Brand Column */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'linear-gradient(135deg, #4ade80, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '22px', fontWeight: '900' }}>
                                    S
                                </div>
                                <span style={{ fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-1.5px', color: '#fff' }}>sandeep.</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', margin: '0 0 35px 0', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '350px' }}>Designing modern websites and digital experiences that help businesses grow online.</p>

                            {/* Social Icons */}
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://github.com/Sanybarupal" target="_blank" rel="noreferrer" className="footer-social-link"><i className="fa-brands fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/sandeep-barupal-a5b323321/?isSelfProfile=false" target="_blank" rel="noreferrer" className="footer-social-link lnk"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="https://x.com/sandeepbarupal_" target="_blank" rel="noreferrer" className="footer-social-link twt"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>

                        {/* Quick Links Column */}
                        <div>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '30px', fontWeight: '700', letterSpacing: '0.5px' }}>Quick Links</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {['Home', 'About', 'Experience', 'Service', 'Work', 'Contact'].map(link => (
                                    <a key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="footer-nav-link">
                                        <span className="footer-nav-dot"></span>
                                        {link}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info Column */}
                        <div>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '30px', fontWeight: '700', letterSpacing: '0.5px' }}>Contact Info</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <a href="mailto:sandeepaliens01@gmail.com" className="footer-contact-link">
                                    <div className="footer-contact-icon">
                                        <i className="fa-regular fa-envelope"></i>
                                    </div>
                                    sandeepaliens01@gmail.com
                                </a>
                                <a href="tel:7878142323" className="footer-contact-link">
                                    <div className="footer-contact-icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    +91 7878 142323
                                </a>
                                <div className="footer-contact-link" style={{ pointerEvents: 'none' }}>
                                    <div className="footer-contact-icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    India (Remote)
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Massive Background Text */}
                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        marginTop: '40px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        paddingBottom: '20px'
                    }}>
                        <h1 style={{
                            fontSize: 'clamp(3rem, 15vw, 12rem)',
                            fontWeight: '900',
                            margin: 0,
                            lineHeight: '0.8',
                            letterSpacing: '-2px',
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            userSelect: 'none'
                        }}>
                            SANDEEP
                        </h1>
                    </div>

                    {/* Bottom Copyright */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', paddingBottom: '20px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.4)', margin: 0, fontSize: '0.95rem' }}>&copy; {new Date().getFullYear()} Sandeep Barupal. All Rights Reserved.</p>
                        <div style={{ display: 'flex', gap: '30px' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Privacy Policy</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Terms of Service</a>
                        </div>
                    </div>
                </div>

                {/* Footer Styles */}
                <style dangerouslySetInnerHTML={{ __html: `
                    .footer-social-link {
                        width: 50px; height: 50px; border-radius: 14px; background: rgba(255,255,255,0.03); 
                        border: 1px solid rgba(255,255,255,0.05); display: flex; align-items: center; 
                        justify-content: center; color: rgba(255,255,255,0.7); font-size: 20px;
                        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                        text-decoration: none;
                    }
                    .footer-social-link:hover {
                        background: rgba(255,255,255,0.1); color: #fff; transform: translateY(-4px);
                    }
                    .footer-social-link.lnk:hover {
                        background: rgba(0, 119, 181, 0.2); color: #0077b5; border-color: #0077b5;
                    }
                    .footer-social-link.twt:hover {
                        background: rgba(29, 161, 242, 0.2); color: #1da1f2; border-color: #1da1f2;
                    }

                    .footer-nav-link {
                        color: rgba(255,255,255,0.6); text-decoration: none; font-size: 1.05rem;
                        display: flex; align-items: center; gap: 12px; transition: all 0.3s ease;
                    }
                    .footer-nav-dot {
                        width: 6px; height: 6px; background: #4ade80; border-radius: 50%; opacity: 0;
                        transform: scale(0); transition: all 0.3s ease;
                    }
                    .footer-nav-link:hover {
                        color: #fff; transform: translateX(5px);
                    }
                    .footer-nav-link:hover .footer-nav-dot {
                        opacity: 1; transform: scale(1);
                    }

                    .footer-contact-link {
                        color: rgba(255,255,255,0.7); text-decoration: none; display: flex; 
                        align-items: center; gap: 20px; font-size: 1.05rem; transition: color 0.3s ease;
                    }
                    .footer-contact-icon {
                        width: 50px; height: 50px; border-radius: 14px; background: rgba(255,255,255,0.02);
                        display: flex; align-items: center; justify-content: center; 
                        border: 1px solid rgba(255,255,255,0.05); color: #4ade80; font-size: 18px;
                        transition: all 0.3s ease;
                    }
                    .footer-contact-link:hover {
                        color: #4ade80;
                    }
                    .footer-contact-link:hover .footer-contact-icon {
                        background: rgba(74, 222, 128, 0.1); border-color: rgba(74, 222, 128, 0.2);
                        transform: scale(1.05);
                    }
                `}} />
            </footer>
        </section>
    );
};

export default ContactAndFooter;
