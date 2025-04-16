

export const Home = () => {
   return (
      <section id="home" className="min-h-screen flex justify-center items-center text-center relative">
            <div className="max-w-7xl mx-auto px-4 text-center z-10">
               <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Hi, This is Chao Yuan
               </h1>

               <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
                  I'm an IT graduate with a Master’s in Software Development (GPA 6.5/7) and
                  hands-on experience building APIs, mobile apps, and cloud-based systems. Skilled in
                  Python, PHP, JavaScript, AWS, and Agile. Currently interning as a Junior Developer on
                  a real-world project with an ex-FAANG team.
               </p>

               <div className="flex justify-center space-x-4">
                  <a
                     href="#projects"
                     className="bg-blue-500 text-white px-6 py-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  >
                     <button>
                        My Projects
                     </button>
                  </a>
                  <a href="#about">
                     <button className="border border-blue-500/50 text-blue-500 px-6 py-3 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                        About Me
                     </button>
                  </a>
               </div>
            </div>
      </section>
   );
};
