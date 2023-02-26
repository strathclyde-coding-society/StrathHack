import React from 'react';

import image from '../assests/events/StrathUnion.png'
import Button from '../components/Button';

const sponsorGroups = [
    {tier: "Diamond", sponsors: [{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"}]},
    {tier: "Silver", sponsors: [{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"}]},
    {tier: "Bronze", sponsors: [{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"},{img: "../assests/events/sample_img.png", href: "#"}]},
    
];

function Sponsors() {

    function GridSponsors (props) {
        return (
            props.sponsors.map(group => {
                return (
                    <div className="px-8 py-6">
                        <h1 className="text-2xl font-medium title-font mb-4 text-slate-50 text-center">{group.tier}</h1>
                        <div className="grid sm:grid-cols-2">   {/* I have set this as a grid, feel free to convert to your own format*/}               
                            {group.sponsors.map(sponsor => {
                                return(
                                    <div className="col-span-1 m-1">
                                        <a className="sm:w-1/2" href={sponsor.href}><img className="flex-shrink-0 rounded-lg w-full h-full sm:w-96 sm:h-48 object-cover object-center mb-0" src={image}/></a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>      
                )
            })
        );
    }

    return (
        <>
            <section id="sponsors" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-10/12 sm:w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto">
                        {/* <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">The event would not be possible without our</h2>
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Sponsors --- Make me bigger and more impactful</h1>
                            <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p>
                        </div> */}
                        <div className="mb-20">
                            <ol className="flex flex-col place-items-center">                  
                                <GridSponsors sponsors={sponsorGroups}/>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }
  
export default Sponsors;