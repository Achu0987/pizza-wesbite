"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import menuBurger1Img from '../../public/images/menu_burger1.png';
import menuBurger2Img from '../../public/images/menu_burger2.png';
import menuPizza1Img from '../../public/images/menu_pizza1.png';
import menuDesert1Img from '../../public/images/menu_desert1.png';
import menuTopBgImg from '../../public/images/menu-top-bg.png';
import menuBottomBgImg from '../../public/images/menu-bottom-bg.png';

const SpecialMenu = () => {
  const [activeTab, setActiveTab] = useState('BURGERS');

  const tabs = ['ALL', 'BURGERS', 'DESERTS', 'DRINKS', 'PASTA', 'PIZZAS', 'SALADS'];

  const allItems = [
    { id: 1, category: 'BURGERS', name: 'SOLLOW BURGER', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus...', price: '$71.00', image: menuBurger1Img },
    { id: 2, category: 'BURGERS', name: 'FRESH BURGER', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...', price: '$58.00', image: menuBurger2Img },
    { id: 3, category: 'PIZZAS', name: 'VEGGIE COMBO', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...', price: '$26.00', image: menuPizza1Img },
    { id: 4, category: 'DESERTS', name: 'SWEET DELIGHT', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...', price: '$18.00', image: menuDesert1Img },
    { id: 5, category: 'BURGERS', name: 'CHEESE BURGER', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...', price: '$45.00', image: menuBurger1Img },
    { id: 6, category: 'PIZZAS', name: 'PEPPERONI', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...', price: '$30.00', image: menuPizza1Img },
    { id: 7, category: 'DESERTS', name: 'CHOCO CAKE', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis...', price: '$15.00', image: menuDesert1Img },
  ];

  const filteredItems = activeTab === 'ALL' 
    ? allItems 
    : allItems.filter(item => item.category === activeTab);

  return (
    <section className="w-full flex flex-col relative z-20 font-sans mt-0">
      {/* Top Torn Edge */}
      <div className="w-full relative z-10 leading-none -mb-1 bg-[#121619]">
        <Image 
          src={menuTopBgImg} 
          alt="Menu top edge" 
          className="w-full h-auto block"
        />
      </div>

      {/* Main Dark Content Area */}
      <div className="w-full bg-[#121619] relative z-0 flex flex-col items-center py-20 px-6">
        
        {/* Headers */}
        <div className="text-center mb-12">
          <span 
            className="text-[#FBA335] text-[2.5rem] md:text-[3rem] font-medium tracking-wide block mb-2"
            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
          >
            Fresh From Pizzon
          </span>
          <h2 className="text-[3rem] md:text-[4.5rem] font-black text-white uppercase tracking-tighter leading-none">
            OUR SPECIAL MENU
          </h2>
        </div>

        {/* Tabs */}
        <div 
          className="flex flex-wrap justify-center items-center bg-[#222222] rounded-full border border-white/5"
          style={{ gap: '15px', marginTop: '30px', marginBottom: '80px', padding: '10px 20px' }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full text-[13px] md:text-[14px] font-bold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#FBA335] text-white shadow-[0_5px_15px_rgba(251,163,53,0.4)]' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              style={{ padding: '10px 25px' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div 
          className="w-full max-w-[1300px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 min-h-[300px]"
          style={{ gap: '50px' }}
        >
          {filteredItems.length > 0 ? (
            filteredItems.slice(0, 4).map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center group cursor-pointer">
                {/* Image Container converted to a Circular Plate */}
                <div 
                  className="relative transition-transform duration-500 group-hover:scale-110 bg-white"
                  style={{ 
                    width: '220px', 
                    height: '220px', 
                    marginBottom: '24px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-white font-black text-[1.1rem] md:text-[1.2rem] uppercase tracking-wider group-hover:text-[#FBA335] transition-colors duration-300" style={{ marginBottom: '12px' }}>
                  {item.name}
                </h3>
                <p className="text-white/50 text-[13px] leading-relaxed px-2" style={{ marginBottom: '16px' }}>
                  {item.description}
                </p>
                <span className="text-[#FBA335] font-bold text-[1.1rem]">
                  {item.price}
                </span>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center text-white/50 py-10">
              Items coming soon...
            </div>
          )}
        </div>

        {/* Load More Button */}
        <div style={{ marginTop: '40px' }}>
          <button 
            className="bg-[#FBA335] text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-[#e0912f] hover:shadow-[0_10px_30px_rgba(251,163,53,0.5)] hover:-translate-y-1 transition-all duration-300"
            style={{ padding: '18px 40px', fontSize: '16px' }}
          >
            LOAD MORE
          </button>
        </div>

      </div>

      {/* Bottom Torn Edge */}
      <div className="w-full relative z-10 leading-none -mt-1 bg-[#121619]">
        <Image 
          src={menuBottomBgImg} 
          alt="Menu bottom edge" 
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
};

export default SpecialMenu;
