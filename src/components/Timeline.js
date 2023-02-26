import React from 'react'

function Timeline(props) {
    return (
        props.events.map(event => {
            console.log(event.active);
            console.log(event.active == "no");
            const svgvis = event.active == "no" ? "hidden":"";
            const borderstyle = event.active == "no" ? "absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600":"hidden";
            
            console.log(svgvis);

            if (event.active == "no"){
                
            }
            else{
                // setsvgvis("");
            }
            return (
                
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5">
                        <svg className={svgvis} width="49" height="224" viewBox="0 0 49 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.499993 0V64M0.499993 160V224M0.353546 63.6464L48.3535 111.646M48.3535 112.354L0.353549 160.354" stroke="Green"/>
                        </svg>
                    </div>
                    <div className={borderstyle}></div>
                    <time className="mb-1 text-sm font-normal leading-none text-slate-400">{event.time}</time>
                    <h2 className="text-lg sm:text-xl text-slate-50 font-medium title-font mb-2">{event.title}</h2>
                    <p className="text-sm sm:text-base break-words pr-2 w-52 mt-2 leading-relaxed text-slate-400">{event.headline}</p>  
                </li>
            )
        })
    );
}

export default Timeline