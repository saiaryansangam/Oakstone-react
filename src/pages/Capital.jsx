import React from 'react';

const Capital = () => {
    return (
        <main>
            {/* First Section: Intro */}
            <section className="capital-intro"  >
                <div className="container capital-intro-container">
                    <h2>Oakstone Capital is a boutique private credit and debt capital markets firm specialising in curated global fixed income investment products delivered through a network of international partners.</h2>
                    <p>The firm provides capital to real estate related projects and adjacent businesses, focusing on asset-backed strategies designed to generate risk-adjusted income with disciplined downside protection.</p>
                </div>
            </section>

            {/* Image Break Section */}
            <section className="capital-image-break" style={{ backgroundImage: `url('/capital.jpg')` }}>
            </section>

            {/* What We Do Section */}
            <section className="capital-what-we-do">
                <div className="container">
                    <h2>What We Do</h2>
                    <p>Oakstone Capital originates, curates and structures fixed income products supported by underlying real assets. Products are distributed through regulated partners and aligned investment platforms, while Oakstone focuses on origination, structuring, underwriting discipline and capital deployment.</p>
                    <p>Activities are centred on generating stable income from secured, asset-backed strategies across real estate and related sectors, with a focus on downside protection, covenant strength and clear exit pathways.</p>
                </div>
            </section>

            {/* Areas of Focus Section */}
            <section className="capital-focus">
                <div className="container container-medium">
                    <h2>Areas of Focus</h2>
                    <p>Oakstone Capital’s current activities are concentrated on lending strategies within the UK and US real estate markets, alongside adjacent asset-backed opportunities. Current focus areas include secured lending to experienced sponsors, structured capital for specialist lenders, and select mezzanine positions where risk is clearly defined and supported by appropriate security and covenants.</p>
                </div>
            </section>

            {/* Operating Model Section */}
            <section className="capital-operating">
                <div className="container">
                    <h2>Operating Model</h2>
                    
                    <div className="operating-grid">
                        
                        <div className="operating-col">
                            <p>Oakstone Capital operates in collaboration with a network of international partners and established institutional counterparties.</p>
                        </div>

                        <div className="operating-col">
                            <p>Capital is raised through regulated distribution channels and aligned investment platforms, while deployment is undertaken through carefully selected projects and counterparties.</p>
                        </div>

                        <div className="operating-col">
                            <p>The operating model is designed to ensure alignment between capital providers, operating partners and the underlying assets, supported by disciplined governance, reporting and documentation standards.</p>
                        </div>

                    </div>
                </div>

                {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container container-narrow">
          <h2>Contact Oakstone Partners</h2>
          <p>To discuss Oakstone Capital, including regulated distribution partnerships and our approach to asset-backed fixed income and private credit strategies, please contact us.</p>
          <a href="/about#contact" className="btn-primary"> Contact</a>
        </div>
      </section>
            </section>

        </main>
    );
};

export default Capital;
