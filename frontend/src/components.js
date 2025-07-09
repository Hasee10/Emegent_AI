import React, { useState } from 'react';

// Mock data for services
const servicesData = {
  'power-bi': {
    title: 'Power BI',
    description: 'Transform raw data into interactive dashboards and reports',
    image: 'https://images.unsplash.com/photo-1572025418633-489b46e62332',
    features: ['Data visualization', 'Interactive dashboards', 'Real-time analytics', 'Custom reports']
  },
  'tableau': {
    title: 'Tableau',
    description: 'Leading data visualization platform for business intelligence',
    image: 'https://images.unsplash.com/photo-1700498466261-824cbd01974e',
    features: ['Advanced visualizations', 'Self-service analytics', 'Data storytelling', 'Enterprise ready']
  },
  'excel': {
    title: 'Excel Analytics',
    description: 'Advanced Excel solutions for data analysis and reporting',
    image: 'https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg',
    features: ['Advanced formulas', 'PivotTables', 'Macros', 'Data modeling']
  },
  'wordpress': {
    title: 'WordPress Development',
    description: 'Custom WordPress solutions for modern businesses',
    image: 'https://images.pexels.com/photos/2422556/pexels-photo-2422556.jpeg',
    features: ['Custom themes', 'Plugin development', 'E-commerce', 'SEO optimization']
  },
  'web-dev': {
    title: 'Web Development',
    description: 'Full-stack web development solutions',
    image: 'https://images.unsplash.com/photo-1618544976420-1f213fcf2052',
    features: ['Frontend development', 'Backend APIs', 'Database design', 'Responsive design']
  },
  'bootstrap': {
    title: 'Bootstrap Framework',
    description: 'Responsive web design with Bootstrap CSS framework',
    image: 'https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9',
    features: ['Responsive grids', 'Component library', 'Custom themes', 'Mobile-first design']
  },
  'mern': {
    title: 'MERN Stack',
    description: 'Full-stack JavaScript development with MongoDB, Express, React, Node.js',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f',
    features: ['MongoDB database', 'Express.js backend', 'React frontend', 'Node.js runtime']
  },
  'ml': {
    title: 'Machine Learning',
    description: 'AI-powered solutions for data-driven insights',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    features: ['Predictive models', 'Data preprocessing', 'Model deployment', 'Performance optimization']
  },
  'neural-networks': {
    title: 'Neural Networks',
    description: 'Deep learning solutions for complex problems',
    image: 'https://images.unsplash.com/photo-1660165458059-57cfb6cc87e5',
    features: ['Deep learning models', 'Computer vision', 'Natural language processing', 'Model training']
  },
  'ai': {
    title: 'Artificial Intelligence',
    description: 'Comprehensive AI solutions for business automation',
    image: 'https://images.pexels.com/photos/8728384/pexels-photo-8728384.jpeg',
    features: ['Chatbots', 'Recommendation systems', 'Process automation', 'Intelligent analytics']
  },
  'mlops': {
    title: 'MLOps',
    description: 'Machine Learning Operations for production-ready ML systems',
    image: 'https://images.unsplash.com/photo-1644316902396-9bd0558cd771',
    features: ['Model deployment', 'CI/CD pipelines', 'Model monitoring', 'Version control']
  },
  'devops': {
    title: 'DevOps',
    description: 'Streamline development and operations for faster delivery',
    image: 'https://images.pexels.com/photos/8254894/pexels-photo-8254894.jpeg',
    features: ['CI/CD automation', 'Container orchestration', 'Infrastructure as code', 'Monitoring']
  },
  'aws': {
    title: 'AWS Cloud Services',
    description: 'Cloud infrastructure and services on Amazon Web Services',
    image: 'https://images.unsplash.com/photo-1644316902396-9bd0558cd771',
    features: ['Cloud migration', 'Serverless architecture', 'Storage solutions', 'Security management']
  },
  'business-analysis': {
    title: 'Business Analysis',
    description: 'Strategic analysis and process improvement for business growth',
    image: 'https://images.unsplash.com/photo-1637665662134-db459c1bbb46',
    features: ['Requirements gathering', 'Process modeling', 'Stakeholder management', 'Strategic planning']
  }
};

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Data Visualization in 2025',
    excerpt: 'Exploring emerging trends in Power BI and Tableau for modern business intelligence.',
    date: 'June 20, 2025',
    image: 'https://images.unsplash.com/photo-1572025418633-489b46e62332',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Machine Learning in Production: MLOps Best Practices',
    excerpt: 'How to deploy and maintain ML models at scale with modern MLOps practices.',
    date: 'June 18, 2025',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'AWS vs Azure: Cloud Platform Comparison 2025',
    excerpt: 'Comprehensive comparison of major cloud platforms for modern businesses.',
    date: 'June 15, 2025',
    image: 'https://images.unsplash.com/photo-1644316902396-9bd0558cd771',
    readTime: '6 min read'
  }
];

