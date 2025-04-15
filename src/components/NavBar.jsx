import { useEffect } from 'react';

export const NavBar = ({ menuOpen, setMenuOpen }) => {
   useEffect(() => {
      document.body.style.overflow = menuOpen ? 'hidden' : '';
   }, [menuOpen]);

   return (
      <nav className="sticky rounded border border-white top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/20 shadow-lg">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">

               {/* Left: Logo */}
               <a href="#home" className="font-mono text-xl font-bold text-white">
                  <img src="/favicon.png" alt="Logo" className="h-10" />
               </a>

               {/* Center: Navigation links */}
               <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
                  <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                     Home
                  </a>
                  <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                     About
                  </a>
                  <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                     Projects
                  </a>
               </div>

               {/* Right: Contact button */}
               <div className="hidden md:block">
                  <a
                     href="#contact"
                     className="px-4 py-2 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-black transition duration-300"
                  >
                     Contact Me
                  </a>
               </div>

               {/* Mobile menu icon */}
               <div
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="w-7 h-5 text-3xl mb-5 relative z-40 cursor-pointer md:hidden"
               >
                  &#9776;
               </div>
            </div>
         </div>
      </nav>
   );
};
