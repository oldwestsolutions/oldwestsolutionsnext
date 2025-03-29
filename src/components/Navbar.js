'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Only show navbar on homepage
  if (pathname !== '/') {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Old West Solutions
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/login" className="btn btn-outline-light">
                <i className="bi bi-box-arrow-in-right"></i>
                Client Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 