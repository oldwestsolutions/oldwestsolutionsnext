import Link from 'next/link';
import Image from 'next/image';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Welcome to Old West Solutions</h1>
          <p className="lead mb-4">Your trusted partner in premium domain brokerage and professional web solutions</p>
          <div className="d-flex justify-content-center gap-3">
            <Link href="/domains" className="btn btn-primary btn-lg">Explore Domains</Link>
            <Link href="/contact" className="btn btn-outline-primary btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="service-column">
                <h2 className="service-title">Do more your way</h2>
                <p className="service-description">
                  Optimize what matters most to you and your business. Our domain and template solutions help you work smarter, not harder.
                </p>
                <ul className="service-features">
                  <li className="service-feature">
                    <i className="bi bi-check-circle"></i>
                    <span>90% faster domain acquisition process</span>
                  </li>
                  <li className="service-feature">
                    <i className="bi bi-check-circle"></i>
                    <span>Voted #1 domain brokerage platform by industry experts</span>
                  </li>
                  <li className="service-feature">
                    <i className="bi bi-check-circle"></i>
                    <span>Easy automation with hundreds of pre-built website templates</span>
                  </li>
                </ul>
                <Link href="/services" className="btn btn-primary service-cta">
                  Get started
                </Link>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="service-column">
                <h2 className="service-title">Confidently manage assets</h2>
                <p className="service-description">
                  Secure your digital ecosystem with the right fit of domains, templates, and resources for your business growth.
                </p>
                <ul className="service-features">
                  <li className="service-feature">
                    <i className="bi bi-check-circle"></i>
                    <span>Premium domain portfolio management following industry standards</span>
                  </li>
                  <li className="service-feature">
                    <i className="bi bi-check-circle"></i>
                    <span>Fortune 500 level expertise in domain valuation and acquisition</span>
                  </li>
                  <li className="service-feature">
                    <i className="bi bi-check-circle"></i>
                    <span>Comprehensive suite of services from domain search to website launch</span>
                  </li>
                </ul>
                <Link href="/security" className="btn btn-primary service-cta">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Old West Solutions?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <i className="bi bi-shield-check display-4 mb-3"></i>
                <h3>Secure Transactions</h3>
                <p>Industry-leading security protocols for all domain transfers and financial transactions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <i className="bi bi-graph-up display-4 mb-3"></i>
                <h3>Market Analysis</h3>
                <p>Expert market analysis and valuation for optimal domain investment decisions.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4">
                <i className="bi bi-people display-4 mb-3"></i>
                <h3>Expert Support</h3>
                <p>Dedicated team of professionals available 24/7 to assist with your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-primary">25,000+</h3>
                <p className="lead">Successful Domain Transfers</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-primary">500,000+</h3>
                <p className="lead">Website Templates</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="stat-card">
                <h3 className="display-4 fw-bold text-primary">9M+</h3>
                <p className="lead">Active Websites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4">
                <div className="testimonial-content">
                  <i className="bi bi-quote display-4 mb-3"></i>
                  <p className="mb-4">"Old West Solutions helped us secure our perfect domain name at a great price. Their service was exceptional!"</p>
                  <div className="testimonial-author">
                    <h5 className="mb-1">John Smith</h5>
                    <p className="text-muted">CEO, Tech Innovators</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4">
                <div className="testimonial-content">
                  <i className="bi bi-quote display-4 mb-3"></i>
                  <p className="mb-4">"The website templates are modern and professional. Launching our site was faster than ever!"</p>
                  <div className="testimonial-author">
                    <h5 className="mb-1">Sarah Johnson</h5>
                    <p className="text-muted">Marketing Director, Creative Co.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4">
                <div className="testimonial-content">
                  <i className="bi bi-quote display-4 mb-3"></i>
                  <p className="mb-4">"Their domain valuation service helped us make informed decisions for our portfolio investments."</p>
                  <div className="testimonial-author">
                    <h5 className="mb-1">Michael Brown</h5>
                    <p className="text-muted">Investment Manager, Domain Capital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">Let us help you find the perfect domain name and website solution for your business.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Additional Service Bubbles */}
      <section className="service-bubbles py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Comprehensive Services</h2>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-globe"></i>
                <h3>Domain Brokerage</h3>
                <p>Expert assistance in buying, selling, and negotiating premium domain names for your business.</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-brush"></i>
                <h3>Web Templates</h3>
                <p>Professional, customizable website templates designed for modern businesses.</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-shield-check"></i>
                <h3>Domain Security</h3>
                <p>Comprehensive domain protection and management services to secure your digital assets.</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-graph-up"></i>
                <h3>Domain Valuation</h3>
                <p>Accurate domain appraisals and market analysis to maximize your investment.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-gear"></i>
                <h3>Technical Support</h3>
                <p>24/7 expert technical assistance for all your domain and website needs.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-lightning"></i>
                <h3>Fast Transfer</h3>
                <p>Quick and secure domain transfer services with minimal downtime.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-search"></i>
                <h3>Domain Research</h3>
                <p>In-depth market research and domain availability analysis.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="service-bubble">
                <i className="bi bi-lock"></i>
                <h3>Privacy Protection</h3>
                <p>Advanced domain privacy and WHOIS protection services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
