import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

   return (
      <section id="projects" className="min-h-screen flex item-center justify-center py-20">
         <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
               <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Featured Projects
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 border border-white/20 hover:-translate-y-1 
                  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">         
                     <h3 className="text-xl font-bold mb-2">
                        Residential Parking System
                     </h3>
                     <p className="text-gray-300 mb-4 text-left">
                     A parking access control system with slot management
                     and guest token allocation for residential and commercial use.
                     </p>
                     <div className="flex flex-wrap text-left gap-2 mb-4">
                        {["JavaScript", "React", "MySql", "Node.js","AWS"].map((tech,key) => (
                           <span
                              key={key}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                              hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                           >
                              {tech}
                           </span>
                        ))}
                     </div>

                     <div className="justify-between items-center text-left mt-4">
                        <a href="#" className="text-blue-400 hover:text-blue-200 transition-colors my-4">
                           View Project →
                        </a>
                     </div>
                  </div>

                  <div className="rounded-xl p-6 border border-white/20 hover:-translate-y-1 
                  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">         
                     <h3 className="text-xl font-bold mb-2">
                        Education Management System
                     </h3>
                     <p className="text-gray-300 mb-4 text-left">
                     An education management system using PHP and Laravel, implementing
                     features such as user registration, authentication, course management, and peer
                     review assessments, with a responsive UI built using Bootstrap for a seamless user
                     experience.
                     </p>
                     <div className="flex flex-wrap text-left gap-2 mb-4">
                        {["PHP", "Laravel", "MySql", "Bootstrap"].map((tech,key) => (
                           <span
                              key={key}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm 
                              hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                           >
                              {tech}
                           </span>
                        ))}
                     </div>

                     <div className="justify-between items-center text-left mt-4">
                        <a href="https://github.com/Chao-777/Hogwarts-education-system" className="text-blue-400 hover:text-blue-200 transition-colors my-4">
                           View Project →
                        </a>
                     </div>
                  </div>

               </div>
            </div>
         </RevealOnScroll>
      </section>
   );

}
