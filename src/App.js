import React, { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/Main/About/About';
import Projects from './components/Main/Projects/Projects';
import Contact from './components/Main/Contact/Contact';
import Resume from './components/Main/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
  // Define state to track the active section
  const [activeSection, setActiveSection] = useState('About'); // Default to 'About'

  // Function to change the active section based on user selection
  const handleSectionChange = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* Conditionally render the selected Main component */}
      {activeSection === 'About' && <About />}
      {activeSection === 'Projects' && <Projects />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Resume' && <Resume />}

      <Footer />
    </div>
  );
}

export default App;
