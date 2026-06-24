"use client";
import React from 'react';
import Image from 'next/image';
import ourStoryImg from '../../public/images/our-story.png';

const ReservationSection = () => {
  return (
    <section 
      className="w-full bg-white flex justify-center font-sans relative z-30"
      style={{ padding: '120px 24px', marginTop: '-2px' }}
    >
      <div 
        className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between"
        style={{ gap: '80px' }}
      >
        
        {/* Left Content (Form) */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          
          {/* Subtitle with Red Line */}
          <div className="flex items-center" style={{ marginBottom: '16px' }}>
            <span className="text-[#e23744] text-[18px] md:text-[20px] font-bold tracking-wide">
              Reservation
            </span>
            <div className="bg-[#e23744]" style={{ height: '2px', width: '50px', marginLeft: '16px' }}></div>
          </div>
          
          {/* Title */}
          <h2 
            className="font-black text-black tracking-tight leading-none"
            style={{ fontSize: '3.5rem', marginBottom: '40px' }}
          >
            Book A Table Now!
          </h2>
          
          {/* Form Grid */}
          <form 
            className="w-full"
            style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '24px', 
              marginBottom: '40px' 
            }}
          >
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-[#FBA335] transition-colors"
              style={{ padding: '16px 20px', fontSize: '15px' }}
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-[#FBA335] transition-colors"
              style={{ padding: '16px 20px', fontSize: '15px' }}
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-[#FBA335] transition-colors"
              style={{ padding: '16px 20px', fontSize: '15px' }}
            />
            <input 
              type="text" 
              placeholder="Time" 
              className="w-full border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-[#FBA335] transition-colors"
              style={{ padding: '16px 20px', fontSize: '15px' }}
            />
            <input 
              type="text" 
              placeholder="Date" 
              className="w-full border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-[#FBA335] transition-colors"
              style={{ padding: '16px 20px', fontSize: '15px' }}
            />
            <input 
              type="text" 
              placeholder="Guest" 
              className="w-full border border-gray-200 rounded-md text-black placeholder-gray-400 focus:outline-none focus:border-[#FBA335] transition-colors"
              style={{ padding: '16px 20px', fontSize: '15px' }}
            />
          </form>
          
          {/* Submit Button */}
          <button 
            type="button"
            className="bg-[#FBA335] text-white font-bold uppercase tracking-[0.1em] rounded-full hover:bg-[#e0912f] hover:shadow-[0_10px_30px_rgba(251,163,53,0.4)] hover:-translate-y-1 transition-all duration-300"
            style={{ padding: '16px 45px', fontSize: '16px' }}
          >
            BOOK NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full max-w-[650px] aspect-square">
            <Image
              src={ourStoryImg}
              alt="Our Story"
              fill
              className="object-contain drop-shadow-2xl scale-[1.1]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReservationSection;
