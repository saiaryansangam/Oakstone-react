import React from 'react';

const Invest = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="invest-hero">
                <div className="container invest-hero-container">
                    <h2>Oakstone Invest is the group's investor access gateway, acting as a structured gateway for eligible investors to access Oakstone-curated asset-backed fixed income and private credit strategies secured against real, tangible UK property collateral.</h2>
                    <p>Access is provided through regulated distribution partners and aligned investment platforms. Eligibility requirements apply, and onboarding is undertaken through the appropriate channel. Details of specific opportunities are available only through the appropriate regulated distribution channel.</p>
                </div>
            </section>

            {/* Image Section */}
            <section className="invest-image-break" style={{ backgroundImage: `url('invest.jpg')` }}>
            </section>

            {/* What We Do Section */}
            <section className="invest-what-we-do">
                <div className="container invest-what-we-do-container">
                    <h2>What We Do</h2>
                    <p>Oakstone Invest supports investor access, communication and allocation into Oakstone-curated strategies, with emphasis on clarity of structure, risk positioning and disciplined governance. The approach is selective by design and oriented towards eligible investors seeking structured exposure to asset-backed UK real estate credit.</p>
                </div>
            </section>

            {/* Investment Strategies Section */}
            <section className="invest-investment-strategies">
                <div className="container invest-investment-strategies-container">
                    <h2>Investment Strategies</h2>
                    <p>Oakstone Invest provides eligible investors with access to asset-backed and property-backed fixed income and private credit strategies secured against real UK property collateral. Strategies are typically structured with defined maturities within 12–24 months, with a security-first approach supported by disciplined underwriting, enforceable security packages and clear exit pathways.</p>
                    <p>Certain strategies are structured to target high single-digit annual income, details are available only through the appropriate regulated distribution channel, are subject to structure and underlying performance, and are not indicative of future results.</p>
                </div>
            </section>

            {/* Strategies Grid Section */}
            <section className="invest-strategies-grid">
                <div className="container invest-strategies-grid-container">
                    <div className="invest-grid">
                        <div className="invest-col">
                            <h3>Asset-Backed Fixed Income</h3>
                            <p>Access may be provided to strategies deployed into UK regulated non-bank lenders providing short-term property finance to UK borrowers, predominantly secured on a first-charge basis against qualifying UK real estate. Underwriting criteria and portfolio composition are pre-agreed, supported by UK legal oversight, enforceable security arrangements and disciplined reporting.</p>
                        </div>

                        <div className="invest-col">
                            <h3>Development Strategies</h3>
                            <div className="invest-subtitle">Income With Profit Participation and Pure Profit Participation</div>
                            <p>Access may be provided to strategies deployed alongside reputable UK property developers via project SPVs, typically where a global high street lender holds the senior first charge and Oakstone participates within the sponsor equity and structured capital stack.</p>
                            <p>Structures may combine an income component with variable profit participation, or be primarily profit-participative, with outcomes linked to project execution and realised exits. Oakstone's capital is commonly structured on a last-in, first-out basis where appropriate, supported by disciplined due diligence, robust documentation and security protections.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Access Works Section */}
            <section className="invest-how-access-works">
                <div className="container invest-how-access-works-container">
                    <h2>How Access Works</h2>
                    <p>Enquiries are handled through the appropriate regulated channel. Eligibility and onboarding are completed via a regulated distribution partner or aligned platform. Access is provided on a series basis with defined maturities.</p>
                </div>
            </section>

            {/* Governance and Reporting Section */}
            <section className="invest-governance-reporting">
                <div className="container invest-governance-reporting-container">
                    <h2>Governance and Reporting</h2>
                    <p>Oakstone Invest places emphasis on disciplined governance and information standards, including clear articulation of structure, security position, underwriting approach and key risk considerations. Reporting and documentation are delivered through the relevant regulated distribution channel and partner platform, supported by UK legal oversight and an emphasis on robust, enforceable security arrangements and clear information standards.</p>
                </div>
            </section>

            {/* Visit Oakstone Invest Section */}
            <section className="invest-visit">
                <div className="container invest-visit-container">
                    <h2>Visit Oakstone Invest</h2>
                    <p>For eligible investor access and distribution enquiries, and for further detail on our investor access approach and investment strategy framework, please visit the Oakstone Invest website.</p>
                    <button className="invest-contact-btn">Contact</button>
                    <div className="invest-disclaimer">
                        <p>Access to strategies is provided through regulated distribution partners and aligned platforms. Eligibility requirements apply. Information is provided for general information only and does not constitute an offer, solicitation or investment advice.</p>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Invest;
