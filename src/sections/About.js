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
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Why Join us</h1>
                                    <p className="mt-6 leading-relaxed text-slate-400">Write paragraph about why to join</p>
                                    <p className="mt-6 leading-relaxed text-slate-400"></p>
                                    <p className="mt-4 leading-relaxed text-slate-400"> Social Icons will be replaced with expected member/team/years count</p>

                                    <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start pt-3 text-5xl text-indigo-600">
                                        <div className=" px-5">
                                        <a  href="https://discord.com/invite/zbPVc68kX7" target="_blank" rel="noopener noreferrer"><i className="bi bi-calendar ml-1 px-1"></i></a>
                                        <p>0 years :(</p>
                                        </div>
                                        <div className=" px-5">
                                        <a  href="https://www.instagram.com/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-person ml-1 px-1"></i></a>
                                        <p>200 people</p>
                                        </div>
                                        <div className=" px-5">
                                        <a  href="https://www.linkedin.com/company/strathcoding/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin ml-1 px-1"></i></a>
                                        <p>50 teams</p>
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
  