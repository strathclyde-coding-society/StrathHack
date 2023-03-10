import React from 'react';

import Button from '../components/Button';

function Header() {
    return (
        <header className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2">
            <div className="flex flex-col justify-center items-center h-[80rem] max-w-[60rem]">
                <section id="header" className="py-24 flex items-center min-h-screen justify-center">
                    <div className="mx-auto max-w-[43rem]">
                        <div className="text-center">
                            <h2 className="md:text-lg font-medium leading-8 text-indigo-600">27/05/23 | 14:00</h2>
                            <h1 className="mt-3 md:text-[3.5rem] text-[2.75rem] font-bold leading-[3.5rem] md:leading-[4rem] tracking-tight text-slate-50">Tickets will go on sale soon!</h1>
                            <p className="mt-3 md:text-lg text-sm leading-relaxed text-slate-400">This website is still under construction!</p>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            {/* <Button content="Apply" href="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1024px-Smiley.svg.png" size="large"/> */}
                        </div>
                    </div>
                </section>
            </div>
        </header> 
    );
  }
  
export default Header;
  