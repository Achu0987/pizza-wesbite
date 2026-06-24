"use client";
import React from 'react';
import Image from 'next/image';
import { UtensilsCrossed, Truck, Pizza } from 'lucide-react';
import orderTopImg from '../../public/images/order-top.png';
import orderBottomImg from '../../public/images/order-bottom.png';

const OrderSection = () => {
  return (
    <section className="w-full flex flex-col relative z-20 font-sans mt-0">
      {/* Top Torn Edge with Solid White Background to blend with previous section */}
      <div className="w-full relative z-10 leading-none -mb-1 bg-white">
        <Image 
          src={orderTopImg} 
          alt="Top torn edge" 
          width={1920} 
          height={100} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main Orange Content Area */}
      <div className="w-full bg-[#FD9D3E] relative z-0 flex justify-center py-16 px-6">
        <div className="w-full max-w-[1300px] relative">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            {/* Item 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex items-center justify-center h-[90px] w-[90px] rounded-full border-[2px] border-black hover:bg-black hover:text-[#FD9D3E] transition-all duration-300 group cursor-pointer">
                <UtensilsCrossed size={45} strokeWidth={1.5} className="text-black group-hover:text-[#FD9D3E] transition-colors duration-300" />
              </div>
              <h3 className="text-black font-black text-[1.4rem] uppercase tracking-wide mb-4">
                Order Your Food
              </h3>
              <p className="text-black/80 font-medium leading-relaxed text-[15px] px-4 md:px-8">
                Satisfy your cravings with just a few clicks! Order your favorite
                cuisine from a diverse menu, customized to your taste, and
                enjoy swift delivery or convenient pickup options. Indulge in a
                delightful dining experience, right at your fingertips.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex items-center justify-center h-[90px] w-[90px] rounded-full border-[2px] border-black hover:bg-black hover:text-[#FD9D3E] transition-all duration-300 group cursor-pointer">
                <Truck size={45} strokeWidth={1.5} className="text-black group-hover:text-[#FD9D3E] transition-colors duration-300" />
              </div>
              <h3 className="text-black font-black text-[1.4rem] uppercase tracking-wide mb-4">
                Delivery Or Pick Up
              </h3>
              <p className="text-black/80 font-medium leading-relaxed text-[15px] px-4 md:px-8">
                Choose your preferred way to enjoy your meal! Opt for hassle-
                free delivery to your doorstep or quick and convenient pick-up,
                ensuring your culinary cravings are satisfied just the way you
                like.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex items-center justify-center h-[90px] w-[90px] rounded-full border-[2px] border-black hover:bg-black hover:text-[#FD9D3E] transition-all duration-300 group cursor-pointer">
                <Pizza size={45} strokeWidth={1.5} className="text-black group-hover:text-[#FD9D3E] transition-colors duration-300" />
              </div>
              <h3 className="text-black font-black text-[1.4rem] uppercase tracking-wide mb-4">
                Delicious Recipes
              </h3>
              <p className="text-black/80 font-medium leading-relaxed text-[15px] px-4 md:px-8">
                Discover a world of flavors with our delicious recipes! From
                gourmet delights to quick and easy meals, explore a diverse
                range of culinary creations that will tantalize your taste buds
                and inspire your inner chef.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Torn Edge with Solid White Background to blend with next section */}
      <div className="w-full relative z-10 leading-none -mt-1 bg-white">
        <Image 
          src={orderBottomImg} 
          alt="Bottom torn edge" 
          width={1920} 
          height={100} 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default OrderSection;
