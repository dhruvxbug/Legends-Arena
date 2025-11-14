'use client';

import About from '../src/components/About';
import Hero from '../src/components/Hero';
import NavBar from '../src/components/Navbar';
import Features from '../src/components/Features';
import Story from '../src/components/Story';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';
import TokenomicsChart from '../src/components/TokenomicsChart';

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <TokenomicsChart />
      <Contact />
      <Footer />
    </main>
  );
}
