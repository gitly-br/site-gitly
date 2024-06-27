import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '../components/footer';
import HeroSection from '@/components/herosection';
import Journey from '@/components/journey';
import WhyWeDo from '@/components/whywedo';

export default function Ourpupose() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Journey />
            <WhyWeDo />
            <Footer />
        </div>
    );
}