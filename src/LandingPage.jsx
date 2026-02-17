import React, { useState, useEffect } from 'react';
import { Coffee, MapPin, Instagram, Clock, ArrowRight, Phone, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuPage, setMenuPage] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuLightbox, setMenuLightbox] = useState(false);

  const menuBookImages = [
    '/assets/menu/menubook_1.jpg',
    '/assets/menu/menubook_2.jpg',
    '/assets/menu/menubook_3.jpg',
    '/assets/menu/menubook_4.jpg',
    '/assets/menu/menubook_5.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "濟州抹茶拿鐵", kr: "제주 말차 라떼", price: "$120", img: "/assets/menu/matcha_dessert.jpg" },
    { name: "肉桂焦糖拿鐵", kr: "시나몬 카라멜 라떼", price: "$130", img: "/assets/menu/iced_latte.jpg" },
    { name: "司康", kr: "스콘", price: "$70", img: "/assets/menu/croissant.jpg" },
    { name: "大醬鍋", kr: "된장찌개", price: "$230", img: "/assets/menu/bingsu.jpg" },
    { name: "辣炒豬肉蓋飯", kr: "제육볶음", price: "$230", img: "/assets/menu/pour_over_coffee.jpg" },
    { name: "手沖咖啡", kr: "핸드드립", price: "$150", img: "/assets/menu/latte_art.jpg" }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Noto+Sans+TC:wght@300;400;500&display=swap');
        
        /* ========== Reset & Base ========== */
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; font-size: 16px; }
        body { 
          font-family: 'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.6;
        }
        img { max-width: 100%; height: auto; display: block; }
        a { text-decoration: none; color: inherit; }
        ul { list-style: none; }
        
        .font-serif { font-family: 'Noto Serif TC', serif; }
        .font-sans { font-family: 'Noto Sans TC', sans-serif; }
        
        /* ========== Container ========== */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        @media (min-width: 768px) {
          .container { padding: 0 40px; }
        }
        
        /* ========== Navigation ========== */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
          padding: 16px 0;
        }
        .nav.scrolled {
          background: rgba(249, 247, 242, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        }
        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-logo img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        .nav-logo-text {
          font-size: 18px;
          letter-spacing: 0.15em;
          font-weight: 500;
        }
        
        /* Desktop Nav Links */
        .nav-links {
          display: none;
          align-items: center;
          gap: 32px;
        }
        @media (min-width: 900px) {
          .nav-links { display: flex; }
        }
        .nav-link {
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.75;
          transition: opacity 0.2s;
        }
        .nav-link:hover { opacity: 1; }
        .nav-btn {
          background: #5D5545;
          color: #F9F7F2;
          padding: 10px 24px;
          border-radius: 50px;
          font-size: 13px;
          letter-spacing: 0.08em;
          transition: all 0.3s;
        }
        .nav-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(93,85,69,0.3); }
        
        /* Mobile Menu Toggle */
        .nav-toggle {
          display: block;
          padding: 8px;
          background: none;
          border: none;
          cursor: pointer;
          color: #5D5545;
        }
        @media (min-width: 900px) {
          .nav-toggle { display: none; }
        }
        
        /* Mobile Menu Overlay */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(249, 247, 242, 0.98);
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        .mobile-menu.open {
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-menu a {
          font-size: 24px;
          letter-spacing: 0.15em;
          font-weight: 400;
          color: #4A4336;
        }
        .mobile-menu a:hover {
          color: #8C7B65;
        }
        
        /* ========== Hero Section ========== */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(249,247,242,0.5), transparent 30%, transparent 70%, rgba(249,247,242,1));
        }
        .hero-content {
          position: relative;
          z-index: 1;
          padding: 100px 20px 60px;
          max-width: 700px;
        }
        .hero-label {
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #8C7B65;
          margin-bottom: 24px;
          font-weight: 500;
        }
        .hero-title {
          font-size: clamp(36px, 12vw, 80px);
          line-height: 1.15;
          color: #4A4336;
          margin-bottom: 24px;
        }
        .hero-title span {
          display: block;
        }
        .hero-title .sub {
          font-style: italic;
          font-weight: 300;
          opacity: 0.8;
        }
        .hero-desc {
          font-size: clamp(15px, 4vw, 18px);
          color: rgba(93, 85, 69, 0.85);
          font-weight: 300;
          line-height: 1.9;
          margin-bottom: 32px;
        }
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          border-bottom: 1px solid #5D5545;
          padding-bottom: 8px;
          color: #5D5545;
        }
        
        /* ========== Story Section ========== */
        .story {
          padding: 60px 0;
          background: #F9F7F2;
        }
        @media (min-width: 768px) {
          .story { padding: 100px 0; }
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr 1fr;
            gap: 60px;
          }
        }
        .story-image {
          position: relative;
        }
        .story-image-inner {
          aspect-ratio: 4/5;
          border-radius: 160px 160px 20px 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }
        .story-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .story-image::after {
          content: '';
          position: absolute;
          bottom: -24px;
          right: -24px;
          width: 120px;
          height: 120px;
          background: #E6DCCF;
          border-radius: 50%;
          z-index: -1;
          opacity: 0.5;
        }
        @media (max-width: 767px) {
          .story-image::after { display: none; }
        }
        .story-content { text-align: center; }
        @media (min-width: 768px) {
          .story-content { text-align: left; }
        }
        .story-label {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #8C7B65;
          font-weight: 500;
        }
        .story-title {
          font-size: clamp(28px, 6vw, 48px);
          line-height: 1.3;
          color: #4A4336;
          margin: 16px 0 28px;
        }
        .story-text {
          font-size: 15px;
          line-height: 2;
          color: rgba(93, 85, 69, 0.8);
          font-weight: 300;
        }
        .story-text p + p { margin-top: 20px; }
        .story-signature {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }
        @media (min-width: 768px) {
          .story-signature { justify-content: flex-start; }
        }
        .story-signature .line {
          width: 48px;
          height: 1px;
          background: #8C7B65;
        }
        .story-signature .name {
          font-style: italic;
          font-size: 20px;
          color: #8C7B65;
        }
        
        /* ========== Menu Book Section ========== */
        .menu-book {
          padding: 60px 0;
          background: #F9F7F2;
        }
        @media (min-width: 768px) {
          .menu-book { padding: 100px 0; }
        }
        .menu-book-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .menu-book-label {
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #8C7B65;
          font-weight: 500;
        }
        .menu-book-title {
          font-size: clamp(28px, 6vw, 42px);
          color: #4A4336;
          margin-top: 12px;
        }
        .menu-book-viewer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .menu-book-viewer { gap: 32px; }
        }
        .menu-book-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #5D5545;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5D5545;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .menu-book-btn:hover {
          background: #5D5545;
          color: #F9F7F2;
        }
        .menu-book-page {
          width: 100%;
          max-width: 380px;
          aspect-ratio: 1/1.414;
          background: white;
          border-radius: 8px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          overflow: hidden;
          position: relative;
        }
        @media (min-width: 500px) {
          .menu-book-page { max-width: 440px; }
        }
        .menu-book-page img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .menu-book-pager {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(255,255,255,0.9);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: #5D5545;
        }
        .menu-book-hint {
          text-align: center;
          margin-top: 20px;
          font-size: 13px;
          color: #8C7B65;
          opacity: 0.7;
        }
        
        /* ========== Signature Menu Section ========== */
        .signature {
          padding: 60px 0;
          background: white;
        }
        @media (min-width: 768px) {
          .signature { padding: 100px 0; }
        }
        .signature-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .signature-label {
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #8C7B65;
          font-weight: 500;
        }
        .signature-title {
          font-size: clamp(28px, 6vw, 42px);
          color: #4A4336;
          margin-top: 12px;
        }
        .signature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 32px;
        }
        .menu-card { cursor: pointer; }
        .menu-card-image {
          aspect-ratio: 4/5;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          margin-bottom: 20px;
        }
        .menu-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .menu-card-info { text-align: center; }
        .menu-card-name {
          font-size: 18px;
          font-weight: 500;
          color: #4A4336;
          margin-bottom: 6px;
        }
        .menu-card-en {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: #8C7B65;
        }
        .menu-card-price {
          font-size: 16px;
          color: #4A4336;
          opacity: 0.75;
          margin-top: 8px;
        }
        
        /* ========== Notice Banner ========== */
        .notice {
          background: #8C7B65;
          color: #F9F7F2;
          padding: 28px 20px;
          text-align: center;
        }
        .notice p {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
        }
        .notice strong { font-weight: 500; }
        
        /* ========== Footer ========== */
        .footer {
          background: #5D5545;
          color: #F9F7F2;
          padding: 60px 0 40px;
        }
        @media (min-width: 768px) {
          .footer { padding: 80px 0 48px; }
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 500px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 48px;
          }
        }
        .footer-brand {
          grid-column: 1 / -1;
        }
        @media (min-width: 500px) {
          .footer-brand { grid-column: auto; }
        }
        .footer-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          .footer-logo { justify-content: flex-start; }
        }
        .footer-logo img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }
        .footer-logo-text {
          font-size: 20px;
          letter-spacing: 0.12em;
        }
        .footer-tagline {
          text-align: center;
          font-size: 14px;
          line-height: 2;
          opacity: 0.6;
          font-weight: 300;
          margin-bottom: 20px;
        }
        @media (min-width: 768px) {
          .footer-tagline { text-align: left; }
        }
        .footer-social {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        @media (min-width: 768px) {
          .footer-social { justify-content: flex-start; }
        }
        .footer-social a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(249, 247, 242, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .footer-social a:hover {
          background: rgba(249, 247, 242, 0.1);
        }
        .footer-section h4 {
          font-size: 16px;
          letter-spacing: 0.12em;
          margin-bottom: 20px;
        }
        .footer-section ul { font-size: 14px; font-weight: 300; }
        .footer-section li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          opacity: 0.8;
        }
        .footer-section li svg {
          flex-shrink: 0;
          opacity: 0.6;
          margin-top: 2px;
        }
        .footer-section a {
          opacity: 0.8;
          transition: opacity 0.2s;
        }
        .footer-section a:hover { opacity: 1; }
        .footer-section p {
          font-size: 12px;
          opacity: 0.5;
          margin-top: 10px;
        }
        .footer-bottom {
          margin-top: 48px;
          padding-top: 28px;
          border-top: 1px solid rgba(249, 247, 242, 0.1);
          text-align: center;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          opacity: 0.3;
        }
        
        /* ========== Animations ========== */
        @keyframes fade-in {
          from { opacity: 0.7; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.35s ease-out forwards;
        }
        
        /* Menu Lightbox */
        .menu-lightbox {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          cursor: pointer;
        }
        .menu-lightbox img {
          max-width: 95vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .menu-lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 14px;
          opacity: 0.6;
        }
      `}</style>

      {/* Menu Lightbox */}
      {menuLightbox && (
        <div className="menu-lightbox" onClick={() => setMenuLightbox(false)}>
          <span className="menu-lightbox-close">點擊任意處關閉</span>
          <img
            src={menuBookImages[menuPage]}
            alt={`菜單第 ${menuPage + 1} 頁`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#story" onClick={() => setMobileMenuOpen(false)}>Story</a>
        <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menu</a>
        <a href="#visit" onClick={() => setMobileMenuOpen(false)}>Visit</a>
        <a href="https://www.instagram.com/cafe_jinchuanbiyu/" target="_blank" rel="noopener noreferrer">追蹤我們</a>
      </div>

      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="nav-logo">
            <img src="/assets/logo/logo_transparent.png" alt="金川碧玉" />
            <span className="font-serif nav-logo-text">金川碧玉</span>
          </div>
          
          <div className="nav-links">
            <a href="#story" className="nav-link">Story</a>
            <a href="#menu" className="nav-link">Menu</a>
            <a href="#visit" className="nav-link">Visit</a>
            <a href="https://www.instagram.com/cafe_jinchuanbiyu/" target="_blank" rel="noopener noreferrer" className="nav-btn">追蹤我們</a>
          </div>
          
          <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/assets/hero/hero_cream_tone.jpg" alt="" />
        </div>
        <div className="hero-content">
          <p className="hero-label">Est. 2023 • Seoul Soul in Tainan</p>
          <h1 className="font-serif hero-title">
            <span>時光裡的</span>
            <span className="sub">溫潤碧玉</span>
          </h1>
          <p className="hero-desc">
            在奶油色的午後，品嚐一杯傳承家族記憶的特調。<br/>極簡，是為了讓心更靠近。
          </p>
          <a href="#menu" className="hero-cta">
            探索 Menu <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="story">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <div className="story-image-inner">
                <img src="/assets/interior/korean_aesthetic.jpg" alt="店內空間" />
              </div>
            </div>
            <div className="story-content">
              <span className="story-label">Our Heritage</span>
              <h2 className="font-serif story-title">
                不只是咖啡，<br/>是關於一種生活態度。
              </h2>
              <div className="story-text">
                <p>「金川」象徵著流動與傳承，來自外公的名字；「碧玉」則是時間淬鍊後的溫潤，源自外婆的雅名。我們將韓系極簡美學帶入台南柳營日常，每一個角落都經過精心留白。</p>
                <p>這裡沒有過度的裝飾，只有剛剛好的陽光、手作的溫度，以及那杯希望能溫暖你一整天的拿鐵。就像回到家一樣，簡單而純粹。</p>
              </div>
              <div className="story-signature">
                <span className="line" />
                <span className="font-serif name">Jinchuan Biyu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Book */}
      <section id="menu-book" className="menu-book">
        <div className="container">
          <div className="menu-book-header">
            <span className="menu-book-label">Digital Menu</span>
            <h3 className="font-serif menu-book-title">線上菜單</h3>
          </div>
          <div className="menu-book-viewer">
            <button className="menu-book-btn" onClick={() => setMenuPage(p => (p - 1 + menuBookImages.length) % menuBookImages.length)}>
              <ChevronLeft size={20} />
            </button>
            <div className="menu-book-page" onClick={() => setMenuLightbox(true)} style={{ cursor: 'pointer' }}>
              <img
                key={menuPage}
                src={menuBookImages[menuPage]}
                alt={`菜單第 ${menuPage + 1} 頁`}
                className="animate-fade-in"
                onError={(e) => { e.target.src = '/assets/menu/matcha_dessert.jpg'; }}
              />
              <span className="menu-book-pager">{menuPage + 1} / {menuBookImages.length}</span>
            </div>
            <button className="menu-book-btn" onClick={() => setMenuPage(p => (p + 1) % menuBookImages.length)}>
              <ChevronRight size={20} />
            </button>
          </div>
          <p className="menu-book-hint">點擊左右箭頭翻閱菜單</p>
        </div>
      </section>

      {/* Signature Menu */}
      <section id="menu" className="signature">
        <div className="container">
          <div className="signature-header">
            <span className="signature-label">Our Signature Menu</span>
            <h3 className="font-serif signature-title">精選單品</h3>
          </div>
          <div className="signature-grid">
            {menuItems.map((item, i) => (
              <div key={i} className="menu-card">
                <div className="menu-card-image">
                  <img
                    src={item.img}
                    alt={item.name}
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop'; }}
                  />
                </div>
                <div className="menu-card-info">
                  <h4 className="menu-card-name">{item.name}</h4>
                  <p className="menu-card-en">{item.kr}</p>
                  <p className="font-serif menu-card-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="notice">
        <div className="container">
          <p>🍼 <strong>店休公告</strong>：老闆與闆娘迎來新生兒，預計 2 月底回歸。感謝大家的耐心等待！</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="visit" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand footer-section">
              <div className="footer-logo">
                <img src="/assets/logo/logo_transparent.png" alt="" />
                <span className="font-serif footer-logo-text">金川碧玉</span>
              </div>
              <p className="footer-tagline">
                在繁華時光的縫隙中，<br/>為您留下一隅靜謐的韓式溫柔。<br/>期待您的光臨。
              </p>
              <div className="footer-social">
                <a href="https://www.instagram.com/cafe_jinchuanbiyu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/profile.php?id=100092091212282" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ fontWeight: 'bold', fontSize: '14px' }}>f</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="font-serif">Visit Us</h4>
              <ul>
                <li><MapPin size={18} /><span>台南市柳營區中山西路一段239號</span></li>
                <li><Clock size={18} /><span>10:15 - 15:00（最後點餐 14:30）</span></li>
                <li><Phone size={18} /><span>0986-307-677</span></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="font-serif">Vibes</h4>
              <ul>
                <li><Coffee size={18} /><span>台南韓式咖啡廳 / 甜點 / 套餐</span></li>
              </ul>
              <p style={{ fontStyle: 'italic', opacity: 0.5 }}># 紀念外公外婆的家族故事</p>
            </div>
            
            <div className="footer-section">
              <h4 className="font-serif">Follow Us</h4>
              <a href="https://www.instagram.com/cafe_jinchuanbiyu/" target="_blank" rel="noopener noreferrer">@cafe_jinchuanbiyu</a>
              <p>沒有訂位服務，僅接受當日現場候位</p>
              <p>客滿時用餐時間 90 分鐘</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            © 2026 Cafe Jinchuan Biyu. Handcrafted with ❤️ by OpenClaw.
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
