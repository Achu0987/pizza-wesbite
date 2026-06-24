"use client";
import React from 'react';
import Image from 'next/image';
import pizza1Img from '../../public/images/pizza1.png';
import pizza2Img from '../../public/images/pizza2.png';
import pizzaImg from '../../public/images/pizza.png';

const Speciality = () => {
  const specialities = [
    {
      id: 1,
      name: "MARGHERITA PIZZA",
      image: pizza1Img
    },
    {
      id: 2,
      name: "PEPPERONI PIZZA",
      image: pizza2Img
    },
    {
      id: 3,
      name: "DOUBLE CHEESE PIZZA",
      image: pizzaImg
    }
  ];

  return (
    <section className="bg-white w-full flex flex-col items-center justify-center relative z-30 font-sans" style={{ paddingTop: '70px', paddingBottom: '120px' }}>
      <div className="w-full max-w-[1300px] flex flex-col items-center justify-center px-6">
        {/* Section Headers */}
        <div className="w-full flex flex-col items-center justify-center text-center" style={{ marginBottom: '80px' }}>
          <span
            className="text-[#FBA335] text-[2.5rem] md:text-[3rem] font-medium tracking-wide"
            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive", marginBottom: '20px' }}
          >
            Fresh From Pizzon
          </span>
          <h2 className="text-[3rem] md:text-[4.5rem] font-black text-black uppercase tracking-tighter text-center leading-none">
            OUR SPECIALITY
          </h2>
        </div>

        {/* Speciality Items - Forced Center Alignment with Flexbox */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center" style={{ gap: '100px' }}>
          {specialities.map((item) => (
            <div key={item.id} className="flex flex-col items-center justify-center group cursor-pointer">
              {/* Image Container with Hover Effect */}
              <div className="w-[300px] h-[300px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative transition-transform duration-500 group-hover:scale-105 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Item Name */}
              <h3 className="text-black font-black text-[1.4rem] md:text-[1.6rem] uppercase tracking-widest group-hover:text-[#FBA335] transition-colors duration-300 text-center" style={{ marginTop: '50px' }}>
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="w-full flex justify-center items-center" style={{ marginTop: '70px' }}>
          <button className="bg-[#FBA335] text-white text-[18px] md:text-[22px] font-black uppercase tracking-[0.25em] w-[320px] h-[75px] flex items-center justify-center rounded-full hover:bg-[#e0912f] hover:shadow-[0_15px_40px_rgba(251,163,53,0.5)] hover:-translate-y-2 transition-all duration-300">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
