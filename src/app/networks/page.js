export default function Networks() {
  return (
    <div className="networks-page">
      {/* Hero Section */}
      <section className="page-hero text-center py-5 bg-dark text-light">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Network Solutions</h1>
          <p className="lead mb-4">Enterprise-grade networking solutions for your business infrastructure</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card p-4 h-100">
                <i className="bi bi-diagram-3 display-4 mb-3 text-primary"></i>
                <h3>Network Design</h3>
                <p>Custom network architecture design tailored to your business needs. From small office setups to enterprise-wide solutions.</p>
                <ul className="list-unstyled mt-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Scalable Architecture</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Performance Optimization</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Security Integration</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="service-card p-4 h-100">
                <i className="bi bi-shield-check display-4 mb-3 text-primary"></i>
                <h3>Network Security</h3>
                <p>Comprehensive security solutions to protect your network infrastructure from threats and vulnerabilities.</p>
                <ul className="list-unstyled mt-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Firewall Configuration</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Intrusion Detection</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>VPN Solutions</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="service-card p-4 h-100">
                <i className="bi bi-speedometer2 display-4 mb-3 text-primary"></i>
                <h3>Performance Monitoring</h3>
                <p>24/7 network monitoring and optimization to ensure peak performance and minimal downtime.</p>
                <ul className="list-unstyled mt-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Real-time Monitoring</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Performance Analytics</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Proactive Maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Our Network Solutions?</h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="feature-item d-flex align-items-start">
                <i className="bi bi-gear-fill text-primary me-3 h2 mb-0"></i>
                <div>
                  <h4>Expert Configuration</h4>
                  <p>Our team of certified network engineers ensures optimal setup and configuration of your network infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="feature-item d-flex align-items-start">
                <i className="bi bi-graph-up text-primary me-3 h2 mb-0"></i>
                <div>
                  <h4>Scalable Solutions</h4>
                  <p>Future-proof your network with scalable solutions that grow with your business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center py-5">
        <div className="container">
          <h2 className="mb-4">Ready to Upgrade Your Network?</h2>
          <p className="lead mb-4">Let us help you build a robust and secure network infrastructure.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Get Started Today</a>
        </div>
      </section>
    </div>
  );
} 