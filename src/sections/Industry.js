import React from 'react'
import Header from './Header';
import logo from '../static/logo.png';

function Industry() {
  return (
    <div className="w-screen h-screen overflow-x-hidden text-gray-400">
        <nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a className="flex items-center" href="/">
                    <img className="h-[4.5rem] w-[4.5rem] mr-3" src={logo} alt="logo"/>
                </a>
                <a className="px-6 py-2.5 inline-flex items-center text-sm font-medium text-slate-50 bg-indigo-800 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-indigo-600" href="https://www.eventbrite.com/e/strathhack-tickets-509350911287">Sponsorship Proposal</a>
            </div>
        </nav>

        <header className="bg-black w-screen h-screen overflow-x-hidden flex flex-col items-center space-y-2">
            <div className="flex flex-col justify-center items-center h-[80rem] max-w-[60rem]">
                <section className="py-24 flex items-center min-h-screen justify-center">
                    <div className="mx-auto max-w-[43rem]">
                        <div className="text-center">
                            <h2 className="md:text-lg font-medium leading-8 text-indigo-600">04/03/23 | 14:00</h2>
                            <h1 className="mt-3 md:text-[3.5rem] text-[2.75rem] font-bold leading-[3.5rem] md:leading-[4rem] tracking-tight text-slate-50">Grab your StrathHack Tickets today!</h1>
                            <p className="mt-3 md:text-lg text-sm leading-relaxed text-slate-400">Assemble a team and join us for a fun 24 hours of programming and free pizza!</p>
                        </div>
                        <div className="mt-6 flex items-center justify-center gap-4">
                            <a className="px-8 py-3 inline-flex items-center text-sm font-medium text-slate-50 bg-indigo-800 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-indigo-600" href="https://www.eventbrite.com/e/strathhack-tickets-509350911287">Sponsorship Proposal</a>
                        </div>
                    </div>
                </section>
            </div>
        </header> 
    </div>
  )
}

export default Industry