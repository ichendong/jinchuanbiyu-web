import React from 'react';
import './SignatureMenu.css';

const SignatureMenu = () => {
  const menuItems = [
    { name: "濟州抹茶拿鐵", kr: "제주 말차 라떼", price: "$120", img: "/assets/menu/matcha_dessert.jpg" },
    { name: "肉桂焦糖拿鐵", kr: "시나몬 카라멜 라떼", price: "$130", img: "/assets/menu/iced_latte.jpg" },
    { name: "司康蛋塔", kr: "스콘 에그타르트", price: "$70", img: "/assets/menu/scone.jpg" },
    { name: "大醬鍋", kr: "된장찌개", price: "$230", img: "/assets/menu/doenjangjjigae.jpg" },
    { name: "辣炒豬肉蓋飯", kr: "제육덮밥", price: "$230", img: "/assets/menu/pour_over_coffee.jpg" },
    { name: "手沖咖啡", kr: "핸드드립", price: "$150", img: "/assets/menu/latte_art.jpg" }
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
