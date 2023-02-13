import React from 'react';

import Button from '../components/Button';

function Header() {
    return (
        <header className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2">
            <div className="flex flex-col justify-center items-center h-[80rem] max-w-[60rem]">
                <section id="header" className="py-24  flex items-center min-h-screen justify-center">
                    <div className="mx-auto max-w-[43rem]">
                        <div className="text-center">
                            <h2 className="md:text-lg font-medium leading-8 text-indigo-600">27/05/23 | 14:00</h2>
                            <h1 className="mt-3 md:text-[3.5rem] text-[2.75rem] font-bold leading-[3.5rem] md:leading-[4rem] tracking-tight text-slate-50">Grab your StrathHack Tickets today!</h1>
                            <p className="mt-3 md:text-lg text-sm leading-relaxed text-slate-400">Assemble a team and join us for a fun 24 hours of programming and free pizza!</p>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            <Button content="Apply" href="https://my.mlh.io/oauth/authorize?client_id=0e2f9fc2921d3ad3e12ae900af630d09382e1b3dc1b5b50de2b01b70ad64dbee&redirect_uri=https://mlh.github.io/mlh-hackathon-boilerplate/success.html&response_type=token" size="large"/>
                        </div>
                    </div>
                </section>
            </div>
        </header> 
    );
  }
  
export default Header;
  