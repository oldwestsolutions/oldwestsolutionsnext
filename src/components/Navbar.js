'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Import Bootstrap JS only on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">
          OLD WEST SOLUTIONS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          </ul>
        </div>
      </div>
    </nav>
  );
} 