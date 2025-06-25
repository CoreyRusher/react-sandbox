import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomToolbar from './CustomToolbar';
import CustomDrawer from './CustomDrawer';

// Example components for routes
function Home() {
  return <h2>Home Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

function AppContent() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer open/close
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Map routes to titles
  const getTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/settings':
        return 'Settings';
      case '/':
      default:
        return 'Home';
    }
  };

  // Dynamic sections for the drawer
  const drawerSections = [
    {
      title: 'General',
      items: [
        { label: 'Home', path: '/' },
        { label: 'Dashboard', path: '/dashboard' },
      ],
    },
    {
      title: 'Settings',
      items: [
        { label: 'Account Settings', path: '/settings' },
        { label: 'Privacy', onClick: () => console.log('Privacy clicked') },
      ],
    },
    {
      title: 'Tools',
      items: [
        { label: 'Reports', onClick: () => console.log('Reports clicked') },
        { label: 'Analytics', onClick: () => console.log('Analytics clicked') },
      ],
    },
    {
      items: [
        {label: 'Test'}
      ]
    }
  ];

  return (
    <div>
      <CustomToolbar title={getTitle()} toggleDrawer={toggleDrawer} />
      <CustomDrawer
        open={drawerOpen}
        toggleDrawer={toggleDrawer}
        sections={drawerSections}
      />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}

function App2() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App2;