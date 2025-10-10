// "use client";
// import { useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";

// export default function ContraButton() {
//   const scriptLoaded = useRef(false);
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     once: true,
//     margin: "0px 0px -100px 0px",
//   });

//   useEffect(() => {
//     if (scriptLoaded.current) return;

//     if (
//       !document.querySelector(
//         'script[src="https://contra.com/static/embed/sdk.js"]'
//       )
//     ) {
//       const script = document.createElement("script");
//       script.src = "https://contra.com/static/embed/sdk.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     scriptLoaded.current = true;
//   }, []);

//   return (
//     // <div className="relative" data-blobity>
//     //   <div className="inset-0 absolute skeleton z-20"></div>
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: isInView ? 1 : 0 }}
//       transition={{ duration: 0.5 }}
//       className="contra-hire-me-button z-10 relative"
//       data-analyticsuserid="3e30d714-49c6-4a28-b3e1-0b5d524bb9a5"
//       data-theme="dark"
//       data-username="adeolabadero"
//     />
//     // </div>
//   );
// }
