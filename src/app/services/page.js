export default function Services() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Our Services</h1>

      {/* VMware Services Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">VMware Solutions</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-cloud-check fs-1 text-primary mb-3"></i>
                <h3 className="card-title">Cloud Infrastructure</h3>
                <p className="card-text">Enterprise-grade cloud solutions with VMware vSphere and vCloud Suite.</p>
                <ul className="list-unstyled text-start">
                  <li>✓ High Availability</li>
                  <li>✓ Disaster Recovery</li>
                  <li>✓ Resource Management</li>
                </ul>
                <a href="/contact" className="btn btn-primary mt-3">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                <h3 className="card-title">Security Solutions</h3>
                <p className="card-text">Advanced security with VMware NSX and Carbon Black.</p>
                <ul className="list-unstyled text-start">
                  <li>✓ Network Security</li>
                  <li>✓ Endpoint Protection</li>
                  <li>✓ Threat Detection</li>
                </ul>
                <a href="/contact" className="btn btn-primary mt-3">Learn More</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="bi bi-gear fs-1 text-primary mb-3"></i>
                <h3 className="card-title">Digital Workspace</h3>
                <p className="card-text">Modern workspace solutions with VMware Workspace ONE.</p>
                <ul className="list-unstyled text-start">
                  <li>✓ Device Management</li>
                  <li>✓ Application Delivery</li>
                  <li>✓ Identity Management</li>
                </ul>
                <a href="/contact" className="btn btn-primary mt-3">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Services Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Hosting Solutions</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">Managed Hosting</h3>
                <p className="card-text">Complete hosting solutions with 24/7 support and monitoring.</p>
                <ul className="list-unstyled">
                  <li>✓ Dedicated Servers</li>
                  <li>✓ VPS Hosting</li>
                  <li>✓ Cloud Hosting</li>
                  <li>✓ Managed WordPress</li>
                </ul>
                <div className="mt-3">
                  <a href="/contact" className="btn btn-primary">Get Started</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">SSL & Security</h3>
                <p className="card-text">Comprehensive security solutions for your online presence.</p>
                <ul className="list-unstyled">
                  <li>✓ SSL Certificates</li>
                  <li>✓ DDoS Protection</li>
                  <li>✓ Firewall Services</li>
                  <li>✓ Regular Backups</li>
                </ul>
                <div className="mt-3">
                  <a href="/contact" className="btn btn-primary">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mb-5">
        <h2 className="text-center mb-4">Pricing Plans</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">Basic</h3>
                <h4 className="text-primary mb-4">$99/mo</h4>
                <ul className="list-unstyled">
                  <li>2 Virtual Machines</li>
                  <li>20GB Storage</li>
                  <li>Basic Support</li>
                  <li>Standard Security</li>
                </ul>
                <a href="/contact" className="btn btn-outline-primary mt-3">Choose Plan</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-primary">
              <div className="card-body text-center">
                <h3 className="card-title">Professional</h3>
                <h4 className="text-primary mb-4">$199/mo</h4>
                <ul className="list-unstyled">
                  <li>5 Virtual Machines</li>
                  <li>50GB Storage</li>
                  <li>Priority Support</li>
                  <li>Advanced Security</li>
                </ul>
                <a href="/contact" className="btn btn-primary mt-3">Choose Plan</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h3 className="card-title">Enterprise</h3>
                <h4 className="text-primary mb-4">Custom</h4>
                <ul className="list-unstyled">
                  <li>Unlimited VMs</li>
                  <li>Custom Storage</li>
                  <li>24/7 Support</li>
                  <li>Enterprise Security</li>
                </ul>
                <a href="/contact" className="btn btn-outline-primary mt-3">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="text-center py-5 bg-light rounded">
        <h2>Ready to Get Started?</h2>
        <p className="lead">Contact us to discuss your specific needs and get a custom solution.</p>
        <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
      </div>
    </div>
  );
} 