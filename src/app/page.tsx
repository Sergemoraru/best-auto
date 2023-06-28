import React from 'react';
import MainFooter from './footer';
import Navbar from './navbar';


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}
