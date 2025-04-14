export const About = () => {
   const frontendSkills = [
      { name: 'HTML', icon: 'html5' },
      { name: 'CSS', icon: 'css3' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
   ];

   const backendSkills = [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express', icon: 'express' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'MySQL', icon: 'mysql' },
   ];

   return (
      <section id="about" className="min-h-screen py-20">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
               About Me
            </h2>

            <div className="glass rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all">
               <p className="text-gray-300 mb-6 text-left">
                  I am a passionate software developer with a strong foundation in programming
                  languages and frameworks. I enjoy solving complex problems and continuously
                  learning new technologies to enhance my skills.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                     <h3 className="text-xl font-bold mb-4 text-left">
                        Frontend
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((skill) => (
                           <span
                              key={skill.name}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                           >
                              {skill.name}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                     <h3 className="text-xl font-bold mb-4 text-left">
                        Backend
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {backendSkills.map((skill) => (
                           <span
                              key={skill.name}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                           >
                              {skill.name}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all text-left">
                     <h3 className="text-xl font-bold mb-4">
                        Education
                     </h3>
                     <ul className="text-xs list-disc list-inside text-gray-300 space-y-2">
                        <li>
                           <strong>Master's in Software Development</strong> - Griffith University (2023 - 2025)
                        </li>
                        <li>
                           Relevant Courses: Software Engineering, Database Design, Cloud Computing, Full-Stack Development, and Agile Project Management...
                        </li>
                     </ul>
                  </div>

                  <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all text-left">
                     <h3 className="text-xl font-bold mb-4">
                        Experience
                     </h3>
                     <h4 className="text-xs font-semibold">Junior Developer Intern - ApyApp (Mar 2025 - Present) </h4> 
                     <ul className="text-xs list-disc list-inside text-gray-300 space-y-2">
                        <li>
                           Developing a parking access control system with slot management and guest token allocation for residential and commercial use.
                        </li>
                        <li>
                           Building and deploying a serverless REST API using microservices architecture with real-time and traditional databases.
                        </li>
                        <li>
                           Contributing to the development of Android and iOS mobile applications.
                        </li>
                        <li>
                           Setting up and managing development, sandbox, and production environments.
                        </li>
                        <li>
                           Collaborating with an ex-FAANG team in an agile environment, utilizing Slack, Jira, and Notion for team coordination and project management.
                        </li>
                        <li>
                           Working toward the delivery of an MVP consisting of a functional API and mobile applications.
                        </li>
                     </ul>
                  </div>
               </div>   
            </div>
         </div>
      </section>
   );
};
