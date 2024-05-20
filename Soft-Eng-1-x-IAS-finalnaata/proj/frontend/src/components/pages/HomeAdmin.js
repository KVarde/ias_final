import React from 'react';
import '../../App.css'; // Updated import path
import HeroSectionAdmin from './HeroSectionAdmin';
import Cards from '../Cards';
import FooterAdmin from './FooterAdmin';
import Navbar from '../NavBarAdmin';



function Home() {
  return (
    <>
    <Navbar/>
      <HeroSectionAdmin />
      <Cards />
      <FooterAdmin />
    </>
  );
}

export default Home;