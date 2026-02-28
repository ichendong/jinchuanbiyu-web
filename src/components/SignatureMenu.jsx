import React from 'react';
import './SignatureMenu.css';

const SignatureMenu = () => {
  const menuItems = [
    { name: "濟州抹茶拿鐵", kr: "제주 말차 ラッテ", price: "$120", img: "/assets/menu/matcha_latte_45.webp" },
    { name: "泡菜豆腐鍋", kr: "김치두부찌개", price: "$230", img: "/assets/menu/kimchi_stew_45.webp" },
    { name: "司康蛋塔", kr: "스콘 에그타르트", price: "$70", img: "/assets/menu/scone_45.webp" },
    { name: "大醬鍋", kr: "된장찌개", price: "$230", img: "/assets/menu/doenjangjjigae_45_v3.webp" },
    { name: "辣炒豬肉蓋飯", kr: "제육덮밥", price: "$230", img: "/assets/menu/spicy_pork_45.webp" },
    { name: "粉紅年糕", kr: "로제떡볶이", price: "$130", img: "/assets/menu/rose_tteokbokki_45.webp" }
  ];

  return (
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
                  loading="lazy"
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
  );
};

export default SignatureMenu;
