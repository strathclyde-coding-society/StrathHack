import React from 'react';

function About() {
    return (
        <section id="about" className="bg-black w-screen flex flex-col items-center pb-[5rem] z-10 text-center">
                <div className="flex flex-col justify-center items-center h-full w-full z-10 ">
                    <div className="pt-16 text-center">  
                        <div className="container m-auto px-6 text-slate-50">
                            <div className="space-y-6  ">
  
                                <div className="">
                                    <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">The Strathclyde Coding Society's first hackathon</h2>
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Who are we?</h1>
                                    <p className="mt-6 leading-relaxed text-slate-400"></p>
                                    <p className="mt-6 leading-relaxed text-slate-400">T</p>
                                    <p className="mt-4 leading-relaxed text-slate-400"> Check out our socials</p>

                                    <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start pt-3 text-5xl text-indigo-600">
                                        <div className="hover:scale-125 transition ease-in-out delay-50">
                                        <a  href="https://discord.com/invite/zbPVc68kX7" target="_blank" rel="noopener noreferrer"><i className="bi bi-discord ml-1 px-1"></i></a>
                                        </div>
                                        <div className="hover:scale-125 transition ease-in-out delay-50">
                                        <a  href="https://www.instagram.com/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram ml-1 px-1"></i></a>
                                        </div>
                                        <div className="hover:scale-125 transition ease-in-out delay-50">
                                        <a  href="https://www.linkedin.com/company/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin ml-1 px-1"></i></a>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section> 
    );
  }
  
export default About;
  