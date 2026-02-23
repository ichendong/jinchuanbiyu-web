import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img 
          src="/assets/hero/hero_cream_tone.jpg" 
          alt="" 
          loading="eager"
        />
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
  );
};

export default Hero;
