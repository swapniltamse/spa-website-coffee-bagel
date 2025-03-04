import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const BagelLandingPage = () => {
  // Data for the pie chart based on the bill
  const data = [
    { name: 'Plain Tofu Sandwich', value: 4.05, color: '#8B4513' },
    { name: 'Coffee (Small, Special Blend)', value: 1.80, color: '#6F4E37' },
    { name: 'Tax', value: 0.52, color: '#A9A9A9' }
  ];

  // Sketch-like styling
  const sketchStyle = {
    filter: 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))',
  };

  return (
    <div className="min-h-screen bg-amber-50 font-serif">
      {/* Hero Section */}
      <header className="relative py-12 bg-amber-100 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">Murray's Bagels</h1>
            <p className="text-lg text-amber-700 mb-6">New York's Finest Handcrafted Bagels Since 1996</p>
            <p className="text-amber-700 mb-6">500 6th Avenue, New York, NY 10011</p>
            <div className="flex gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-full font-bold transition">
                Order Online
              </button>
              <button className="bg-transparent border-2 border-amber-600 text-amber-600 py-2 px-6 rounded-full font-bold hover:bg-amber-600 hover:text-white transition">
                Our Menu
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            {/* Artistic sketch effect for the bagel */}
            <div style={sketchStyle} className="relative">
              <svg width="350" height="300" viewBox="0 0 350 300" className="overflow-visible">
                {/* Bagel sketch */}
                <g className="transform -rotate-6 translate-x-10">
                  {/* Paper wrapper */}
                  <path d="M50 120 Q120 100, 250 120 Q280 150, 300 200 Q250 250, 150 240 Q80 230, 50 180 Q40 150, 50 120" fill="#f5f5dc" stroke="#888" strokeWidth="1" />
                  
                  {/* Bagel outline */}
                  <ellipse cx="170" cy="160" rx="90" ry="45" fill="#cd9b4a" stroke="#8b4513" strokeWidth="2" />
                  <ellipse cx="170" cy="160" rx="70" ry="35" fill="#e6c078" stroke="#8b4513" strokeWidth="1" />
                  
                  {/* Sesame seeds */}
                  <g fill="#f5f5dc">
                    <circle cx="140" cy="135" r="2" />
                    <circle cx="150" cy="130" r="2" />
                    <circle cx="160" cy="132" r="2" />
                    <circle cx="170" cy="129" r="2" />
                    <circle cx="180" cy="133" r="2" />
                    <circle cx="190" cy="135" r="2" />
                    <circle cx="130" cy="145" r="2" />
                    <circle cx="142" cy="150" r="2" />
                    <circle cx="155" cy="147" r="2" />
                    <circle cx="165" cy="152" r="2" />
                    <circle cx="175" cy="148" r="2" />
                    <circle cx="185" cy="153" r="2" />
                    <circle cx="195" cy="147" r="2" />
                    <circle cx="205" cy="145" r="2" />
                  </g>
                  
                  {/* Cut line showing inside */}
                  <path d="M100 160 Q170 170, 240 160" fill="none" stroke="#8b4513" strokeWidth="2" strokeDasharray="5,5" />
                  
                  {/* Tofu filling hint */}
                  <rect x="140" y="165" width="60" height="10" fill="#f0f0f0" stroke="#dddddd" strokeWidth="1" />
                </g>
                
                {/* Coffee cup sketch */}
                <g transform="translate(240, 200) scale(0.7)">
                  <path d="M20 30 Q20 10, 40 10 L80 10 Q100 10, 100 30 L90 90 Q90 100, 80 100 L40 100 Q30 100, 30 90 Z" fill="#f5f5dc" stroke="#888" strokeWidth="2" />
                  <path d="M20 30 L100 30" stroke="#888" strokeWidth="2" />
                  <path d="M30 30 L40 10" stroke="#888" strokeWidth="1" />
                  <path d="M90 30 L80 10" stroke="#888" strokeWidth="1" />
                  <path d="M35 70 Q60 65, 85 70" fill="none" stroke="#6F4E37" strokeWidth="2" />
                  <text x="60" y="55" textAnchor="middle" fill="#6F4E37" fontSize="12">Special</text>
                  <text x="60" y="85" textAnchor="middle" fill="#6F4E37" fontSize="10">Blend</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-amber-800 mb-8 text-center">Our Signature Items</h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex-1 max-w-md">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Value Breakdown</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Plain Tofu Sand Health Bagel</span>
                  <span>$4.05</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Coffee (Small, Special Blend)</span>
                  <span>$1.80</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Tax</span>
                  <span>$0.52</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                  <span>TOTAL</span>
                  <span>$6.37</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 flex-1 max-w-md">
              <h3 className="text-xl font-bold text-amber-800 mb-4">About Our Bagels</h3>
              <p className="mb-4">At Murray's Bagels, we're committed to making authentic New York bagels using traditional methods that have been perfected since 1996.</p>
              <p className="mb-4">Our bagels are kettle-boiled and then baked to perfection, giving them that distinctive chewy interior and crisp exterior that New York bagels are famous for.</p>
              <p className="mb-4">We offer a variety of options including our popular Health Bagel, perfect for our plant-based customers seeking nutritious alternatives like our Plain Tofu Sandwich.</p>
              <p>Pair your bagel with our house Special Blend coffee for the perfect New York breakfast experience!</p>
              <button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white py-2 px-6 rounded-full font-bold transition w-full">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-800 mb-8">Visit Us Today</h2>
          <p className="text-lg mb-4">500 6th Avenue, New York, NY 10011</p>
          <p className="mb-6">Call for orders: 212-462-2830</p>
          <p className="text-amber-600 mb-8">www.murraysbagels.com</p>
          <div className="max-w-md mx-auto px-8 py-4 bg-amber-100 rounded-lg border border-amber-200">
            <p className="font-bold text-amber-800">LET US CATER YOUR NEXT EVENT</p>
            <button className="mt-4 bg-transparent border-2 border-amber-600 text-amber-600 py-2 px-6 rounded-full font-bold hover:bg-amber-600 hover:text-white transition">
              Catering Info
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Murray's Bagels</h2>
              <p>Serving New York since 1996</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Hours</a>
              <a href="#" className="hover:text-white">Location</a>
              <a href="#" className="hover:text-white">Menu</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BagelLandingPage;