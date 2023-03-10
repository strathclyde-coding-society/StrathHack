import React from 'react';

function About() {
    return (
        <section id="about" className="bg-black w-screen flex flex-col items-center pb-[5rem] z-10">
            <div className="flex flex-col justify-center h-full w-10/12 sm:w-[60rem] gap-2">
                <div className="pt-16">  
                    <div className="container m-auto px-6 text-slate-50">
                        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                            <div>
                                <h2 className="uppercase tracking-wide text-xs text-indigo-600 font-semibold text-center sm:text-left">The Strathclyde Coding Society's first hackathon</h2>
                                <h1 className="text-3xl font-bold sm:text-4xl text-slate-50 text-center sm:text-left">Why Join us</h1>
                                <p className="mt-4 text-slate-400 text-center sm:text-start">StrathHack will be a great opportunity for you to improve your coding skills while having fun and meeting new people, students and industry alike!</p>
                                {/* <p className="mt-4 leading-relaxed text-slate-400 md:text-base text-sm"> Social Icons will be replaced with expected member/team/years count</p> */}
                                <div className="flex flex-col sm:flex-row lg:items-center sm:ml-auto sm:mt-0 mt-2 justify-center pt-3 text-5xl text-indigo-600">
                                    {/* <div className="px-5 m-3">
                                        <a href="https://discord.com/invite/zbPVc68kX7" target="_blank" rel="noopener noreferrer"><i className="bi bi-calendar ml-1 px-1"></i></a>
                                        <p>0 years :(</p>
                                    </div> */}
                                    <div className="px-5 m-3 text-center">
                                        {/* <a href="https://www.instagram.com/strathcoding/" target="_blank" rel="noopener noreferrer"> */}
                                            <i className="bi bi-person ml-1 px-1"></i>
                                            {/* </a> */}
                                        <p>200 people</p>
                                    </div>
                                    <div className="px-5 m-3 text-center">
                                        {/* <a href="https://www.linkedin.com/company/strathcoding/" target="_blank" rel="noopener noreferrer"> */}
                                            <i className="bi bi-people ml-1 px-1"></i>
                                            {/* </a> */}
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
  