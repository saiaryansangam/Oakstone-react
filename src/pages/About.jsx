import React from 'react';

const About = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="about-hero" style={{ backgroundImage: `url('/about-hero.png')` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <h2>The firm combines disciplined capital structuring, specialist execution capability and senior advisory experience, anchored in the UK and operating internationally</h2>
                    <p>Oakstone Partners operates across capital markets, specialist finance and corporate advisory</p>
                </div>
            </section>

            {/* Leadership & Experience Section */}
            <section className="about-leadership">
                <div className="container leadership-container">
                    <h2>Leadership & Experience</h2>
                    <p>Oakstone Partners is led by senior professionals with institutional experience across global capital markets, real assets and corporate advisory, shaped by work within leading international financial institutions operating across major global financial markets.</p>
                    <p>The firm combines disciplined capital structuring, specialist execution capability and senior advisory experience, anchored in the UK and operating internationally</p>
                </div>
            </section>

            {/* How We Operate Section */}
            <section className="about-operate">
                <div className="container">
                    <h2>How We Operate</h2>
                    <div className="operate-grid">
                        <div className="operate-col">
                            <p>Oakstone Partners approaches engagements with a focus on clarity of mandate, rigorous structuring and decisive, impactful decision-making.</p>
                        </div>
                        <div className="operate-divider"></div>
                        <div className="operate-col">
                            <p>The firm works closely with clients and parties to navigate complexity and deliver outcomes that are commercially robust, strategically coherent and durable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="about-philosophy">
                <div className="container container-medium philosophy-container">
                    <h2>Philosophy</h2>
                    <div className="philosophy-content">
                        <div className="philosophy-accent-line"></div>
                        <div className="philosophy-text">
                            <p>Oakstone Partners operates from the belief that enduring outcomes are shaped by sound judgement applied under uncertainty, paired with the capacity for decisive action when required.</p>
                            <br />
                            <p>The firm takes a long-term view of markets and decision-making, recognising that complexity, cycles and imperfect information demand both clarity of thinking and disciplined execution over time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="about-contact">
                <div className="container contact-grid">
                    
                    {/* Left Side: Contact Info */}
                    <div className="contact-info">
                        <h2>Contact Us</h2>
                        
                        <div className="contact-block">
                            <h3>Enquiries</h3>
                            <p>For all general enquiries, please use the contact details below or the provided form.</p>
                        </div>

                        <div className="contact-block">
                            <h3>Contact</h3>
                            <a href="mailto:info@oakstonepartners.com">info@oakstonepartners.com</a>
                            <p>+44 (0) 20 7123 4567</p>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <input type="text" placeholder="Enter your name" className="form-input" />
                            <input type="email" placeholder="Enter your email" className="form-input" />
                            <input type="tel" placeholder="Phone" className="form-input" />
                            <textarea placeholder="Message" className="form-input form-textarea" rows="4"></textarea>
                            <button type="button" className="btn-primary form-submit">Send Enquiry</button>
                        </form>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default About;
