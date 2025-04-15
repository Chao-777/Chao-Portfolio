import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
   const programmingLanguages = [
      { name: 'HTML5' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'CSS' },
   ];

   const libraryFrameworks = [
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Laravel' },
      { name: 'Node.js' },
      { name: 'VUE' },
   ];

   const toolsPlatforms = [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
      { name: 'AWS' },
      { name: 'Tailwind' },
      { name: 'Bootstrap' },
      { name: 'Docker' },
      { name: 'K8s' },
      { name: 'ITIL' },
   ];

   return (
      <section id="about" className="min-h-screen py-20">
         <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                     <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4">
                           Education
                        </h3>
                        <ul className="text-sm list-disc list-inside text-gray-300 space-y-2">
                           <li>
                              <strong>Master's in Software Development</strong> - Griffith University (2023 - 2025)
                           </li>
                           <li>
                              Relevant Courses: Software Engineering, Database Design, Cloud Computing, Full-Stack Development, and Agile Project Management...
                           </li>
                        </ul>
                     </div>

                     <div className="p-6 rounded-xl border-white/20 hover:-translate-y-1 transition-all text-left">
                        <h3 className="text-xl font-bold mb-4">
                           Experience
                        </h3>
                        <h4 className="text-sm font-semibold">
                           Junior Developer Intern - ApyApp (Mar 2025 - Present)
                        </h4> 
                        <ul className="text-sm list-disc list-inside text-gray-300 space-y-2">
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
         </RevealOnScroll>
      </section>
   );
};
