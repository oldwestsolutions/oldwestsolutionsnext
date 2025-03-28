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
            className="d-inline-block align-text-top me-2"
          />
          Old West Solutions
        </Link>
        <div className="navbar-nav ms-auto">
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