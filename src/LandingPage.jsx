import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import MenuBook from './components/MenuBook';
import SignatureMenu from './components/SignatureMenu';
import Notice from './components/Notice';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <MenuBook />
      <SignatureMenu />
      <Notice />
      <Footer />
    </>
  );
};

export default LandingPage;
