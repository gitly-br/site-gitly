import Contact from '../components/contact';
import Rocket from '../components/rocket';
import Navbar from '@/components/navbar/navbar';
import Action from '@/components/call-to-action/action';

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Rocket /> */}
            <Contact />
            <Action />
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

