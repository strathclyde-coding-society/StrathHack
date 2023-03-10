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
                    <div>
                        <div className="flex flex-row items-start gap-4">
                            <span className="shrink-0 rounded-lg bg-indigo-600 p-4">
                                <i className="bi bi-question-lg text-slate-50"></i>
                            </span>
                            <div>
                                <h2 className="text-lg leading-tight text-slate-50 pt-1 font-bold">{question.question}</h2>
                                <p className="break-words md:w-52 text-sm sm:text-base pr-2 mt-2 text-slate-400" dangerouslySetInnerHTML={{__html:(question.answer)}} />
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }

    return (
        <section id="FAQ" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
            <div className="flex flex-col justify-center h-full w-10/12 sm:w-[60rem] gap-2">
                <div className="container px-5 py-24 mx-auto text-slate-400">
                    <h2 className="uppercase tracking-wide text-xs text-indigo-600 font-semibold text-center sm:text-left">Lorem, ipsum dolor.</h2>
                    <h1 className="text-3xl font-bold sm:text-4xl text-slate-50 text-center sm:text-left">Frequently Asked Questions</h1>
                    <p className="mt-4 text-slate-400 text-center sm:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.</p>
                    <div className="grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
                        <Questions />
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
export default FAQ;