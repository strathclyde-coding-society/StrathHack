import React from 'react';

import committee from '../data/committee.json';
import Member from '../components/Member';


class Committee extends React.Component {
    render() {
        return (
            <section id="committee" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
                <div className="flex flex-col justify-center h-full w-10/12 sm:w-[60rem] gap-2">
                    <div className="container px-5 py-24 mx-auto text-slate-400">
                        <div className="flex flex-col w-full mb-20">
                            <h2 className="uppercase tracking-wide text-xs text-indigo-600 font-semibold text-center sm:text-left">For students by students</h2>
                            <h1 className="text-3xl font-bold sm:text-4xl text-slate-50 text-center sm:text-left">Meet the Committee</h1>
                            <p className="mt-4 text-slate-400 text-center sm:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2">
                        {Object.keys(committee).map((person, key) => (
                            <Member data={committee[person]} name={person} key={key} />
                            ))}
                        </div>
                    </div>
                </div>
            </section> 
        );
    }
}
  
export default Committee;
  