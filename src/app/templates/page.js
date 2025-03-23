export default function Templates() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Website Templates</h1>

      {/* Template Categories */}
      <div className="row mb-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">Wix Templates</h2>
              <p className="card-text">Professional and customizable templates for your business</p>
              <a href="#wix-templates" className="btn btn-primary">View Wix Templates</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">Squarespace Templates</h2>
              <p className="card-text">Elegant and modern designs for your online presence</p>
              <a href="#squarespace-templates" className="btn btn-primary">View Squarespace Templates</a>
            </div>
          </div>
        </div>
      </div>

      {/* Wix Templates Section */}
      <section id="wix-templates" className="mb-5">
        <h2 className="text-center mb-4">Wix Templates</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/wix-template-1.jpg" className="card-img-top" alt="Business Template" />
              <div className="card-body">
                <h3 className="card-title">Business Pro</h3>
                <p className="card-text">Professional template perfect for corporate websites and business portfolios.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">$299</span>
                  <button className="btn btn-primary">Preview</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/wix-template-2.jpg" className="card-img-top" alt="E-commerce Template" />
              <div className="card-body">
                <h3 className="card-title">E-commerce Plus</h3>
                <p className="card-text">Full-featured e-commerce template with integrated payment systems.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">$399</span>
                  <button className="btn btn-primary">Preview</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/wix-template-3.jpg" className="card-img-top" alt="Portfolio Template" />
              <div className="card-body">
                <h3 className="card-title">Creative Portfolio</h3>
                <p className="card-text">Stunning portfolio template for artists, photographers, and creatives.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">$249</span>
                  <button className="btn btn-primary">Preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Squarespace Templates Section */}
      <section id="squarespace-templates" className="mb-5">
        <h2 className="text-center mb-4">Squarespace Templates</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/squarespace-template-1.jpg" className="card-img-top" alt="Modern Business Template" />
              <div className="card-body">
                <h3 className="card-title">Modern Business</h3>
                <p className="card-text">Clean and modern design for professional businesses.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">$349</span>
                  <button className="btn btn-primary">Preview</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/squarespace-template-2.jpg" className="card-img-top" alt="Restaurant Template" />
              <div className="card-body">
                <h3 className="card-title">Restaurant & Cafe</h3>
                <p className="card-text">Perfect for restaurants, cafes, and food businesses.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">$299</span>
                  <button className="btn btn-primary">Preview</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100">
              <img src="/squarespace-template-3.jpg" className="card-img-top" alt="Blog Template" />
              <div className="card-body">
                <h3 className="card-title">Blog & Magazine</h3>
                <p className="card-text">Elegant template for bloggers and online magazines.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="h5 mb-0">$249</span>
                  <button className="btn btn-primary">Preview</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <div className="text-center py-5 bg-light rounded">
        <h2>Need Help Choosing?</h2>
        <p className="lead">Our experts can help you find the perfect template for your needs.</p>
        <a href="/contact" className="btn btn-primary btn-lg">Contact Us</a>
      </div>
    </div>
  );
} 