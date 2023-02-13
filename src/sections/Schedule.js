import React from 'react';
import Modal from 'react-modal';

import Button from '../components/Button';
import Event from '../components/Event';
import EventFullDetails from '../components/EventFullDetails';

const events = [
    {title: "Movie time", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"yes", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
];

function Schedule() {
    
    const TimelineEvents = () => {
        return (
            events.map(event => {
                console.log(event.active);
                console.log(event.active == "no");
                const svgvis = event.active == "no" ? "hidden":"";
                const borderstyle = event.active == "no" ? "absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600":"hidden";
                
                console.log(borderstyle);

                if (event.active == "no"){
                    
                }
                else{
                    // setsvgvis("");
                }
                return (
                    
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5">

                        </div>
                        <time className="mb-1 text-sm font-normal leading-none text-slate-400">{event.date} : {event.time}</time>
                        <h2 className="text-lg sm:text-xl text-slate-50 font-medium title-font mb-2">{event.title}</h2>
                        <p className="leading-relaxed text-slate-400 mb-4">{event.headline}</p>
                        <button className='px-4 py-2 inline-flex items-center text-sm font-medium text-slate-50 bg-indigo-800 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-indigo-600' >yo</button>
                    </li>
                )
            })
        );
    }

    return (
        <>
            
            <section id="schedule" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">Do ya wanna know whats comin? Check out the</h2>
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Schedule</h1>
                            {/* <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p> */}
                        </div>
                        <div className="mb-20">
                            <ol className="relative border-l border-indigo-600">                  
                                <TimelineEvents />
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }
  
export default Schedule;