import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import TrialModal from './components/TrialModal';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleOpenTrial = (courseName = '') => {
    setSelectedCourse(courseName);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
    setSelectedCourse('');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-navy-900 text-cream-100 selection:bg-gold-500 selection:text-navy-950">
        <Navbar onOpenTrial={() => handleOpenTrial()} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenTrial={handleOpenTrial} />} />
            <Route path="/courses" element={<Courses onOpenTrial={handleOpenTrial} />} />
            <Route path="/about" element={<About onOpenTrial={handleOpenTrial} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenTrial={handleOpenTrial} />} />
          </Routes>
        </main>

        <Footer />
        <FloatingButtons />

        {/* Global 3-Day Free Trial Modal */}
        <TrialModal
          isOpen={trialModalOpen}
          onClose={handleCloseTrial}
          preselectedCourse={selectedCourse}
        />
      </div>
    </Router>
  );
}
