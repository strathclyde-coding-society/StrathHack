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
        <nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a className="flex items-center" href="/">
                    <img className="h-[4.5rem] w-[4.5rem] mr-3" src={logo} alt="logo"/>
                </a>
                <div className="flex md:order-2">
                    <Button content="Apply" href="https://my.mlh.io/oauth/authorize?client_id=0e2f9fc2921d3ad3e12ae900af630d09382e1b3dc1b5b50de2b01b70ad64dbee&redirect_uri=https://mlh.github.io/mlh-hackathon-boilerplate/success.html&response_type=token" newPage="True" size="medium"/>
                    {/* Hamburger start */}
                    <button className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden ml-2" type="button" onClick={toggle}>
                        <span className="sr-only">Open main menu</span>
                        <i className="bi bi-list w-6 h-6 text-lg"></i>
                    </button>
                    {/* Hamburger end */}
                </div>
                <div id="nav-burger" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
                        <li>
                            <a href="#header" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">About</a>
                        </li>
                        <li>
                            <a href="#schedule" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Schedule</a>
                        </li>
                        {/* to be added once we have some sponsors */}
                        <li>
                            <a href="#sponsors" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Sponsors</a>
                        </li>
                        <li>
                            <a href="#FAQ" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">FAQ</a>
                        </li>
                        <li>
                            <a href="#committee" className="block py-2 pl-4 pr-4 hover:text-gray-50 hover:bg-slate-800 rounded-full transition duration-300 ease-in-out">Committee</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;