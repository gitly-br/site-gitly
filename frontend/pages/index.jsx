import Contact from '../components/contact';
import Rocket from '../components/rocket';
import Footer from '../components/Footer';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';

export default function Home() {
    return (
        <div>
            <Rocket />
            {/* <Contact /> */}
            <Navbar></Navbar>
            {/* <Rocket /> */}
            <Contact />
            <Action />
            <Footer />

        </div>
    );
    }
=======
import React, { useState, useEffect } from 'react';
import Contact from '../components/contact'; 

export default function Home() {
  return (
    <div>
      <Contact />
    </div>
  );
}

