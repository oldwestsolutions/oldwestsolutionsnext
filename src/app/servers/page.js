export default function Servers() {
  return (
    <div className="servers-page">
      {/* Hero Section */}
      <section className="page-hero text-center py-5 bg-dark text-light">
        <div className="container">
          <h1 className="display-4 fw-bold mb-4">Server Solutions</h1>
          <p className="lead mb-4">Reliable and scalable server infrastructure for your mission-critical applications</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="service-card p-4 h-100">
                <i className="bi bi-hdd-rack display-4 mb-3 text-primary"></i>
                <h3>Server Infrastructure</h3>
                <p>Complete server solutions from standalone servers to complex clusters. Built for performance and reliability.</p>
                <ul className="list-unstyled mt-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Dedicated Servers</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Server Clusters</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Load Balancing</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="service-card p-4 h-100">
                <i className="bi bi-cloud-check display-4 mb-3 text-primary"></i>
                <h3>Cloud Integration</h3>
                <p>Seamless integration with leading cloud platforms for hybrid and multi-cloud deployments.</p>
                <ul className="list-unstyled mt-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>AWS Integration</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Azure Solutions</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Hybrid Cloud</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="service-card p-4 h-100">
                <i className="bi bi-shield-lock display-4 mb-3 text-primary"></i>
                <h3>Server Security</h3>
                <p>Comprehensive security measures to protect your server infrastructure from threats.</p>
                <ul className="list-unstyled mt-3">
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Access Control</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Data Encryption</li>
                  <li><i className="bi bi-check-circle-fill text-success me-2"></i>Security Monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Server Management Services</h2>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4">
                <i className="bi bi-gear-wide-connected display-4 mb-3 text-primary"></i>
                <h4>Server Maintenance</h4>
                <p>Regular updates and maintenance to ensure optimal performance.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4">
                <i className="bi bi-graph-up-arrow display-4 mb-3 text-primary"></i>
                <h4>Performance Tuning</h4>
                <p>Optimize your servers for maximum efficiency and speed.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4">
                <i className="bi bi-clock-history display-4 mb-3 text-primary"></i>
                <h4>Backup Solutions</h4>
                <p>Automated backup systems with quick recovery options.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature-card text-center p-4">
                <i className="bi bi-headset display-4 mb-3 text-primary"></i>
                <h4>24/7 Support</h4>
                <p>Round-the-clock technical support and monitoring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section text-center py-5">
        <div className="container">
          <h2 className="mb-4">Need Server Solutions?</h2>
          <p className="lead mb-4">Let's discuss how we can help optimize your server infrastructure.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Contact Our Experts</a>
        </div>
      </section>
    </div>
  );
} 