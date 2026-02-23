import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <section id="story" className="story">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <div className="story-image-inner">
              <img 
                src="/assets/interior/korean_aesthetic.jpg" 
                alt="店內空間" 
                loading="lazy"
              />
            </div>
          </div>
          <div className="story-content">
            <span className="story-label">Our Story</span>
            <h2 className="font-serif story-title">
              以長輩之名，<br/>在柳營的老房裡續寫溫暖。
            </h2>
            <div className="story-text">
              <p>常有客人好奇地問：「金川碧玉是什麼意思？」每次被問到，我們都會想起那段被溫暖包圍的時光。</p>
              <p>「金川」是外公，「碧玉」是外婆。</p>
              <p>這裡不只是咖啡廳，更是外公外婆曾經生活一輩子的地方，也是我從小長大的家。小時候，我就坐在這裡看著外公修理電器、熱情地跟街坊鄰居打招呼。那時候賣的不只是電器，更是人與人之間那種最純粹、最暖心的人情味。</p>
              <p>後來，我們在韓國生活的那段日子裡，因為太愛跑咖了，走遍了首爾的大街小巷。當時心裡就在想：「要是柳營也能有一個讓大家放鬆坐坐的地方，該有多好？」</p>
              <p>所以決定回來創業時，腦袋裡第一個浮現的名字就是「金川碧玉」。除了翻成韓文也好聽之外，更多的是想在柳營，用另一種方式延續外公外婆留下的那份溫暖。</p>
              <p>我們保留了這棟屋子的靈魂，沒有過度的裝飾，只有剛剛好的陽光，以及那杯想溫暖你一整天的拿鐵。就像回到家一樣，簡單而純粹。</p>
              <p>歡迎常來金川碧玉，找個位子坐坐。</p>
            </div>
            <div className="story-signature">
              <span className="line" />
              <span className="font-serif name">JinchuanBiyu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
