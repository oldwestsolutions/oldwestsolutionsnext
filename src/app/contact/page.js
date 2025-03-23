export default function Contact() {
  return (
    <div className="container">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row">
        {/* Contact Form */}
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title mb-4">Send us a Message</h2>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstName" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="service" className="form-label">Service Interest</label>
                    <select className="form-select" id="service" required>
                      <option value="">Select a service...</option>
                      <option value="domains">Domain Brokerage</option>
                      <option value="templates">Website Templates</option>
                      <option value="vmware">VMware Services</option>
                      <option value="hosting">Hosting Solutions</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" required></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Contact Information</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  123 Business Street<br />
                  Suite 100<br />
                  New York, NY 10001
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  (555) 123-4567
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  info@domainbroker.com
                </li>
                <li>
                  <i className="bi bi-clock-fill text-primary me-2"></i>
                  Mon-Fri: 9:00 AM - 6:00 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Follow Us</h3>
              <div className="d-flex gap-3">
                <a href="#" className="text-primary fs-4">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-primary fs-4">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-primary fs-4">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-primary fs-4">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1648081234567!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 