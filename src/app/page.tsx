import React from 'react';
import Navbar from './Admin/components/Navbar';
import Dashboard from './Admin/dashboard';

const Home = () => {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Dashboard />
    </main>
  );
}

export default Home;

