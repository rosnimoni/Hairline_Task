import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar/Index.js';
import Provider from './pages/Provider/Provider.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Treatments from './pages/Treatments.jsx';
import Discount from './pages/Discount.jsx';
import Financial from './pages/Financial.jsx';
import Users from './pages/Users.jsx';
import Quota from './pages/Quota.jsx';
import SingleProviderDetails from './pages/Provider/SingleProviderDetails/SingleProvider.js';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/provider" element={<Provider />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/financialreporting" element={<Financial />} />
          <Route path="/users" element={<Users />} />
          <Route path="/quota" element={<Quota />} />
          <Route path="/SingleProviderDetails" element={<SingleProviderDetails />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;