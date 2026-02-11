

export const About = () => {
   const programmingLanguages = [
      { name: 'HTML5' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C#' },
      { name: 'PHP' },
      { name: 'CSS' },
   ];

   const libraryFrameworks = [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Laravel' },
      { name: 'Node.js' },
      { name: '.NET' },
   ];

   const toolsPlatforms = [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'AWS' },
      { name: 'Tailwind' },
      { name: 'Bootstrap' },
      { name: 'Docker' },
      { name: 'K8s' },
      { name: 'ITIL' },
   ];

   const certifications = [
      { name: 'AWS Certified Solutions Architect - Associate' },
      { name: 'AWS Certified Cloud Practitioner' },
   ];

   return (
      <section id="about" className="min-h-screen py-20">
            <div className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
               <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
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
                           Programming Languages
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {programmingLanguages.map((language) => (
                              <span
                                 key={language.name}
                                 className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                              >
                                 {language.name}
                              </span>
                           ))}
                        </div>
                     </div>

                     <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4 text-left">
                           Library & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {libraryFrameworks.map((skill) => (
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

                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-6">
                     <h3 className="text-xl font-bold mb-4 text-left">
                        Tools & Platforms
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {toolsPlatforms.map((skill) => (
                           <span
                              key={skill.name}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                           >
                              {skill.name}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mt-6">
                     <h3 className="text-xl font-bold mb-4 text-left">
                        Certifications
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {certifications.map((skill) => (
                           <span
                              key={skill.name}
                              className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                           >
                              {skill.name}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                     <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4">
                           Education
                        </h3>
                        <p className="text-sm font-semibold mb-2">
                           Master's in Software Development - Griffith University (2023 - 2025)
                        </p>
                        <ul className="text-sm list-disc list-inside text-gray-300 space-y-2">
                           <p className="mt-2 mb-2">
                           Relevant Courses:
                           </p>
                           <li>Software Engineering</li>
                           <li>Database Design</li>
                           <li>Cloud Computing</li>
                           <li>Secure Development Operations </li>
                           <li>Mobile App Development</li>
                           <li>Data Structures and Algorithms</li>
                           <li>Web Application Development</li>
                           <li>Software Testing and Quality Assurance</li>
                           <li>Agile Software Development</li>
                           <li>ITIL Foundations</li>
                        </ul>
                     </div>

                     <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4">
                           Experience
                        </h3>
                        <h4 className="text-sm font-semibold">
                           <p className="mb-2">
                           Junior Developer Intern - ApyApp (Mar 2025 - Jul 2025)
                           </p>
                        </h4> 
                        <ul className="text-sm list-disc list-inside text-gray-300 space-y-2">
                           <li>
                           Developed features for a parking management web application using Node.js and
                           responsive HTML/CSS/Bootstrap                           </li>
                           <li>
                           Implemented role-based access control and secure authentication for different user types                           </li>
                           <li>
                           Built booking and payment workflows supporting multiple properties                           </li>
                           <li>
                           Contributed to admin tools for managing users, properties, and transactions                           </li>
                           <li>
                           Collaborated with a cross-functional team using Git version control and Agile methodology                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
      </section>
   );
};
