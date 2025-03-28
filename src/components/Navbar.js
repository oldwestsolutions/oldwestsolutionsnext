'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  useEffect(() => {
    // Import Bootstrap JS only on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src="/logo.png"
            alt="Old West Solutions"
            width={40}
            height={40}
            className="d-inline-block align-text-top me-2 d-none d-md-inline-block"
          />
          <Image
            src="/logo.png"
            alt="Old West Solutions"
            width={32}
            height={32}
            className="d-inline-block align-text-top me-2 d-md-none"
          />
          <span className="d-none d-md-inline">Old West Solutions</span>
        </Link>
        <div className="navbar-nav ms-auto d-none d-md-flex">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/domains" className="nav-link">
            Domains
          </Link>
          <Link href="/networks" className="nav-link">
            Networks
          </Link>
          <Link href="/servers" className="nav-link">
            Servers
          </Link>
        </div>
      </div>
    </nav>
  );
} 