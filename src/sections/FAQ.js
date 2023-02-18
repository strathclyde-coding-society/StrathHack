import React from 'react';


// This is the most hack way of doing this, but in a way, it is inline with a hackathon's spirit :) - Hamada 
// <a href=\"LINK\" style=\"color: rgb(79 70 229);\"> TEXT</a>
// <a href=\"https://medium.com/@tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl\" style=\"color: rgb(79 70 229);\"> very beginner friendly</a>
// [very beginner friendly](https://medium.com/@tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl)


const questions = [
    {question: "What is a hackathon?", answer:"A hackathon is an invention marathon. Students come together to build cool software & hardware hacks over 24-48 hours. It's <a href=\"https://medium.com/@tfogo/hackathons-are-for-beginners-77a9c9c0e000#.cj21niskl\" style=\"color: rgb(79 70 229);\"> very beginner friendly</a>."},
    {question: "How much does it cost?", answer:"Nothing. Attending a hackathon is free."},
    {question: "Do I need to be a student to attend?", answer:"Yes. Only students who are currently enrolled at a college/university or have graduated within the past 12 months are eligible to attend."},
    {question: "Where is the event?", answer:"The event is being hosted at <a href=\"https://goo.gl/maps/d8fQGJJtQh8GFHwNA\" style=\"color: rgb(79 70 229);\"> University of Strathclyde</a>"},
    {question: "What is Major League Hacking?", answer:"Major League Hacking is <a href=\"https://mlh.io\" style=\"color: rgb(79 70 229);\"> the official student hackathon league</a> in North America & Europe. We work with over 200 Member Events and empower over 70,000 students every year."},
    {question: "Is there a code of conduct?", answer:" Yes there is. We enforce it very strongly. You can <a href=\"https://static.mlh.io/docs/mlh-code-of-conduct.pdf\" style=\"color: rgb(79 70 229);\"> find it here.</a>"},
];


function FAQ() {
    const Questions = () => {
        return (
            questions.map(question => {
                return (
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600"></div>
                        <h3 className="text-lg font-semibold text-slate-50">{question.question}</h3>
                        <p className="mb-4 text-base font-normal text-slate-400" dangerouslySetInnerHTML={{__html:(question.answer)}}/>
                    </li>
                )
            })
        );
    }

    return (
        <>
            <section id="FAQ" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-600 tracking-widest font-medium title-font mb-1">If you have any more questions contact us!</h2>
                            <h1 className="text-2xl font-medium title-font mb-4 text-slate-50">Frequently Asked Questions</h1>
                            {/* <p className="md:w-2/3 w-1/3 mx-auto leading-relaxed text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam expedita necessitatibus inventore ipsa, consequatur, vel libero voluptates nulla odio culpa quasi ratione. Odit minima natus eum perspiciatis mollitia molestiae iure.</p> */}
                        </div>
                        <div className="mb-20">
                            <ol className="relative border-l border-indigo-600">                  
                                <Questions />
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
  }
  
export default FAQ;