import React from 'react';

import Button from '../components/Button';
import logo from '../static/logo.png';

function Nav() {
    const toggle = () => {
        var menu = document.getElementById('nav-burger');
        if(menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }
    return (
        <nav className="bg-black px-2 sm:px-4 fixed w-full z-20 top-0 left-0">
            <div className="flex flex-wrap items-start justify-between md:justify-around mx-auto">
                <a className="flex items-center mt-3" href="/">
                    <img className="h-[4.5rem] w-[4.5rem] mr-3" src={logo} alt="logo"/>
                </a>
                <div className="flex flex-row md:order-2 lg:mt-0 items-center">
                    {/* Hamburger start */}
                    <button className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden m-3" type="button" onClick={toggle}>
                        <span className="sr-only">Open main menu</span>
                        <i className="bi bi-list w-6 h-6 text-lg"></i>
                    </button>
                    {/* Hamburger end */}
                    <a id="mlh-trust-badge" className="hidden lg:block" href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white" target="_blank">
                        <img className="w-28" src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg" alt="Major League Hacking 2023 Hackathon Season"/>
                    </a> 
                </div>
                <div id="nav-burger" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:my-6">
                    <ul className="flex flex-col p-2 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <li>
                            <a href="#header" className="block py-1 pl-3 pr-3 lg:py-2 lg:pl-4 lg:pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-1 pl-3 pr-3 lg:py-2 lg:pl-4 lg:pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">About</a>
                        </li>
                        <li>
                            <a href="#schedule" className="block py-1 pl-3 pr-3 lg:py-2 lg:pl-4 lg:pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Schedule</a>
                        </li>
                        {/* to be added once we have some sponsors */}
                        <li>
                            <a href="#sponsors" className="block py-1 pl-3 pr-3 lg:py-2 lg:pl-4 lg:pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Sponsors</a>
                        </li>
                        <li>
                            <a href="#FAQ" className="block py-1 pl-3 pr-3 lg:py-2 lg:pl-4 lg:pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">FAQ</a>
                        </li>
                        <li>
                            <a href="#committee" className="block py-1 pl-3 pr-3 lg:py-2 lg:pl-4 lg:pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Committee</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;