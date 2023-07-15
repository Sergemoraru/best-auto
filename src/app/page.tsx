import React from 'react';
import MainFooter from './footer';
import Navbar from './navbar';
import SoldRecent from './sold/soldRecent/page';


export default function Home() {
  return (
    <div>
      <Navbar />
      <SoldRecent />
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
