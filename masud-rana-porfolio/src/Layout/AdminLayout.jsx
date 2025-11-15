import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If user is already logged in and tries to access login page, redirect to dashboard
    const isAuthenticated = localStorage.getItem('adminToken') === 'demo-token-xyz-123';
    if (isAuthenticated && location.pathname === '/admin/login') {
      navigate('/admin/dashboard');
    }
  }, [location, navigate]);

  return (
    <div className="admin-layout">
      <Outlet />
    </div>
  );
};

export default AdminLayout;