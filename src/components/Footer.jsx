import React from 'react';
import { MapPin, Clock, Phone, Coffee, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="visit" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand footer-section">
            <div className="footer-logo">
              <img src="/assets/logo/logo_transparent.png" alt="" loading="lazy" />
              <span className="font-serif footer-logo-text">金川碧玉</span>
            </div>
            <p className="footer-tagline">
              在繁華時光的縫隙中，<br/>為您留下一隅靜謐的韓式溫柔。<br/>期待您的光臨。
            </p>
            <div className="footer-social">
              <a 
                href="https://www.instagram.com/cafe_jinchuanbiyu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100092091212282" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="font-serif">Visit Us</h4>
            <ul>
              <li>
                <MapPin size={18} />
                <span>台南市柳營區中山西路一段239號</span>
              </li>
              <li>
                <Clock size={18} />
                <span>10:15 - 15:00（最後點餐 14:30）</span>
              </li>
              <li>
                <Phone size={18} />
                <span>0986-307-677</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="font-serif">Vibes</h4>
            <ul>
              <li>
                <Coffee size={18} />
                <span>台南韓式咖啡廳 / 甜點 / 套餐</span>
              </li>
            </ul>
            <p className="footer-hashtag"># 紀念外公外婆的家族故事</p>
          </div>
          
          <div className="footer-section">
            <h4 className="font-serif">Follow Us</h4>
            <a 
              href="https://www.instagram.com/cafe_jinchuanbiyu/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              @cafe_jinchuanbiyu
            </a>
            <p className="footer-note">沒有訂位服務，僅接受當日現場候位</p>
            <p className="footer-note">客滿時用餐時間 90 分鐘</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          © 2026 Cafe JinchuanBiyu. Handcrafted with ❤️ by Ichen Tung.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
