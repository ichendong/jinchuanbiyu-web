import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './MenuBook.css';

const MenuBook = () => {
  const [menuPage, setMenuPage] = useState(0);
  const [menuLightbox, setMenuLightbox] = useState(false);

  const menuBookImages = [
    '/assets/menu/menubook_1.jpg',
    '/assets/menu/menubook_2.jpg',
    '/assets/menu/menubook_3.jpg',
    '/assets/menu/menubook_4.jpg',
    '/assets/menu/menubook_5.jpg'
  ];

  const handlePrev = () => {
    setMenuPage(p => (p - 1 + menuBookImages.length) % menuBookImages.length);
  };

  const handleNext = () => {
    setMenuPage(p => (p + 1) % menuBookImages.length);
  };

  return (
    <>
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

      <section id="menu-book" className="menu-book">
        <div className="container">
          <div className="menu-book-header">
            <span className="menu-book-label">Digital Menu</span>
            <h3 className="font-serif menu-book-title">線上菜單</h3>
          </div>
          <div className="menu-book-viewer">
            <button className="menu-book-btn" onClick={handlePrev} aria-label="上一頁">
              <ChevronLeft size={20} />
            </button>
            <div 
              className="menu-book-page" 
              onClick={() => setMenuLightbox(true)}
              style={{ cursor: 'pointer' }}
            >
              <img
                key={menuPage}
                src={menuBookImages[menuPage]}
                alt={`菜單第 ${menuPage + 1} 頁`}
                className="animate-fade-in"
                loading="lazy"
              />
              <span className="menu-book-pager">{menuPage + 1} / {menuBookImages.length}</span>
            </div>
            <button className="menu-book-btn" onClick={handleNext} aria-label="下一頁">
              <ChevronRight size={20} />
            </button>
          </div>
          <p className="menu-book-hint">點擊左右箭頭翻閱菜單</p>
        </div>
      </section>
    </>
  );
};

export default MenuBook;
