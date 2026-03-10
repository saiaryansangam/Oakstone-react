import React from 'react';

const Capital = () => {
    return (
        <main>
            {/* First Section: Intro */}
            <section className="capital-intro">
                <div className="container capital-intro-container">
                    <h2>Oakstone Capital is a boutique private credit and debt capital markets firm specialising in curated global fixed income investment products delivered through a network of international partners</h2>
                    <p>The firm provides capital to real estate related projects and adjacent businesses, focusing on asset-backed strategies designed to generate risk-adjusted income with disciplined downside protection.</p>
                </div>
            </section>

            {/* Image Break Section */}
            <section className="capital-image-break" style={{ backgroundImage: `url('/stpauls.png')` }}>
            </section>

            {/* What We Do Section */}
            <section className="capital-what-we-do">
                <div className="container">
                    <h2>What We Do</h2>
                    
                    <div className="services-grid">
                        
                        <div className="service-col">
                            <h3>Curated Fixed Income</h3>
                            <p>Structured fixed income products backed by tangible real assets, designed to deliver predictable and stable returns.</p>
                        </div>

                        <div className="service-col">
                            <h3>Asset-Backed Strategies</h3>
                            <p>Secured investment strategies focused on real estate and related sectors, generating consistent income with risk mitigation.</p>
                        </div>

                        <div className="service-col">
                            <h3>Regulated Distribution</h3>
                            <p>Products distributed through regulated partners and aligned platforms, ensuring compliance and investor confidence.</p>
                        </div>

                    </div>
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
            </section>

        </main>
    );
};

export default Capital;
