
import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Mail, Clock, Users, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to trigger JivoChat widget
  const openJivoChat = () => {
    console.log('Attempting to open JivoChat...');
    
    // First, try the JivoChat API
    if (window.jivo_api) {
      console.log('Using jivo_api.open()');
      window.jivo_api.open();
      return;
    }

    // Try to find and click the JivoChat widget with multiple selectors
    const selectors = [
      '[data-jivo]',
      '#jivo-iframe-container',
      '.ji-chat-button',
      '.jivo-chat-button',
      '.jivo_chat_widget',
      'iframe[src*="jivosite.com"]',
      '[class*="jivo"]',
      '[id*="jivo"]'
    ];

    for (const selector of selectors) {
      const jivoWidget = document.querySelector(selector);
      if (jivoWidget) {
        console.log(`Found JivoChat widget with selector: ${selector}`);
        (jivoWidget as HTMLElement).click();
        return;
      }
    }

    // If still not found, try to initialize JivoChat manually
    if (typeof window.jivo_init === 'function') {
      console.log('Initializing JivoChat manually');
      window.jivo_init();
      return;
    }

    // Last resort - open a support URL or show an alert
    console.log('JivoChat widget not found, opening fallback');
    window.open('mailto:support@bitpay.com', '_blank');
  };

  // Wait for JivoChat to load
  useEffect(() => {
    const checkJivoChat = () => {
      if (window.jivo_api || document.querySelector('[data-jivo]') || document.querySelector('#jivo-iframe-container')) {
        console.log('JivoChat is ready');
        return;
      }
      
      // Check again after a short delay
      setTimeout(checkJivoChat, 1000);
    };

    // Start checking after component mounts
    setTimeout(checkJivoChat, 2000);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl font-bold text-[#1a472a]">BitPay</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#support" className="text-gray-700 hover:text-[#1a472a] px-3 py-2 text-sm font-medium transition-colors">Support Center</a>
                <a href="#help" className="text-gray-700 hover:text-[#1a472a] px-3 py-2 text-sm font-medium transition-colors">Help Docs</a>
                <a href="#contact" className="text-gray-700 hover:text-[#1a472a] px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                <a href="#faq" className="text-gray-700 hover:text-[#1a472a] px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
              </div>
            </div>

            {/* Customer Support Button */}
            <div className="hidden md:block">
              <Button 
                onClick={openJivoChat}
                className="bg-[#1a472a] hover:bg-[#2d5a3d] text-white px-6 py-2 rounded-lg font-medium"
              >
                <MessageCircle className="mr-2" size={16} />
                Customer Support
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-[#1a472a] p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#support" className="text-gray-700 hover:text-[#1a472a] block px-3 py-2 text-base font-medium">Support Center</a>
              <a href="#help" className="text-gray-700 hover:text-[#1a472a] block px-3 py-2 text-base font-medium">Help Docs</a>
              <a href="#contact" className="text-gray-700 hover:text-[#1a472a] block px-3 py-2 text-base font-medium">Contact</a>
              <a href="#faq" className="text-gray-700 hover:text-[#1a472a] block px-3 py-2 text-base font-medium">FAQ</a>
              <Button 
                onClick={openJivoChat}
                className="bg-[#1a472a] hover:bg-[#2d5a3d] text-white mx-3 mt-2 rounded-lg font-medium w-full"
              >
                <MessageCircle className="mr-2" size={16} />
                Customer Support
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a472a] via-[#2d5a3d] to-[#0f2419] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a472a]/10 to-[#2d5a3d]/10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Get BitPay
                <span className="block text-[#4ade80]">Customer Support</span>
                when you need it
              </h1>
              <p className="text-xl text-green-100 leading-relaxed max-w-lg">
                BitPay's dedicated support team is here to help with payments, settlements, technical issues, and account questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={openJivoChat}
                  className="bg-[#4ade80] hover:bg-[#22c55e] text-[#1a472a] px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat with Support
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={openJivoChat}
                  className="border-green-300 text-green-200 hover:bg-[#1a472a]/80 px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  <Phone className="mr-2" size={20} />
                  Contact Support
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2d5a3d] to-[#1a472a] rounded-xl p-8 shadow-2xl border border-green-700">
                <div className="bg-white rounded-lg p-6 text-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Support Dashboard</span>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Active Support Tickets</span>
                        <span className="text-[#1a472a] font-bold">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Avg Response Time</span>
                        <span className="text-green-600 font-bold">under 1 hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Customer Satisfaction</span>
                        <span className="text-[#1a472a] font-bold">99.2%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Support Agents Online</span>
                        <span className="text-green-600 font-bold">8 agents</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Support Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Help When You Need It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated support team is here to help you with all your BitPay merchant questions and issues
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-[#1a472a]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat Support</h3>
              <p className="text-gray-600 mb-6">
                Get instant help through our live chat widget. Available 24/7 for urgent issues.
              </p>
              <Button 
                onClick={openJivoChat}
                className="bg-[#1a472a] hover:bg-[#2d5a3d] text-white rounded-lg"
              >
                Start Chat
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-[#1a472a]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Support</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support specialists for complex issues and account help.
              </p>
              <Button 
                variant="outline" 
                onClick={openJivoChat}
                className="border-[#1a472a] text-[#1a472a] hover:bg-green-50 rounded-lg"
              >
                Contact Now
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="text-[#1a472a]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
              <p className="text-gray-600 mb-6">
                Get help anytime, day or night. Our support team is always ready to assist you.
              </p>
              <Button 
                variant="outline" 
                onClick={openJivoChat}
                className="border-[#1a472a] text-[#1a472a] hover:bg-green-50 rounded-lg"
              >
                Get Support
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-20 bg-[#1a472a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support That Works</h2>
            <p className="text-xl text-green-200">Trusted by merchants worldwide</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">under 1hr</div>
              <div className="text-lg text-green-200">Average Response</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">24/7</div>
              <div className="text-lg text-green-200">Live Support Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">99.2%</div>
              <div className="text-lg text-green-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#4ade80] mb-2">50K+</div>
              <div className="text-lg text-green-200">Merchants Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Help with Your BitPay Account?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is ready to assist you with payments, settlements, integrations, and more
          </p>
          <Button 
            size="lg" 
            onClick={openJivoChat}
            className="bg-[#1a472a] hover:bg-[#2d5a3d] text-white px-8 py-4 text-lg font-semibold rounded-lg"
          >
            <MessageCircle className="mr-2" size={20} />
            Contact Support Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a472a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#4ade80] mb-4">BitPay</div>
              <p className="text-green-200">
                The world's leading crypto payment processor. Get support for all your merchant needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-green-200">
                <li><button onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Help Center</button></li>
                <li><button onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Contact Support</button></li>
                <li><button onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Live Chat</button></li>
                <li><button onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Technical Support</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-green-200">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 BitPay, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Add type declaration for JivoChat API
declare global {
  interface Window {
    jivo_api?: {
      open: () => void;
      close: () => void;
    };
    jivo_init?: () => void;
  }
}

export default Index;
