import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm(
         import.meta.env.VITE_SERVICE_ID,
         import.meta.env.VITE_TEMPLATE_ID,
         e.target,
         import.meta.env.VITE_PUBLIC_KEY
      ).then(
         () => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
         },
         () => {
            alert("Oops, something went wrong");
         }
      );
   };

   return (
      <section
         id="contact"
         className="py-24 flex flex-col justify-center items-center text-center relative"
      >
         <RevealOnScroll>
            <div className="w-full max-w-6xl px-4 md:px-8 lg:px-16 xl:px-24">
               <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Get in Touch
               </h2>
               <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                  onSubmit={handleSubmit}
               >
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="Your name..."
                     required
                     onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                     }
                  />

                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={formData.email}
                     className="w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="Your email..."
                     required
                     onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                     }
                  />

                  <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     rows={6}
                     className="md:col-span-2 w-full bg-[#111] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                     placeholder="Your message..."
                     required
                     onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                     }
                  />

                  <button
                     type="submit"
                     className="md:col-span-2 w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </RevealOnScroll>
      </section>
   );
};
