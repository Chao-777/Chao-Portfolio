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

      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(
         (result) => {
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
         className="min-h-screen flex flex-col justify-center items-center text-center relative py-20"
      >
         <RevealOnScroll>
            <div className="w-full px-4 sm:w-96">
               <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Get in Touch
               </h2>
               <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="relative">
                     <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        className="w-full bg-white-5 border border-blue -300 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="Name..."
                        required
                        onChange={(e) =>
                           setFormData({ ...formData, name: e.target.value })
                        }
                     />
                  </div>

                  <div className="relative">
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        className="w-full bg-white-5 border border-blue-300 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="Example@gmail.com"
                        required
                        onChange={(e) =>
                           setFormData({ ...formData, email: e.target.value })
                        }
                     />
                  </div>

                  <div className="relative">
                     <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        rows={5}
                        className="w-full bg-white-5 border border-blue-300 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message..."
                        required
                        onChange={(e) =>
                           setFormData({ ...formData, message: e.target.value })
                        }
                     />
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </RevealOnScroll>
      </section>
   );
};
