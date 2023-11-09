import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';  // Correct the import path
import BreedDetails from './pages/BreedDetails';  // Correct the import path
import Search from './pages/Search';  // Correct the import path

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breed/:breedId" element={<BreedDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
