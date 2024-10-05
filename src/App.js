import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import ImageView from './components/ImageView';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/image/:id" element={<ImageView />} />
      </Routes>
    </Router>
  );
}

export default App;
