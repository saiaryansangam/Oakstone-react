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
                                <li>Operational support and restructuring</li>
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
                            <p>Oakstone Advisory works closely with clients on a selective basis, engaging in situations where experience, judgement and discretion are central to the outcome.</p>
                            <br />
                            <p>The practice is characterised by thoughtful analysis, direct engagement and a focus on supporting material change in complex or transitional environments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Section */}
            <section className="advisory-image-break" style={{ backgroundImage: `url('/advisory-break.png')` }}>
            </section>

        </main>
    );
};

export default Advisory;
