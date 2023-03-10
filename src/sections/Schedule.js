import React from 'react';

import Timeline from '../components/Timeline';

const day1events = [
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
];

const day2events = [
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "Under-work", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
];

function Schedule() {

    return (
        <>
            <section id="schedule" className="bg-black w-screen overflow-x-hidden   flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-10/12 sm:w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col w-full mb-20">
                            <h2 className="uppercase tracking-wide text-xs text-indigo-600 font-semibold text-center sm:text-left">Do ya wanna know whats comin? Check out the</h2>
                            <h1 className="text-3xl font-bold sm:text-4xl text-slate-50 text-center sm:text-left">Schedule</h1>
                            <p className="mt-4 text-slate-400 text-center sm:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.</p>
                        </div>
                        <div className="mb-20 columns-1 sm:columns-2">
                            <div className="flex flex-col place-items-center p-5">
                                <h1 className="text-2xl font-bold sm:text-3xl text-slate-50 text-center sm:text-left p-3">Day 1</h1>
                                <ol className="relative border-l border-indigo-600">                  
                                    <Timeline events = {day1events}/>
                                </ol>
                            </div>
                            <div className="flex flex-col place-items-center p-5">
                            <h1 className="text-2xl font-bold sm:text-3xl text-slate-50 text-center sm:text-left p-3">Day 2</h1>
                                <ol className="relative border-l border-indigo-600">                  
                                    <Timeline events = {day1events}/>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }
  
export default Schedule;