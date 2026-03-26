import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/resume', label: 'Resume' },
  { to: '/projects/my-travel', label: 'MyTravel' },
  { to: '/projects/2', label: 'Trip Planner' }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Brad Moran
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        aria-controls="main-nav-links"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      {/* Plain Bootstrap collapse + .show — avoids react-bootstrap Collapse / react-transition-group (problematic on iOS Safari). */}
      <div
        className={`navbar-collapse collapse${open ? ' show' : ''}`}
        id="main-nav-links"
      >
        <div className="navbar-nav mr-auto">
          {links.map(({ to, label }) => (
            <Link key={to} className="nav-link" to={to}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
