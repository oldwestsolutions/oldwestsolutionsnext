'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ExecutiveDashboard() {
  const [activeServices, setActiveServices] = useState(0);
  const [totalWebsites, setTotalWebsites] = useState(0);
  const [systemStatus, setSystemStatus] = useState('operational');
  const router = useRouter();

  // Simulated data - replace with real data in production
  useEffect(() => {
    setActiveServices(12);
    setTotalWebsites(150);
    setSystemStatus('operational');
  }, []);

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="executive-dashboard" style={{ paddingTop: '0' }}>
      <div className="container-fluid">
        <div className="row">
          {/* Main Content */}
          <main className="col-12 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-5 pb-2 mb-4">
              <div>
                <h1 className="h2 mb-1">Executive Dashboard</h1>
                <p className="text-muted mb-0">Welcome back, Administrator</p>
              </div>
              <div className="btn-toolbar mb-2 mb-md-0">
                <button onClick={handleLogout} className="btn btn-outline-danger me-2">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Logout
                </button>
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-share me-1"></i>
                    Share
                  </button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    <i className="bi bi-download me-1"></i>
                    Export
                  </button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  <i className="bi bi-calendar3 me-1"></i>
                  This week
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="stat-bubble">
                  <div className="stat-icon">
                    <i className="bi bi-gear"></i>
                  </div>
                  <div className="stat-content">
                    <h3>{activeServices}</h3>
                    <p>Active Services</p>
                    <span className="trend positive">
                      <i className="bi bi-arrow-up"></i> 2 new this week
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-bubble">
                  <div className="stat-icon">
                    <i className="bi bi-globe"></i>
                  </div>
                  <div className="stat-content">
                    <h3>{totalWebsites}</h3>
                    <p>Total Websites</p>
                    <span className="trend positive">
                      <i className="bi bi-arrow-up"></i> 5 new this week
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-bubble">
                  <div className="stat-icon">
                    <i className="bi bi-shield-check"></i>
                  </div>
                  <div className="stat-content">
                    <h3 className="text-capitalize">{systemStatus}</h3>
                    <p>System Status</p>
                    <span className="trend positive">
                      <i className="bi bi-check-circle"></i> All systems operational
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Cards */}
            <div className="row g-4 mb-5">
              <div className="col-md-6 col-lg-3">
                <div className="service-bubble">
                  <i className="bi bi-hdd-network"></i>
                  <h3>Server Status</h3>
                  <p>All servers running at optimal performance</p>
                  <div className="status-indicator"></div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-bubble">
                  <i className="bi bi-shield-lock"></i>
                  <h3>Security</h3>
                  <p>Latest security patches applied</p>
                  <div className="status-indicator"></div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-bubble">
                  <i className="bi bi-cloud-check"></i>
                  <h3>Backup Status</h3>
                  <p>Last backup completed 2 hours ago</p>
                  <div className="status-indicator"></div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="service-bubble">
                  <i className="bi bi-graph-up"></i>
                  <h3>Performance</h3>
                  <p>System load at 45%</p>
                  <div className="status-indicator"></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="row">
              <div className="col-12">
                <div className="activity-bubble">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="mb-0">Recent Activity</h5>
                    <button className="btn btn-sm btn-outline-secondary">
                      View All
                    </button>
                  </div>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Time</th>
                          <th>Action</th>
                          <th>Status</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2 hours ago</td>
                          <td>Website Backup</td>
                          <td><span className="badge bg-success">Completed</span></td>
                          <td>example.com</td>
                        </tr>
                        <tr>
                          <td>4 hours ago</td>
                          <td>Service Update</td>
                          <td><span className="badge bg-success">Completed</span></td>
                          <td>DNS Service</td>
                        </tr>
                        <tr>
                          <td>6 hours ago</td>
                          <td>Security Scan</td>
                          <td><span className="badge bg-success">Completed</span></td>
                          <td>All Systems</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 