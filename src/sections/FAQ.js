import React from 'react';

const questions = [
    {question: "CV Workshop", answer:"Ayo come sus this outt",},
    {question: "Refresher Social", answer:"Ayo come sus this outt",},
    {question: "AI Workshop", answer:"Ayo come sus this outt",},
    {question: "Coding Cafe with EME", answer:"Ayo come sus this outt",},
    {question: "Front-End Workshop", answer:"Ayo come sus this outt",},
    {question: "Back-End Workshop", answer:"Ayo come sus this outt",},
];
<ul class="questions">
   
      
    <span>Should I attend DurHack?</span>
    <p>If you've thought at all about attending DurHack, yes! DurHack is welcoming to people of all abilities, all that's important is a willingness to get stuck in with your team. DurHack is designed to have an inclusive and encouraging environment, so don't be afraid to ask anyone for help at the event!</p>
    <p>DurHack is completely free to attend, and could not run without the generosity of our sponsors. We provide the space, WiFi, meals, snacks, and free swag.</p>

    <span>Will I be able to get my travel costs reimbursed?</span>
    <p>We are currently unlikely to be able to offer any travel reimbursements.</p>

    <span>Do I need to be able to code to attend DurHack?</span>
    <p>The most important thing when attending a hackathon is your enthusiasm for technology. DurHack is passionate about being very welcoming and beginner-friendly, and you'll learn loads at the event!</p>
    <p>If you want to learn to code but don't know where to start, you should definitely <a href="https://medium.com/on-coding/you-can-already-code-you-just-dont-know-it-yet-862044601a5a" target="_blank">read this blogpost</a></p>
    <p>We'll also be running several lead-up workshops with <a href="https://compsoc.tech/" target="_blank">CompSoc</a> to prepare people for DurHack.</p>


    <span>What can I eat?</span>
    <p>We'll provide you with meals, snacks and drinks throughout the weekend, leaving you to concentrate on your projects. If you have special dietary requirements, please let us know when you register.</p>

    <span>What should I bring?</span>
    <p>All attendees will need to show valid student ID (other photo ID is acceptable for graduates) at registration. You'll also need a laptop and a charger, and you might want to bring toiletries.</p>

    <span>What if I don't have a team?</span>
    <p>Don't worry! Part of the fun of a hackathon is meeting new people. We'll have a team-forming event before hacking begins for those who want to meet and form new teams.</p>

    <span>How large can my team be?</span>
    <p>There's absolutely no obligation for you to come to DurHack with a pre-made team. Many attendees won't, and we'll run team-forming exercises at the start to make sure everyone is part of an awesome team</p>
    <p>However, if you are already looking for teammates, we'd recommend teams to have roughly 4 people in them, but a maximum of 5 people is allowed per team. Remember that, of course, each member of your team needs to have their own DurHack ticket.</p>

    <span>Can I take a break overnight?</span>
    <p>You'll have 24 hours to create your project. It's important to take regular breaks, and that's why we'll be providing a relaxation room for attendees to have a rest if they want. Part of the fun of the hackathon is coding through the night!</p>

    <span>What can I build and who owns the IP?</span>
    <p>Web apps, mobile apps, hardware, anything! Projects will be judged based on their creativity, technical accomplishments, polish and usefulness by our judges.</p>
    <p><strong>The IP of your work remains with you, the attendees.</strong></p>

    <span>Do you have a code of conduct?</span>
    <p>Everybody at DurHack will be expected to abide by the 
        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
        .
    </p>
    <p>TL;DR: be respectful to each other.</p>

    <span>What if I have other questions?</span>
    <p>If you're still not sure about something, drop us a line at 
        <a href="mailto:hello@durhack.com">hello@durhack.com</a>
        and we'll be very happy to help!
    </p>
         
</ul>

function FAQ() {
    const Questions = () => {
        return (
            questions.map(question => {
                return (
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-indigo-600 rounded-full mt-1.5 -left-1.5 border border-indigo-600"></div>
                        {/* <time className="mb-1 text-sm font-normal leading-none text-slate-400">{question.date} : {question.time}</time> */}
                        <h3 className="text-lg font-semibold text-slate-50">{question.question}</h3>
                        <p className="mb-4 text-base font-normal text-slate-400">{question.answer}</p>
                        {/* <Button content="Learn more" href={question.href} size="small"/> */}
                    </li>
                )
            })
        );
    }

    return (
        <>
            <section id="faq" className="bg-black w-screen overflow-x-hidden flex flex-col items-center">
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