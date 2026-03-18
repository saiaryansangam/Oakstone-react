import React from 'react';

const Finance = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="finance-hero">
                <div className="container finance-hero-container">
                   
                    <p>Oakstone Finance operates as the group's specialist UK property finance brokerage, focused on delivering practical, optimally structured lending solutions across bridging, development, commercial and buy-to-let requirements.</p>
                </div>
            </section>

            {/* Image Section */}
            <section className="finance-image-break" style={{ backgroundImage: `url('finance.jpg')` }}>
            </section>

            {/* Description Section */}
            <section className="finance-description">
                <div className="container finance-description-container">
                    <p>The business supports UK borrowers, intermediaries and international purchasers seeking UK property finance across residential, commercial and development-led scenarios.</p>
                    <p>Each requirement is assessed against asset, borrower profile, timeline and exit strategy, then aligned to an appropriate lender and facility structure with careful attention to security, documentation and deliverability. Oakstone Finance supports clients from initial feasibility through lender engagement, negotiation and completion, maintaining direct communication and a pragmatic focus on outcomes.</p>
                </div>
            </section>

            {/* Strategic Lending Solutions Section */}
            <section className="finance-strategic">
                <div className="container finance-strategic-container">
                    <h2>Strategic Lending Solutions</h2>
                    
                    <div className="finance-grid">
                        <div className="finance-col">
                            <h3>Bridging Finance</h3>
                            <p>Short-term funding for purchases, refinances and time-sensitive transactions, structured around security, speed and a clearly defined exit. We support bridging requirements across investment, residential and commercial property.</p>
                        </div>

                        <div className="finance-col">
                            <h3>Development Finance</h3>
                            <p>Funding solutions aligned to cost, programme and exit strategy across residential, commercial and mixed-use development. Supporting senior debt and mezzanine participation with disciplined attention to deliverability.</p>
                        </div>

                        <div className="finance-col">
                            <h3>Commercial Finance</h3>
                            <p>Funding for investment and owner-occupied commercial property, structured to tenant profile, income quality and asset fundamentals. Optimized terms for acquisitions, refinances and capital raising.</p>
                        </div>

                        <div className="finance-col">
                            <h3>Buy-to-Let Finance</h3>
                            <p>Debt solutions for UK investment property, including single assets and portfolios. We align facilities to income profile, leverage requirements and longer-term hold strategy for corporate and individual borrowers.</p>
                        </div>

                        <div className="finance-col">
                            <h3>International Purchasers</h3>
                            <p>UK property finance for overseas buyers, structured with discretion and practical understanding of cross-border complexity. We align lender selection to timeline, risk profile and exit strategy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit Oakstone Finance Section */}
            <section className="cta-section">
        <div className="container container-narrow">
          <h2>Visit Oakstone Finance</h2>
          <p>For eligible investor access and distribution enquiries, and for further detail on our investor access approach and investment strategy framework, please visit the Oakstone Invest website.</p>
          <a href="/about#contact" className="btn-primary">Contact</a>
        </div>
      </section>
            

        </main>
    );
};

export default Finance; 
