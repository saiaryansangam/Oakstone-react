import React from 'react';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '80vh', backgroundImage: `url('about-hero1.jpg')` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content container" >
          <h2>A UK-anchored group operating<br/>internationally across capital, specialist<br/>finance and senior advisory.</h2>
          <p>Oakstone Partners works with professional partners, investors and businesses in situations where structure, capital and commercial judgement are decisive. The firm’s activities span curated fixed income and private credit strategies, specialist UK property finance, senior corporate and strategic advisory.</p>
        </div>
      </section>

      {/* Intro Statement Section */}
      <section className="intro-statement"> 
        <div className="container container-narrow">
          <p>Across the group, we operate with a disciplined, process-led approach informed by high standards of governance and risk management, prioritising clear structuring, robust execution and commercially durable outcomes.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container services-grid">
          
          <div className="service-col">
            <h3>Capital</h3>
            <p>Curated fixed income products and capital deployment into asset-backed real estate and related businesses.</p>
          </div>

          <div className="service-col">
            <h3>Finance</h3>
            <p>Specialist UK property finance brokerage supporting borrowers and intermediaries across straightforward and complex lending scenarios.</p>
          </div>

          <div className="service-col">
            <h3>Advisory</h3>
            <p>Senior corporate and strategic advisory services for principals, and businesses operating internationally.</p>
          </div>

        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work">
        <div className="container container-medium">
          <h2>How We Work</h2>
          <p>Oakstone Partners is selective by design. Our work is senior-led and approached with clarity of scope, disciplined analysis and direct communication. We focus on establishing the execution path early — including risk positioning, stakeholder alignment and realistic timelines and delivering outcomes that are commercially robust and durable.</p>
          <p>To help us respond appropriately, initial enquiries should include the objective, relevant timelines and the intended exit or outcome.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container container-narrow">
          <h2>Partner with Oakstone</h2>
          <p>Connect with our investment desk to discuss bespoke financing solutions tailored to your unique capital structure requirements.</p>
          <a href="/about#contact" className="btn-primary">Contact</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
