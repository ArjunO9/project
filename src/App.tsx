import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import InfrastructurePage from './pages/InfrastructurePage';
import MarketExpansionPage from './pages/MarketExpansionPage';
import AboutUsPage from './pages/AboutUsPage';
import TilesAdhesivePage from './pages/TilesAdhesivePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="infrastructure" element={<InfrastructurePage />} />
          <Route path="market-expansion" element={<MarketExpansionPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="tiles-adhesive" element={<TilesAdhesivePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;