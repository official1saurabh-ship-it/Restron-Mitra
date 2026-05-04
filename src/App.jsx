import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import TechnicalGuide from './pages/TechnicalGuide';

// Feature Pages
import Pos_Billing from './Features/Pos_Billing';
import Online_Ordering from './Features/Online_Ordering';
import Table_Management from './Features/Table_Management';
import Inventory_Stock from './Features/Inventory_Stock';
import AnalyticsReport from './Features/AnalyticsReport';
import BranchWiseDetails from './Features/BranchWiseDetails';
import RoleBasedPermission from './Features/RoleBasedPermission';
import AnalyticsReports from './Features/AnalyticsReport';

import ScrollToTop from './components/ScrollToTop';

import Pricing from './pages/Pricing';
import SupportPage from './pages/SupportPage';

function App() {
  return (

    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/technical-guide/:category" element={<TechnicalGuide />} />

        {/* Feature Routes */}
        <Route path="/pos-billing" element={<Pos_Billing />} />
        <Route path="/online-ordering" element={<Online_Ordering />} />
        <Route path="/table-management" element={<Table_Management />} />
        <Route path="/inventory-stock" element={<Inventory_Stock />} />
        <Route path="/analytics-reports" element={<AnalyticsReport />} />
        <Route path="/branch-details" element={<BranchWiseDetails />} />
        <Route path="/role-permissions" element={<RoleBasedPermission />} />
      </Routes>
    </div>

  );
}

export default App;


