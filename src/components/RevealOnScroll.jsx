import { useEffect, useRef } from 'react';

export const RevealOnScroll = ({ children }) => {
   const ref = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("visible");
            }
         });
      }, {
         threshold: 0.2,
         rootMargin: "0px 0px -50% 0px", // Adjusts when the element is considered to be in view
      });

      const element = ref.current;
      if (element) {
         observer.observe(element);
      }

      return () => {
         if (element) {
            observer.unobserve(element); // Clean up observer when component unmounts
         }
      };
   }, []); // Empty dependency array ensures this runs once on mount

   return (
      <div ref={ref} className="reveal">
         {children}
      </div>
   );
};
