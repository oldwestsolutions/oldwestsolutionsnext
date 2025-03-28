import { Analytics } from "@vercel/analytics/react";
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar';
import BootstrapClient from '@/components/BootstrapClient';
import Link from 'next/link';

export const metadata = {
  title: 'Old West Solutions - Domain & Web Solutions',
  description: 'Your trusted partner in domain brokerage and web solutions. Professional services for domain acquisition, website templates, and digital asset management.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        <Navbar />
        <main className="container my-4">
          {children}
        </main>
        <Analytics />
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-column">
                <h3 className="footer-title">About Us</h3>
                <p className="mb-4">
                  Old West Solutions is your trusted partner in domain brokerage and web solutions, providing professional services since 2010.
                </p>
                <div className="footer-social">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-column">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-links">
                  <li><Link href="/domains">Domain Services</Link></li>
                  <li><Link href="/templates">Web Templates</Link></li>
                  <li><Link href="/hosting">Hosting Solutions</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-column">
                <h3 className="footer-title">Services</h3>
                <ul className="footer-links">
                  <li><Link href="/domain-brokerage">Domain Brokerage</Link></li>
                  <li><Link href="/domain-valuation">Domain Valuation</Link></li>
                  <li><Link href="/website-templates">Website Templates</Link></li>
                  <li><Link href="/domain-security">Domain Security</Link></li>
                  <li><Link href="/consulting">Consulting Services</Link></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-column">
                <h3 className="footer-title">Contact Info</h3>
                <div className="footer-contact">
                  <p><i className="bi bi-geo-alt"></i> 123 Business Ave, Suite 100<br />San Francisco, CA 94107</p>
                  <p><i className="bi bi-telephone"></i> +1 (555) 123-4567</p>
                  <p><i className="bi bi-envelope"></i> contact@oldwestsolutions.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p>&copy; {new Date().getFullYear()} Old West Solutions. All rights reserved. | <Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
