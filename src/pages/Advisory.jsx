import React from 'react';

const Advisory = () => {
    return (
        <main className="advisory-page">
            {/* Hero Section */}
            <section className="advisory-hero">
                <div className="container">
                    <h2 className="advisory-heading">Oakstone Advisory provides senior corporate and strategic advisory services to principals, investors and businesses operating internationally.</h2>
                    <p className="advisory-subheading">The practice is engaged in situations requiring experience-led judgement, discretion and a clear understanding of complex financial and strategic considerations.</p>
                </div>
            </section>

            {/* Oakstone Advisory Section */}
            <section className="advisory-intro">
                <div className="container container-medium">
                    <h2>Oakstone Advisory</h2>
                    <p>Oakstone Advisory provides senior corporate and strategic advisory services to principals, investors and businesses operating internationally.</p>
                    <p>The practice is engaged in situations requiring experience-led judgement and discretion, often involving complex financial, strategic and cross-border considerations.</p>
                </div>
            </section>

            {/* Areas of Focus Section */}
            <section className="advisory-focus">
                <div className="container focus-container">
                    <h2>Areas of Focus</h2>
                    
                    <div className="focus-grid">
                        <div className="focus-left">
                            <p>Oakstone Advisory’s work spans a range of corporate and strategic situations, including:</p>
                        </div>
                        
                        <div className="focus-divider"></div>
                        
                        <div className="focus-right">
                            <ul className="focus-list">
                                <li>Capital structuring and strategic finance</li>
                                <li>Growth, repositioning and expansion initiatives</li>
                                <li>Operational support and restructuring  and stakeholder management</li>
                                <li>Cross-border and international advisory mandates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="advisory-how-we-work">
                <div className="container work-container">
                    <h2>How We Work</h2>
                    
                    <div className="work-content">
                        <div className="work-accent-line"></div>
                        <div className="work-text">
                            <p>
Oakstone Advisory engages selectively, working closely with clients where judgement and discretion are central to the outcome. Mandates are approached with clear scope, direct senior involvement and disciplined analysis.</p>
                            <br />
                            <p>The practice is characterised by thoughtful, pragmatic advice and a focus on supporting material decisions and change in complex or transitional environments.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cta-section">
        <div className="container container-narrow">
          <h2>Contact Oakstone Partners</h2>
          <p>To discuss a corporate or strategic advisory mandate, please contact us.</p>
          <a href="/about#contact" className="btn-primary"> Contact</a>
        </div>
      </section>

            {/* Image Section */}
            <section className="advisory-image-break" style={{ backgroundImage: `url('/advisory.jpg')` }}>
            </section>

        </main>
    );
};

export default Advisory;
