import { FaGithub, FaLinkedin } from "react-icons/fa";


export const Footer = () => {
   return (
      <footer className="w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/20 py-6 mt-10">
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
               {/* Footer Content */}
               <div className="text-gray-300">
                  <p className="text-sm">
                     &copy; {new Date().getFullYear()} Chao Yuan
                  </p>
               </div>

               {/* Social Links */}
               <div className="flex space-x-6">
                  <a
                     href="https://github.com/Chao-777"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-300 hover:text-blue-500 transition-colors"
                  >
                     <FaGithub size={24} />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/chao-yuan-nic777/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-gray-300 hover:text-blue-500 transition-colors"
                  >
                     <FaLinkedin size={24} />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};
