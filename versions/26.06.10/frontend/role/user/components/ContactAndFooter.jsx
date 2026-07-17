import React from 'react';

const ContactAndFooter = () => {
    return (
        <section className="contact-footer-section" style={{ position: 'relative', zIndex: 1, width: '100%' }}>

            {/* Premium CTA Banner */}
            <div className="premium-cta-wrapper" style={{ padding: '100px 5vw', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                
                {/* Background ambient glows */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'radial-gradient(circle, rgba(74, 222, 128, 0.1) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(50px)', zIndex: 0 }} />

                <div data-aos="fade-up" className="premium-cta-card" style={{
                    position: 'relative',
                    zIndex: 1,
                    width: '100%',
                    maxWidth: '1200px',
                    background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 25, 15, 0.9) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '40px',
                    padding: '70px 60px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    overflow: 'hidden',
                    gap: '40px',
                    transition: 'border-color 0.4s ease'
                }}>
                    
                    {/* Inner glowing orb */}
                    <div className="cta-glow-orb" style={{
                        position: 'absolute', bottom: '-150px', right: '-100px',
                        width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none'
                    }}></div>

                    <div className="cta-left" style={{ flex: '1', maxWidth: '600px', textAlign: 'left', zIndex: 1 }}>
                        {/* Badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '10px',
                            background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.2)',
                            padding: '10px 24px', borderRadius: '30px', fontSize: '0.9rem', fontWeight: '600',
                            color: '#4ade80', marginBottom: '25px', letterSpacing: '0.5px'
                        }}>
                            <span style={{ display: 'flex', width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }}></span>
                            Available for New Projects
                        </div>

                        {/* Heading */}
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: '800',
                            letterSpacing: '-1.5px',
                            lineHeight: '1.1',
                            marginBottom: '20px',
                            background: 'linear-gradient(180deg, #ffffff 0%, #a0a0a0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Let's build something <span style={{ color: '#4ade80', WebkitTextFillColor: '#4ade80' }}>amazing</span> together.
                        </h2>

                        {/* Description */}
                        <p style={{
                            color: 'rgba(255,255,255,0.6)',
                            fontSize: '1.15rem',
                            lineHeight: '1.7',
                            marginBottom: '0'
                        }}>
                            Ready to bring your ideas to life? Book a free discovery call and let's discuss how we can turn your vision into a modern, high-performing digital experience.
                        </p>
                    </div>

                    <div className="cta-right" style={{ display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1, minWidth: '250px' }}>
                        {/* Primary Button */}
                        <a href="mailto:sandeepaliens01@gmail.com" className="cta-primary-btn" style={{
                            background: '#4ade80',
                            color: '#000',
                            textDecoration: 'none',
                            padding: '18px 40px',
                            borderRadius: '100px',
                            fontWeight: '700',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            boxShadow: '0 15px 30px -5px rgba(74, 222, 128, 0.3)',
                        }}>
                            Start a Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow" style={{ transition: 'transform 0.3s' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                        
                        {/* Secondary Button */}
                        <a href="mailto:sandeepaliens01@gmail.com" className="cta-secondary-btn" style={{
                            background: 'rgba(255,255,255,0.03)',
                            color: '#fff',
                            textDecoration: 'none',
                            padding: '18px 40px',
                            borderRadius: '100px',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                        }}>
                            Send a Message
                        </a>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .cta-primary-btn:hover {
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 20px 40px -5px rgba(74, 222, 128, 0.5) !important;
                }
                .cta-primary-btn:hover .btn-arrow {
                    transform: translateX(4px);
                }
                .cta-secondary-btn:hover {
                    background: rgba(255,255,255,0.08) !important;
                    border-color: rgba(255,255,255,0.2) !important;
                    transform: translateY(-3px);
                }
                .premium-cta-card:hover {
                    border-color: rgba(74, 222, 128, 0.4) !important;
                }
                @media (max-width: 900px) {
                    .premium-cta-card {
                        flex-direction: column !important;
                        text-align: center !important;
                        padding: 50px 30px !important;
                        border-radius: 32px !important;
                        gap: 40px !important;
                    }
                    .cta-left {
                        text-align: center !important;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .cta-right {
                        width: 100%;
                    }
                    .cta-primary-btn, .cta-secondary-btn {
                        width: 100%;
                    }
                }
            `}} />

            {/* Footer */}
            <footer data-aos="fade-up" data-aos-offset="0" style={{
                padding: '80px 5vw 40px',
                width: '100%',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative'
            }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '80px' }}>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '60px' }}>

                        {/* Brand / Left */}
                        <div style={{ maxWidth: '400px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #4ade80, #10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: '20px', fontWeight: '900' }}>
                                    S
                                </div>
                                <span style={{ fontSize: '2rem', fontWeight: '800', letterSpacing: '-1px', color: '#fff' }}>sandeep.</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.6)', margin: '0 0 35px 0', fontSize: '1.1rem', lineHeight: '1.7' }}>Designing modern websites and digital experiences that help businesses grow online.</p>

                            {/* Social Icons */}
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://github.com/Sanybarupal" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.3s', fontSize: '20px' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                ><i className="fa-brands fa-github"></i></a>

                                <a href="https://www.linkedin.com/in/sandeep-barupal-a5b323321/?isSelfProfile=false" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.3s', fontSize: '20px' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0, 119, 181, 0.2)'; e.currentTarget.style.color = '#0077b5'; e.currentTarget.style.borderColor = '#0077b5'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                ><i className="fa-brands fa-linkedin-in"></i></a>

                                <a href="https://x.com/sandeepbarupal_" target="_blank" rel="noreferrer" style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', transition: 'all 0.3s', fontSize: '20px' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(29, 161, 242, 0.2)'; e.currentTarget.style.color = '#1da1f2'; e.currentTarget.style.borderColor = '#1da1f2'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                ><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>

                        {/* Contact Info / Right */}
                        <div>
                            <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '30px', fontWeight: '700' }}>Contact Info</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <a href="mailto:sandeepaliens01@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px', transition: 'color 0.3s', fontSize: '1.05rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4ade80'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <i className="fa-regular fa-envelope" style={{ color: '#4ade80', fontSize: '18px' }}></i>
                                    </div>
                                    sandeepaliens01@gmail.com
                                </a>
                                <a href="tel:7878142323" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '20px', transition: 'color 0.3s', fontSize: '1.05rem' }} onMouseEnter={(e) => e.currentTarget.style.color = '#4ade80'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-phone" style={{ color: '#4ade80', fontSize: '18px' }}></i>
                                    </div>
                                    +91 7878 142323
                                </a>
                                <span style={{ color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: '20px', fontSize: '1.05rem' }}>
                                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
                                        <i className="fa-solid fa-location-dot" style={{ color: '#4ade80', fontSize: '18px' }}></i>
                                    </div>
                                    India (Remote)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.4)', margin: 0, fontSize: '0.95rem' }}>&copy; {new Date().getFullYear()} Sandeep Barupal. All Rights Reserved.</p>
                        <div style={{ display: 'flex', gap: '30px' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Privacy Policy</a>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.95rem', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactAndFooter;
