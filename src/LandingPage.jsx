import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import MenuBook from './components/MenuBook';
import SignatureMenu from './components/SignatureMenu';
import Notice from './components/Notice';
import Footer from './components/Footer';

const Reveal = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
          // 滾到就觸發，觸發後取消監聽，保持溫潤不突兀
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: `opacity 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const LandingPage = () => {
  return (
    <div style={{ animation: 'globalFadeIn 1.5s ease-out' }}>
      <style>{`
        @keyframes globalFadeIn { 
          from { opacity: 0; transform: scale(1.02); } 
          to { opacity: 1; transform: scale(1); } 
        }
      `}</style>
      <Navbar />
      <Hero />
      <Reveal delay={0.2}><Story /></Reveal>
      <Reveal delay={0.2}><MenuBook /></Reveal>
      <Reveal delay={0.2}><SignatureMenu /></Reveal>
      <Reveal delay={0.2}><Notice /></Reveal>
      <Footer />
    </div>
  );
};

export default LandingPage;