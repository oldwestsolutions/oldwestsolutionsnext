export default function Domains() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Available Domains</h1>
      
      {/* Search Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-md-8">
          <div className="input-group">
            <input type="text" className="form-control form-control-lg" placeholder="Search for a domain..." />
            <button className="btn btn-primary btn-lg">Search</button>
          </div>
        </div>
      </div>

      {/* Domain Listings */}
      <div className="row g-4">
        {/* Premium Domains */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">techstart.com</h3>
              <p className="card-text">Premium domain perfect for technology startups and innovation companies.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">$15,000</span>
                <button className="btn btn-primary">Inquire</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">digimarket.net</h3>
              <p className="card-text">Ideal for digital marketing agencies and online businesses.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">$8,500</span>
                <button className="btn btn-primary">Inquire</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">healthcare.io</h3>
              <p className="card-text">Perfect for healthcare technology and medical service providers.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">$12,000</span>
                <button className="btn btn-primary">Inquire</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">foodie.app</h3>
              <p className="card-text">Great for food delivery services and restaurant apps.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">$7,500</span>
                <button className="btn btn-primary">Inquire</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">fitness.co</h3>
              <p className="card-text">Perfect for fitness trainers and wellness businesses.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">$6,500</span>
                <button className="btn btn-primary">Inquire</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">edupro.org</h3>
              <p className="card-text">Ideal for educational institutions and online learning platforms.</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">$9,000</span>
                <button className="btn btn-primary">Inquire</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <nav className="mt-5">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1">Previous</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
} 