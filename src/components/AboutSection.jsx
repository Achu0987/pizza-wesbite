"use client";
import React from 'react';
import Image from 'next/image';
import aboutPizzonImg from '../../public/images/about-pizzon.png';

const AboutSection = () => {
  return (
    <section className="w-full bg-white flex justify-center py-24 px-6 font-sans relative z-30">
      <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <span 
            className="text-[#FBA335] text-[2.5rem] md:text-[3rem] font-medium tracking-wide mb-2"
            style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
          >
            Delicious Restaurant
          </span>
          <h2 className="text-[3.5rem] md:text-[5rem] font-black text-black uppercase tracking-tighter leading-none mb-8">
            ABOUT PIZZON
          </h2>
          <p className="text-black/80 font-medium text-[16px] md:text-[17px] leading-relaxed mb-10 max-w-[600px]">
            Founded on a passion for delivering not just pizzas, but memorable moments, Pizzon is more than
            a pizza place—it's a culinary journey. Join us in savoring the artistry of flavors, where every bite
            tells a story of quality, creativity, and devotion. Come, indulge in the pizza experience you deserve.
            Welcome to the home of extraordinary pizzas, where every slice is an invitation to culinary
            delight.
          </p>
          <button className="bg-[#FBA335] text-white text-[16px] md:text-[18px] font-black uppercase tracking-[0.2em] w-[220px] h-[65px] flex items-center justify-center rounded-full hover:bg-[#e0912f] hover:shadow-[0_15px_40px_rgba(251,163,53,0.5)] hover:-translate-y-2 transition-all duration-300">
            VIEW MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          {/* Use a tall aspect ratio to fit the flying ingredients */}
          <div className="relative w-full max-w-[550px] aspect-[4/5] md:aspect-[3/4]">
            <Image
              src={aboutPizzonImg}
              alt="About Pizzon Flying Ingredients"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
