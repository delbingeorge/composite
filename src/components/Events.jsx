import EventsList from "./EventsList"
import { useState } from "react";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";
const Events = () => {
     const [event, setEvent] = useState("");
     return (
          <>
               <div className="bg-[#f8f7ff] pt-6 md:px-16 md:pt-0 flex flex-col items-center justify-center">
                    <div>
                         <h1 id="svg-div" className="text-center mb-4 md:mb-8 text-3xl font-poppy-bold tracking-widest font-extrabold text-black md:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400"> EVENTS </span> WE CONDUCT</h1>
                    </div>
                    <div className="flex flex-wrap items-center justify-center">
                         {
                              EventsList.map((items, key) => {
                                   return (
                                        <Fade delay={15} key={key}>
                                             <Link smooth={true} to={items.path} onClick={() => setEvent(items.path)} className={`${items.bgImg} bg-cover w-[16rem] h-[23rem] flex items-end hover:scale-[1.02] duration-300 cursor-pointer hover:shadow-lg m-4`}>
                                                  <div className="px-4 pb-4">
                                                       <h1 className="text-white font-poppy font-semibold text-2xl text-left">{items.name}</h1>
                                                       <h1 className="text-white font-poppy text-lg text-left">{items.event}</h1>
                                                  </div>
                                             </Link>
                                        </Fade>
                                   )
                              })
                         }
                    </div>
                    {EventsList.map(event => {
                         return (
                              <div id={event.path}></div>
                         )
                    })}
                    {(event == "open") ? (
                         <div id="open" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                              <div className="font-poppy">
                                   <div>
                                        <h1 className="text-3xl font-bold pb-2">Arcadia (Open Gaming Event)</h1>
                                        <h1 className="text-md ">Laniel Charles Dias, 7892849393</h1>
                                        <h1 className="text-md ">Frank Stalin Dsouza, 7022678809</h1>
                                   </div>
                              </div>
                              {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                              <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                              <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside lowercase">
                                   <li>NFS MOST WANTED : (PRE- REGISTRATION) (SOLO)  50 RS PER ENTRY.</li>
                                   <li>ROCKET LEAGUE	: (PRE- REGISTRATION) (2 VS 2) MAX TEAMS 16 TEAMS 50RS ENTRY.</li>
                                   <li>VALORANT TOURNAMENT : (PRE- REGISTRATION) 300RS TEAM Entry.</li>
                                   <li>FRUIT NINJA : ( ON SPOT REGISTRATION) 10 RS PER TRY TO BEAT GET 50 BACK ON WIN.</li>
                                   <li>CALL OF DUTY MOBILE : (PRE- REGISTRATION) 40rs solo entry.</li>
                                   <li>SUBWAY SURFERS : ( ON SPOT REGISTRATION) 20 RS Entry Winners GET 80RS.</li>
                              </ul>
                              <a
                                   className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                   href="#"
                              >
                                   Register Now
                              </a>
                         </div>) :
                         ((event == "close") ? (
                              <div id="close" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center">
                                   <div className="font-poppy">
                                        <div>
                                             <h1 className="text-3xl font-bold pb-2">Arcadia (Closed Gaming Event)</h1>
                                             <h1 className="text-md ">Joel James, 9108770492</h1>
                                             <h1 className="text-md ">  Sonal Riva Gonsalves, 7204206754</h1>
                                        </div>
                                   </div>
                                   {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                   <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                   <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                        <li>Teams must pre register before the given deadline. Spot Registration is not allowed.</li>
                                        <li>Each team will consist of 3 players. The match round will be 3v3.</li>
                                        <li>Only 1 team per College is allowed.</li>
                                        <li>A maximum of 16 teams are allowed for registrations.</li>
                                        <li>Participants must carry their ID cards mandatorily.</li>
                                        <li>The teams must be present at least 10 minutes before the tournament begins.</li>
                                        <li>Participants are allowed to bring their own Headphones, Keyboard and mouse on the day of the event.
                                        </li>
                                        <li>
                                             The Organizers won't be responsible for the damage or loss of your belongings.
                                        </li>
                                        <li>Login Accounts will be provided by the Organizers on the day of the event.
                                        </li>
                                        <li>Cheating/Abusive actions will result in disqualification.
                                        </li>
                                        <li>The maps will be decided on the day of the event.</li>
                                        <li>Attackers and Defenders will be decided by coin toss.
                                        </li>
                                        <li>All team captains must take note of the scoreboard after their matches
                                        </li>
                                        <li>All matches except the Grand Finals will be a Best-of-One. The Grand Finals will be played as a Best-of-Three.
                                        </li>
                                        <li>Teams can participate in the open gaming event after their closed Tournament ends.
                                        </li>
                                        <li>Judges' decisions are final.</li>
                                   </ul>
                                   <a
                                        className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                        href="#"
                                   >
                                        Register Now
                                   </a>
                              </div>) :
                              ((event == "code") ? (
                                   <div id="code" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                        <div className="font-poppy">
                                             <div>
                                                  <h1 className="text-3xl font-bold pb-2">{"Elsify{}"}</h1>
                                                  <h1 className="text-md ">Ashwin K V, 9567454484</h1>
                                                  <h1 className="text-md ">Iyola Gloria Dsilva, 6362115410</h1>
                                             </div>
                                        </div>
                                        {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                        <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                        <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                             <li className="">A single team composed of two members from the same college is permitted to participate in the competition.</li>
                                             <li>It is recommended that the participants possess fundamental knowledge of C, C++, and Java programming languages. </li>
                                             <li>The judges' verdict will be conclusive in determining the victors, who will be selected based on their performance across all three rounds. </li>
                                             <li>The winners will be chosen based on their score in all 3 rounds. </li>
                                        </ul>
                                        <a
                                             className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                             href="#"
                                        >
                                             Register Now
                                        </a>
                                   </div>) :
                                   ((event == "man") ? (
                                        <div id="man" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                             <div className="font-poppy">
                                                  <div>
                                                       <h1 className="text-3xl font-bold pb-2">IT Manager</h1>
                                                       <h1 className="text-md ">Bhushan Bangera, 7204624083</h1>
                                                       <h1 className="text-md ">Elkan Pais, 9483916991</h1>
                                                  </div>
                                             </div>
                                             {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                             <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                             <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                  <li>Only one member from each college team can participate in this event</li>
                                                  <li>Students who have registered for this event are not permitted to participate in any other event.</li>
                                                  <li> The participants must bring all relevant equipment.</li>
                                                  <li>No professional aid will be accepted.</li>
                                                  <li> All participants are required to be present at the reporting time for each round of the event. Any delay or absence may result in disqualification from the round. </li>
                                                  <li> Code of conduct must be followed. Participants must behave professionally and respectfully towards each other, the event organizers, and the event venue staff. Any behavior that is deemed inappropriate or disruptive may result in expulsion from the event.</li>
                                                  <li>Decision of the judges will be made final.</li>
                                             </ul>
                                             <a className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                  href="#">Register Now </a>
                                        </div>) :
                                        (event == "expos") ? (
                                             <div id="expos" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                  <div className="font-poppy">
                                                       <div>
                                                            <h1 className="text-3xl font-bold pb-2">Exi-Bit</h1>
                                                            <h1 className="text-md ">Vivian Dsouza, 8073425253</h1>
                                                            <h1 className="text-md ">Lishma, 7899026237</h1>
                                                       </div>
                                                  </div>
                                                  {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                                  <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                  <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                       <li>Models can be either web application, IOT, app development or any hardware related components.
                                                       </li>
                                                       <li> Maximum number of participants per team is 2.
                                                       </li>
                                                       <li> All necessary equipment should be brought by the participants.
                                                       </li>
                                                       <li>  No professional assistance will be entertained.
                                                       </li>
                                                       <li> All participants should be present at the venue at the given time and be there until the event gets over.
                                                       </li>
                                                  </ul>
                                                  <a
                                                       className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                       href="#"
                                                  >
                                                       Register Now
                                                  </a>
                                             </div>) :
                                             ((event == "inco") ? (
                                                  <div id="inco" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                       <div className="font-poppy">
                                                            <div>
                                                                 <h1 className="text-3xl font-bold pb-2">Incognito</h1>
                                                                 <h1 className="text-md ">Deepak Amin, 8618000577</h1>
                                                                 <h1 className="text-md ">Pragati Jayakumar, 7019727270</h1>
                                                            </div>
                                                       </div>
                                                       {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                                       <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                       <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                            <li>Each team gets 5 minutes to memorise the article.
                                                            </li>
                                                            <li>5 minutes will be given to each team to answer questions.
                                                            </li>
                                                            <li>There is no negative marking.
                                                            </li>
                                                            <li>The team can discuss the answer before answering.
                                                            </li>
                                                            <li>Use of electronic devices will lead to immediate disqualification.
                                                            </li>
                                                            <li>Judge's decision will be final.
                                                            </li>
                                                       </ul>
                                                       <a
                                                            className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                            href="#"
                                                       >
                                                            Register Now
                                                       </a>
                                                  </div>) :
                                                  ((event == "quiz") ? (
                                                       <div id="quiz" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                            <div className="font-poppy">
                                                                 <div>
                                                                      <h1 className="text-3xl font-bold pb-2">Quizathon</h1>
                                                                      <h1 className="text-md ">Mahima P, 8317349105</h1>
                                                                      <h1 className="text-md ">Kavya, 459827345</h1>
                                                                 </div>
                                                            </div>
                                                            {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                                            <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                            <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                                 <li>The players need to press the buzzer before answering a question. Answering a question without pressing the buzzer will not be considered.
                                                                 </li>
                                                                 <li> Once the player has pressed the buzzer and answered a question and if the answer is one of the option the player's team will get to keep answering. (NOTE: Each player would get one chance to guess an answer)
                                                                 </li>
                                                                 <li> If the players guess a wrong answer then the opposite team will get a chance to guess the answer.
                                                                 </li>
                                                                 <li> The team with the most points will win the round.
                                                                 </li>
                                                                 <li>Elimination will be done based on the teams which secures lowest points.
                                                                 </li>
                                                            </ul>
                                                            <a
                                                                 className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                                 href="#"
                                                            >
                                                                 Register Now
                                                            </a>
                                                       </div>) :
                                                       ((event == "web") ? (
                                                            <div id="web" className="px-5 md:w-full py-20 md:px-12 md:py-24 flex flex-col items-start justify-center ">
                                                                 <div className="font-poppy">
                                                                      <div>
                                                                           <h1 className="text-3xl font-bold pb-2">Web Odyssey</h1>
                                                                           <h1 className="text-md ">Anvisha Gladline Dsouza, 7022308033</h1>
                                                                           <h1 className="text-md ">Delbin George, 9539361202</h1>
                                                                      </div>
                                                                 </div>
                                                                 {/* <p className="text-lg font-poppy text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in fugiat debitis ducimus illo? Nemo totam iure quasi suscipit ullam molestias. Nobis reiciendis quam nam quod iusto, architecto velit nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nihil blanditiis quibusdam possimus, id corrupti dolor non! Sit rem laboriosam quibusdam iure corrupti? Iste quibusdam nostrum saepe expedita accusamus illum!</p> */}
                                                                 <h1 className="text-md font-poppy py-2">Rules to be followed:</h1>
                                                                 <ul className="mb-8 ml-4 text-md font-poppy list-disc list-inside">
                                                                      <li>Each college is allowed to have one team consisting of two participants, and both participants must be from the same college.
                                                                      </li>
                                                                      <li> Participants are allowed to use HTML, CSS, and JavaScript to create their website design. The use of any other languages is not permitted.
                                                                      </li>
                                                                      <li> The design should be visually appealing and reflect the participant's creativity and design skills.
                                                                      </li>
                                                                      <li> All necessary software, tools, and assets required for the competition will be provided.  Text Editors - VSCode, Sublime and Notepad++
                                                                      </li>
                                                                      <li>Participants must complete their website design within the given time frame, and late submissions will not be accepted.
                                                                      </li>
                                                                      <li> The design should be original and not infringe on any copyright laws.
                                                                      </li>
                                                                      <li>   The design should include all necessary elements, such as navigation, content, images, and any other features required.
                                                                      </li>
                                                                      <li>Participants will be judged based on creativity, design aesthetics, responsiveness, user experience, and adherence to the given theme.
                                                                      </li>
                                                                      <li> Electronic devices, including smartwatches, smartphones, and earpods, are not allowed in the lab.
                                                                      </li>
                                                                      <li> The judges' decision will be final, and no appeals will be entertained.
                                                                      </li>
                                                                      <li> The competition organizers reserve the right to disqualify any participant who violates the rules or engages in any unethical behavior.
                                                                      </li>
                                                                      <li>  Plagiarism or any form of cheating will result in disqualification.
                                                                      </li>
                                                                      <li> Participants cannot participate in other events if they are participating in ???Web Odyssey??? event.
                                                                      </li>
                                                                 </ul>
                                                                 <a
                                                                      className="text-md font-poppy text-white py-2 bg-blue-500 px-6 rounded-md hover:bg-blue-700 hover:cursor-pointer duration-300"
                                                                      href="#"
                                                                 >
                                                                      Register Now
                                                                 </a>
                                                            </div>) : ("")))))))}
               </div>
          </>
     )
}

export default Events