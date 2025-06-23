import { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Mail, Clock, Users, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to trigger JivoChat widget
  const openJivoChat = () => {
    // Check if JivoChat is available and trigger it
    if (window.jivo_api) {
      window.jivo_api.open();
    } else {
      // Fallback - try to click the JivoChat widget
      const jivoWidget = document.querySelector('[data-jivo]') || 
                        document.querySelector('#jivo-iframe-container') ||
                        document.querySelector('.ji-chat-button');
      if (jivoWidget) {
        (jivoWidget as HTMLElement).click();
      } else {
        console.log('JivoChat widget not found');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-3xl font-bold text-blue-600">BitPay</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Products</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Solutions</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Developers</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Resources</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Company</a>
              </div>
            </div>

            {/* Customer Support Button */}
            <div className="hidden md:block">
              <Button 
                onClick={openJivoChat}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                <MessageCircle className="mr-2" size={16} />
                Customer Support
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
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
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Solutions</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Developers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Resources</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Company</a>
              <Button 
                onClick={openJivoChat}
                className="bg-blue-600 hover:bg-blue-700 text-white mx-3 mt-2 rounded-lg font-medium w-full"
              >
                <MessageCircle className="mr-2" size={16} />
                Customer Support
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The world's leading
                <span className="block text-blue-300">crypto payment</span>
                processor
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                BitPay has processed over 6 billion+ in crypto payments and payouts. Get dedicated customer support for all your payment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={openJivoChat}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat with Support
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={openJivoChat}
                  className="border-blue-300 text-blue-200 hover:bg-blue-800 px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  <Phone className="mr-2" size={20} />
                  Call Support
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-8 shadow-2xl border border-blue-700">
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
                        <span className="text-blue-600 font-bold">24</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Avg Response Time</span>
                        <span className="text-green-600 font-bold">under 2 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Customer Satisfaction</span>
                        <span className="text-blue-600 font-bold">98.5%</span>
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
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat Support</h3>
              <p className="text-gray-600 mb-6">
                Get instant help through our live chat widget. Available 24/7 for urgent issues.
              </p>
              <Button 
                onClick={openJivoChat}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Start Chat
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our support specialists for complex issues and account help.
              </p>
              <Button 
                variant="outline" 
                onClick={openJivoChat}
                className="border-green-600 text-green-600 hover:bg-green-50 rounded-lg"
              >
                Call Now
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send detailed questions and get comprehensive responses from our team.
              </p>
              <Button 
                variant="outline" 
                onClick={openJivoChat}
                className="border-orange-600 text-orange-600 hover:bg-orange-50 rounded-lg"
              >
                Send Email
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support That Works</h2>
            <p className="text-xl text-blue-200">Trusted by merchants worldwide</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">under 2hrs</div>
              <div className="text-lg text-blue-200">Average Response</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">24/7</div>
              <div className="text-lg text-blue-200">Live Chat Available</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">98.5%</div>
              <div className="text-lg text-blue-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">50K+</div>
              <div className="text-lg text-blue-200">Merchants Helped</div>
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
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg"
          >
            <MessageCircle className="mr-2" size={20} />
            Contact Support Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-300 mb-4">BitPay</div>
              <p className="text-blue-200">
                The world's leading crypto payment processor. Get support for all your merchant needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Help Center</a></li>
                <li><a href="#" onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Contact Support</a></li>
                <li><a href="#" onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Live Chat</a></li>
                <li><a href="#" onClick={openJivoChat} className="hover:text-white transition-colors cursor-pointer">Phone Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
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
  }
}

export default Index;
