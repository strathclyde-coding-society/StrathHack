import Nav from './Nav';
import Header from './Header';
import About from './About';
import Schedule from './Schedule';
import Sponsors from './Sponsors'
import FAQ from './FAQ';
import Committee from './Commitee';
import Footer from './Footer';

import React, { useEffect } from 'react';

function Title() {
    useEffect(() => {
        document.title = 'SCS - Strathclyde Coding Society';
    });
}

function Page() {
    Title()
    return (
        <div className="w-screen h-screen overflow-x-hidden text-gray-400">
            <Nav/>
            <Header/>
            <About/>
            <Schedule/>
            <Sponsors/>
            <FAQ/>
            <Committee/>
            <Footer/>
        </div>
    );
  }
  
export default Page;
  