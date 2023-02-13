import React from 'react';

import Timeline from '../components/Timeline';

const day1events = [
    {title: "Movie time", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
];

const day2events = [
    {title: "Movie time", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
    {title: "CV Workshop", headline:"Ayo come sus this out", href: "#", time: "6PM - Late", location:"TL-572", active:"no", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!"},
];

function Schedule() {

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
                        <div className="mb-20 grid grid-cols-2">
                            <div className="col-span-1">
                            <p>Day 1</p>
                            <ol className="relative border-l border-indigo-600">                  
                                <Timeline events = {day1events}/>
                            </ol>
                            </div>

                            <div className="col-span-1">
                            <p>Day 2</p>
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