// Navigation Component
export const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'services', label: 'Services', icon: '🛠️' },
    { id: 'about', label: 'About', icon: 'ℹ️' },
    { id: 'blog', label: 'Blog', icon: '📝' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  return (
    <div className="w-64 bg-black text-white h-full fixed left-0 top-0 p-4 z-40">
      {/* Logo */}
      <div className="mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">V</span>
          </div>
          <h1 className="text-xl font-bold">Vespa Verse</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-800 ${
              activeSection === item.id ? 'bg-gray-800 text-white' : 'text-gray-300'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-4 rounded-lg">
            <h3 className="font-semibold text-sm">Get Started</h3>
            <p className="text-xs text-gray-200 mt-1">Transform your business with our IT services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Header Component
export const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-black text-white p-4 fixed top-0 right-0 left-64 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search services, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800 text-white placeholder-gray-400 px-4 py-2 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-2.5 text-gray-400">
              🔍
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-medium transition-colors">
            Get Quote
          </button>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">VV</span>
          </div>
        </div>
      </div>
    </header>
  );
};

// Service Card Component
export const ServiceCard = ({ service, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 cursor-pointer group transform hover:scale-105"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm">{service.description}</p>
    </div>
  );
};

// Service Detail Modal
export const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
          <p className="text-gray-300 mb-6">{service.description}</p>
          
          <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="text-blue-400 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

// Blog Post Card
export const BlogCard = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer group">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2">{post.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
};

// Home Section
export const HomeSection = ({ servicesData, setSelectedService }) => {
  const featuredServices = Object.entries(servicesData).slice(0, 6);
  const recentServices = Object.entries(servicesData).slice(6, 10);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Transform Your Business with Vespa Verse</h1>
        <p className="text-xl mb-6">Expert IT services for modern businesses - from data analytics to cloud solutions</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Explore Services
        </button>
      </div>

      {/* Featured Services */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map(([key, service]) => (
            <ServiceCard
              key={key}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Recent Services */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Popular Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentServices.map(([key, service]) => (
            <ServiceCard
              key={key}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Services Section
export const ServicesSection = ({ servicesData, setSelectedService, searchQuery }) => {
  const filteredServices = Object.entries(servicesData).filter(([key, service]) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Our Services</h1>
        <div className="text-gray-400">
          {filteredServices.length} services available
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredServices.map(([key, service]) => (
          <ServiceCard
            key={key}
            service={service}
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No services found matching your search.</p>
        </div>
      )}
    </div>
  );
};

// About Section
export const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-6">About Vespa Verse</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          At Vespa Verse, we're passionate about transforming businesses through innovative IT solutions. 
          Our team of expert developers, data scientists, and business analysts work together to deliver 
          cutting-edge technology services that drive growth and efficiency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300">
            To empower businesses with state-of-the-art technology solutions that streamline operations, 
            enhance decision-making, and accelerate digital transformation in the modern era.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To become the leading IT services provider, known for innovation, reliability, and exceptional 
            client partnerships that create lasting value and competitive advantages.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Why Choose Vespa Verse?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-400">Cutting-edge solutions using the latest technologies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">Expertise</h3>
            <p className="text-gray-400">Skilled professionals with deep industry knowledge</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-lg font-semibold text-white mb-2">Partnership</h3>
            <p className="text-gray-400">Collaborative approach to achieve your business goals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blog Section
export const BlogSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Latest Blog Posts</h1>
        <button className="text-blue-400 hover:text-blue-300 transition-colors">
          View All Posts
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-4">
          Subscribe to our newsletter for the latest insights on technology trends and business solutions.
        </p>
        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

// Contact Section
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-gray-300 text-lg">Ready to transform your business? Let's discuss your project.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-blue-400 text-2xl">📧</div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-400">contact@vespaverse.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-blue-400 text-2xl">📞</div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-blue-400 text-2xl">🏢</div>
              <div>
                <h3 className="text-white font-semibold">Office</h3>
                <p className="text-gray-400">123 Tech Street, Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white font-semibold mb-4">Business Hours</h3>
            <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Service Interest</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a service</option>
                <option value="power-bi">Power BI</option>
                <option value="web-development">Web Development</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="cloud-services">Cloud Services</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="4"
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white py-3 rounded-lg font-medium transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Bottom Player/Footer Component
export const BottomPlayer = () => {
  return (
    <div className="bg-gray-900 border-t border-gray-800 p-4 fixed bottom-0 left-64 right-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">VV</span>
          </div>
          <div>
            <h3 className="text-white font-semibold">Ready to get started?</h3>
            <p className="text-gray-400 text-sm">Transform your business today</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            📧
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            📞
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export { servicesData, blogPosts };