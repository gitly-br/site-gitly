import React from 'react';
import Navbar from '@/components/navbar/navbar';
import Footer from '../components/footer';
import HeroPartners from '@/components/heroPartrners';


export default function Ourpupose() {
    return (
        <div>
            <Navbar></Navbar>
            <HeroPartners />
            <Footer /> 
        </div>
    );
}