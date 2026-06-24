import React from 'react';
import Image from 'next/image';
import menuTopBgImg from '../../public/images/menu-top-bg.png';
import aboutPizzonImg from '../../public/images/about-pizzon.png';

const Footer = () => {
  return (
    <footer 
      className="w-full relative z-40" 
      style={{ 
        backgroundColor: '#121619',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: '0 0 30px 0',
        marginTop: '-1px'
      }}
    >
      {/* Top Torn Edge */}
      <div style={{ width: '100%', position: 'relative', zIndex: 10, lineHeight: 0, backgroundColor: '#121619' }}>
        <Image 
          src={menuTopBgImg} 
          alt="Footer top edge" 
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>

      {/* Floating Image at the Top */}
      <div style={{ position: 'absolute', top: '0', right: '0', zIndex: 0, opacity: 0.8, pointerEvents: 'none' }}>
        <Image 
          src={aboutPizzonImg} 
          alt="Decorative ingredients" 
          style={{ width: '300px', height: 'auto', transform: 'translateY(-30%)' }}
        />
      </div>

      <div style={{ padding: '80px 24px 30px', position: 'relative', zIndex: 1 }}>
        {/* Top Section: 3 Columns */}
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '1300px', 
            margin: '0 auto', 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: '60px' 
          }}
        >
          
          {/* Column 1: Logo & Contact */}
          <div style={{ width: '100%', maxWidth: '350px', marginBottom: '40px' }}>
            {/* Logo */}
            <div style={{ marginBottom: '30px' }}>
              <span 
                style={{ 
                  fontFamily: '"Dancing Script", cursive', 
                  fontSize: '48px', 
                  fontWeight: 'bold',
                  color: '#FBA335' 
                }}
              >
                Piz
              </span>
              <span 
                style={{ 
                  fontFamily: '"Dancing Script", cursive', 
                  fontSize: '48px', 
                  fontWeight: 'bold',
                  color: 'white' 
                }}
              >
                za
              </span>
            </div>
            
            <p style={{ color: '#d1d5db', lineHeight: '1.8', fontSize: '15px', marginBottom: '25px', margin: 0, paddingBottom: '25px' }}>
              20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK<br/>
              69QJ+2F Alexandria, United Kingdom
            </p>
            
            <p style={{ color: '#d1d5db', fontSize: '15px', margin: 0, paddingBottom: '25px' }}>
              <span style={{ color: 'white', fontWeight: 'bold', letterSpacing: '1px', marginRight: '8px' }}>PHONE -</span> 
              +91 123 456 789 0 , +91 123 456 789 0
            </p>
            
            <p style={{ color: '#d1d5db', fontSize: '15px', margin: 0 }}>
              <span style={{ color: 'white', fontWeight: 'bold', letterSpacing: '1px', marginRight: '8px' }}>EMAIL -</span> 
              info@gmail.com
            </p>
          </div>

          {/* Column 2: Opening Hours */}
          <div style={{ width: '100%', maxWidth: '400px', marginBottom: '40px' }}>
            <h3 style={{ color: 'white', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '20px', margin: '0 0 35px 0' }}>
              OPENING HOURS
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#d1d5db', fontSize: '15px', paddingBottom: '20px' }}>
                <span>Mon – Tues :</span>
                <span>6.00 am – 10.00 pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#d1d5db', fontSize: '15px', paddingBottom: '20px' }}>
                <span>Wednes – Thurs :</span>
                <span>6.00 am – 10.00 pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#d1d5db', fontSize: '15px', paddingBottom: '20px' }}>
                <span>Launch :</span>
                <span>Everyday</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#d1d5db', fontSize: '15px' }}>
                <span>Sunday :</span>
                <span style={{ backgroundColor: '#FBA335', color: 'white', fontSize: '13px', padding: '4px 16px', borderRadius: '2px', fontWeight: 'bold' }}>
                  Closed
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Useful Links */}
          <div style={{ width: '100%', maxWidth: '250px', marginBottom: '40px' }}>
            <h3 style={{ color: 'white', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '20px', margin: '0 0 35px 0' }}>
              USEFUL LINKS
            </h3>
            
            <ul style={{ display: 'flex', flexDirection: 'column', color: '#d1d5db', fontSize: '15px', margin: 0, padding: 0, listStyle: 'none' }}>
              <li style={{ paddingBottom: '15px' }}><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = '#FBA335'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>Privacy Policy</a></li>
              <li style={{ paddingBottom: '15px' }}><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = '#FBA335'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>Order Tracking</a></li>
              <li style={{ paddingBottom: '15px' }}><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = '#FBA335'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>Warranty and Services</a></li>
              <li style={{ paddingBottom: '15px' }}><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = '#FBA335'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>About Us</a></li>
              <li style={{ paddingBottom: '15px' }}><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = '#FBA335'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>Contact</a></li>
              <li><a href="#" style={{ color: '#d1d5db', textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = '#FBA335'} onMouseOut={(e) => e.target.style.color = '#d1d5db'}>My account</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div 
          style={{ 
            width: '100%', 
            maxWidth: '1300px', 
            margin: '0 auto', 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'space-between', 
            alignItems: 'center',
            paddingTop: '30px', 
            borderTop: '1px solid rgba(255,255,255,0.05)' 
          }}
        >
          <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>
            © Pizza all Rights Reserved. Designed by <span style={{ color: '#FBA335' }}>Fast Themes</span>
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Social Icons - simple SVG squares */}
            <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222', width: '40px', height: '40px', borderRadius: '2px', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FBA335'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#222222'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
              </svg>
            </a>
            <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222', width: '40px', height: '40px', borderRadius: '2px', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FBA335'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#222222'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.97993C20.78 4.46693 19.881 4.81693 18.944 5.00593C18.3146 4.33446 17.4613 3.92131 16.5413 3.84439C15.6212 3.76747 14.708 4.03222 13.9768 4.58784C13.2456 5.14345 12.7538 5.95079 12.6022 6.85591C12.4507 7.76104 12.6508 8.69176 13.162 9.45593C11.3989 9.36746 9.68412 8.91035 8.13615 8.1158C6.58818 7.32126 5.24436 6.20815 4.2 4.84993C3.82422 5.5009 3.62649 6.24177 3.626 6.99993C3.626 8.35993 4.319 9.56993 5.378 10.2769C4.70425 10.2558 4.04505 10.0736 3.442 9.74293V9.79293C3.442 11.8089 4.871 13.4869 6.822 13.8829C6.44473 13.985 6.05269 14.0354 5.658 14.0329C5.373 14.0329 5.094 14.0059 4.821 13.9539C5.37687 15.6865 6.98418 16.883 8.804 16.9179C7.30132 18.0967 5.43793 18.7302 3.516 18.7279C3.178 18.7279 2.843 18.7079 2.513 18.6679C4.4646 19.9238 6.74534 20.5905 9.088 20.5879C16.974 20.5879 21.286 14.0559 21.286 8.39493C21.286 8.20993 21.281 8.02493 21.272 7.84293C22.1105 7.23746 22.8415 6.5015 23.44 5.66093L22.162 5.65593Z" />
              </svg>
            </a>
            <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222', width: '40px', height: '40px', borderRadius: '2px', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FBA335'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#222222'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452H16.89V14.881C16.89 13.553 16.864 11.846 15.044 11.846C13.201 11.846 12.918 13.284 12.918 14.785V20.452H9.362V9H12.778V10.564H12.826C13.302 9.663 14.464 8.716 16.183 8.716C19.775 8.716 20.447 11.077 20.447 14.167V20.452ZM5.337 7.433C4.195 7.433 3.27 6.507 3.27 5.367C3.27 4.226 4.195 3.3 5.337 3.3C6.476 3.3 7.404 4.226 7.404 5.367C7.404 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.553V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.225 0Z" />
              </svg>
            </a>
            <a href="#" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#222222', width: '40px', height: '40px', borderRadius: '2px', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#FBA335'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#222222'}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.014 2.286 18.646 2.482 19.068 2.646C19.627 2.863 20.027 3.12 20.446 3.539C20.865 3.958 21.122 4.358 21.339 4.917C21.503 5.339 21.699 5.971 21.752 7.135C21.81 8.401 21.822 8.781 21.822 11.985C21.822 15.189 21.81 15.569 21.752 16.835C21.699 17.999 21.503 18.631 21.339 19.053C21.122 19.612 20.865 20.012 20.446 20.431C20.027 20.85 19.627 21.107 19.068 21.324C18.646 21.488 18.014 21.684 16.85 21.737C15.584 21.795 15.204 21.807 12 21.807C8.796 21.807 8.416 21.795 7.15 21.737C5.986 21.684 5.354 21.488 4.932 21.324C4.373 21.107 3.973 20.85 3.554 20.431C3.135 20.012 2.878 19.612 2.661 19.053C2.497 18.631 2.301 17.999 2.248 16.835C2.19 15.569 2.178 15.189 2.178 11.985C2.178 8.781 2.19 8.401 2.248 7.135C2.301 5.971 2.497 5.339 2.661 4.917C2.878 4.358 3.135 3.958 3.554 3.539C3.973 3.12 4.373 2.863 4.932 2.646C5.354 2.482 5.986 2.286 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.131 4.903 0.334 4.14 0.63C3.354 0.935 2.684 1.353 2.015 2.022C1.346 2.691 0.928 3.36 0.623 4.146C0.327 4.91 0.124 5.782 0.065 7.06C0.007 8.34 0 8.748 0 12C0 15.252 0.007 15.66 0.065 16.94C0.124 18.218 0.327 19.09 0.623 19.854C0.928 20.64 1.346 21.309 2.015 21.978C2.684 22.647 3.354 23.065 4.14 23.37C4.903 23.666 5.775 23.869 7.053 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.667 23.986 16.947 23.928C18.225 23.869 19.097 23.666 19.86 23.37C20.646 23.065 21.316 22.647 21.985 21.978C22.654 21.309 23.072 20.64 23.377 19.854C23.673 19.09 23.876 18.218 23.935 16.94C23.993 15.66 24 15.252 24 12C24 8.748 23.993 8.34 23.935 7.06C23.876 5.782 23.673 4.91 23.377 4.146C23.072 3.36 22.654 2.691 21.985 2.022C21.316 1.353 20.646 0.935 19.86 0.63C19.097 0.334 18.225 0.131 16.947 0.072C15.667 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 15.999C9.791 15.999 8.001 14.209 8.001 12C8.001 9.791 9.791 8.001 12 8.001C14.209 8.001 15.999 9.791 15.999 12C15.999 14.209 14.209 15.999 12 15.999ZM18.406 4.155C17.51 4.155 16.784 4.881 16.784 5.777C16.784 6.673 17.51 7.399 18.406 7.399C19.302 7.399 20.028 6.673 20.028 5.777C20.028 4.881 19.302 4.155 18.406 4.155Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
