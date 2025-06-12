"use client";

import Image from "next/image";

const Card = ({ icon, title, description }) => {
  return (
    <div className="cursor-pointer bg-white rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 flex flex-col overflow-hidden">
      <div className="flex items-center gap-3 p-5 border-b border-gray-200 bg-gray-50">
        <span className="text-green-900 text-3xl">
          <Image src={icon} alt={title} width={40} height={40} />
        </span>
        <h3 className="text-green-900 text-xl font-semibold">{title}</h3>
      </div>
      <p className="p-5 text-gray-600 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;

// "use client";

// import { motion, useInView } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";

// const Card = ({ icon, title, description }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="cursor-pointer bg-white rounded-xl shadow-md transition-transform duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
//     >
//       <div className="flex items-center gap-3 p-5 border-b border-gray-200 bg-gray-50">
//         <span className="text-green-900 text-3xl">
//           <Image src={icon} alt={title} width={40} height={40} />
//         </span>
//         <h3 className="text-green-900 text-xl font-semibold">{title}</h3>
//       </div>
//       <p className="p-5 text-gray-600 text-base leading-relaxed">{description}</p>
//     </motion.div>
//   );
// };

// export default Card;