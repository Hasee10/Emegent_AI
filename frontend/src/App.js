import React, { useState } from 'react';
import './App.css';
import { 
  Sidebar, 
  Header, 
  HomeSection, 
  ServicesSection, 
  AboutSection, 
  BlogSection, 
  ContactSection, 
  BottomPlayer,
  ServiceModal,
  servicesData 
} from './components';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection servicesData={servicesData} setSelectedService={setSelectedService} />;
      case 'services':
        return <ServicesSection servicesData={servicesData} setSelectedService={setSelectedService} searchQuery={searchQuery} />;
      case 'about':
        return <AboutSection />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection servicesData={servicesData} setSelectedService={setSelectedService} />;
    }
  };

  return (
    <div className="App min-h-screen bg-gray-900">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="ml-64 pt-20 pb-24 p-8">
        {renderContent()}
      </main>
      
      <BottomPlayer />
      
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
}

export default App;