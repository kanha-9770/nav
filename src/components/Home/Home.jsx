// import React, { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
// import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
// import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
// import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
// import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
// import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import './styles.css';

// const machines = [
//   {
//     src: paperCupMachine1,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: paperCupMachine2,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: flexoPrintingMachine,
//     alt: "Flexo Printing Machine",
//     label: "Flexo Printing Machine",
//   },
//   {
//     src: paperCupMachine3,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: dieCuttingMachine,
//     alt: "Die Cutting Machine",
//     label: "Die Cutting Machine",
//   },
// ];

// const Home = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const carouselRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     startAutoSlide();
//     return () => {
//       if (animationRef.current) animationRef.current.kill();
//     };
//   }, []);

//   const startAutoSlide = () => {
//     animationRef.current = gsap.to(carouselRef.current, {
//       xPercent: -100 * machines.length,
//       ease: "none",
//       duration: machines.length * 3, // Total duration for one complete cycle
//       scrollTrigger: {
//         trigger: carouselRef.current,
//         pin: true,
//         scrub: 1,
//         snap: 1 / machines.length,
//         end: () => `+=${carouselRef.current.scrollWidth}`,
//       },
//       modifiers: {
//         xPercent: (xPercent) => {
//           const index = machines.length;
//           return `${xPercent % 100}%`;
//         },
//       },
//       repeat: -1,
//     });
//   };

//   const handleMouseEnter = () => {
//     gsap.to(animationRef.current, { timeScale: 0.5 }); // Slow down the animation
//   };

//   const handleMouseLeave = () => {
//     gsap.to(animationRef.current, { timeScale: 1 }); // Resume normal speed
//   };

//   const handleVideoPlay = () => {
//     const videoElement = document.getElementById("background-video");
//     if (videoElement) {
//       videoElement.play();
//       setIsVideoPlaying(true);
//     }
//   };

//   return (
//     <section className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white font-sans">
//       <video
//         id="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-4/4 object-cover z-0"
//         onCanPlay={() => setIsVideoPlaying(true)}
//       >
//         <source src="bg.mp4" type="video/mp4" />
//         <source src="bg.webm" type="video/webm" />
//         <source src="bg.ogv" type="video/ogg" />
//       </video>
//       {!isVideoPlaying && (
//         <div
//           className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
//           onClick={handleVideoPlay}
//         >
//           <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
//             Play Video
//           </button>
//         </div>
//       )}
//       <div className="absolute inset-0 bg-black opacity-75"></div>
//       <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//           <span>Paper </span>
//           <span className="flip-animate">
//             <span data-hover="Cup Machine">Cup Machine</span>
//           </span>
//         </h1>
//         <p className="text-2xl md:text-3xl italic mb-8">
//           Manufacturing
//         </p>
//         <button className="pl-4 pr-4 p-1 text-black bg-white rounded-lg shadow-lg transition duration-300 font-semibold text-base">
//           Book Now
//         </button>
//       </div>
//       <div
//         className="absolute bottom-0 w-full flex items-center justify-center p-6 backdrop-blur-sm"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="relative overflow-hidden w-full mx-4 flex justify-center items-center">
//           <div
//             className="flex transition-transform duration-500"
//             ref={carouselRef}
//           >
//             {machines.map((machine, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-1/5 px-2"
//               >
//                 <div className="relative h-24 md:h-32 border-2 border-white rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110">
//                   <img
//                     src={machine.src}
//                     alt={machine.alt}
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-80 flex items-center justify-center">
//                     <span className="text-white text-sm md:text-lg font-semibold">{machine.label}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
//         <IoChatboxEllipsesOutline />
//       </div>
//     </section>
//   );
// };

// export default Home;
// import React, { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import heroImage from "../../Assests/industrialGrade.webp"; // Use the correct path for your hero image
// import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
// import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
// import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
// import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
// import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
// import { IoChatboxEllipsesOutline } from "react-icons/io5";
// import "./styles.css";

// const machines = [
//   {
//     src: paperCupMachine1,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: paperCupMachine2,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: flexoPrintingMachine,
//     alt: "Flexo Printing Machine",
//     label: "Flexo Printing Machine",
//   },
//   {
//     src: paperCupMachine3,
//     alt: "Paper Cup Machine",
//     label: "Paper Cup Machine",
//   },
//   {
//     src: dieCuttingMachine,
//     alt: "Die Cutting Machine",
//     label: "Die Cutting Machine",
//   },
// ];

// const Home = () => {
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const carouselRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     startAutoSlide();
//     return () => {
//       if (animationRef.current) animationRef.current.kill();
//     };
//   }, []);

//   const startAutoSlide = () => {
//     animationRef.current = gsap.to(carouselRef.current, {
//       xPercent: -100 * machines.length,
//       ease: "none",
//       duration: machines.length * 3, // Total duration for one complete cycle
//       repeat: -1,
//       modifiers: {
//         xPercent: (xPercent) => {
//           const index = machines.length;
//           return `${xPercent % (index * 100)}%`;
//         },
//       },
//     });
//   };

//   const handleMouseEnter = () => {
//     gsap.to(animationRef.current, { timeScale: 0.5 }); // Slow down the animation
//   };

//   const handleMouseLeave = () => {
//     gsap.to(animationRef.current, { timeScale: 1 }); // Resume normal speed
//   };

//   const handleVideoPlay = () => {
//     const videoElement = document.getElementById("background-video");
//     if (videoElement) {
//       videoElement.play();
//       setIsVideoPlaying(true);
//     }
//   };

//   return (
//     <section className="relative h-screen w-screen overflow-hidden bg-green-500 bg-cover bg-center text-white font-sans">
//       <video
//         id="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-4/4 object-cover z-0"
//         onCanPlay={() => setIsVideoPlaying(true)}
//       >
//         <source src="bg.mp4" type="video/mp4" />
//         <source src="bg.webm" type="video/webm" />
//         <source src="bg.ogv" type="video/ogg" />
//       </video>
//       {!isVideoPlaying && (
//         <div
//           className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
//           onClick={handleVideoPlay}
//         >
//           <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
//             Play Video
//           </button>
//         </div>
//       )}
//       <div className="absolute inset-0 bg-black opacity-75"></div>
//       <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//           <span>Paper </span>
//           <span className="flip-animate">
//             <span data-hover="Cup Machine">Cup Machine</span>
//           </span>
//         </h1>
//         <p className="text-2xl md:text-3xl italic mb-8">Manufacturing</p>
//         <button className="p-1 pl-4 pr-4 text-black bg-white rounded-md shadow-lg transition duration-300 font-bold text-base">
//           Book Now
//         </button>
//       </div>
//       <div
//         className="absolute bottom-0 w-full flex items-center justify-center p-6 backdrop-blur-sm"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         <div className="relative overflow-hidden w-full mx-20 flex justify-center items-center">
//           <div
//             className="flex transition-transform duration-500"
//             ref={carouselRef}
//           >
//             {machines.map((machine, index) => (
//               <div key={index} className="flex-shrink-0 w-1/5 px-4 ">
//                 <div className="relative bottom-0  md:h-30 border-1 flex flex-col overflow-hidden transform transition-transform duration-500 hover:scale-110">
//                   <img
//                     src={machine.src}
//                     alt={machine.alt}
//                     className="h-1/2 w-full object-cover"
//                   />
//                   <div className="bg-white bg-opacity-5 h-full">
//                   <span className="text-white  flex items-center justify-center text-xs md:text-xs font-medium">
//                     {machine.label}
//                   </span>
//                   </div>

//                 </div>
//               </div>
//             ))}
//             {machines.map((machine, index) => (
//               <div
//                 key={index + machines.length}
//                 className="flex-shrink-0 w-1/5 px-2"
//               >
//                 <div className="relative h-24 md:h-32 border-1 border-white rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-110">
//                   <img
//                     src={machine.src}
//                     alt={machine.alt}
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute bottom-0 w-full h-1/2 bg-black bg-opacity-80 flex items-center justify-center">
//                     <span className="text-white text-sm md:text-lg font-semibold">
//                       {machine.label}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-3 bottom-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
//         <IoChatboxEllipsesOutline />
//       </div>
//     </section>
//   );
// };

// export default Home;
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import paperCupMachine1 from "../../Assests/first.webp"; // Use the correct path for your image
import paperCupMachine2 from "../../Assests/first.webp"; // Use the correct path for your image
import flexoPrintingMachine from "../../Assests/logo.png"; // Use the correct path for your image
import paperCupMachine3 from "../../Assests/first.webp"; // Use the correct path for your image
import dieCuttingMachine from "../../Assests/first.webp"; // Use the correct path for your image
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import "./styles.css";

const machines = [
  {
    src: paperCupMachine1,
    alt: "Paper Cup Machine",
    label: "Paper Cup Machine",
  },
  {
    src: paperCupMachine2,
    alt: "Paper Cup Machine",
    label: "Paper Cup Machine",
  },
  {
    src: flexoPrintingMachine,
    alt: "Flexo Printing Machine",
    label: "Flexo Printing Machine",
  },
  {
    src: paperCupMachine3,
    alt: "Paper Cup Machine",
    label: "Paper Cup Machine",
  },
  {
    src: dieCuttingMachine,
    alt: "Die Cutting Machine",
    label: "Die Cutting Machine",
  },
];

const Home = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  const startAutoSlide = () => {
    animationRef.current = gsap.to(carouselRef.current, {
      xPercent: -100 * machines.length,
      ease: "none",
      duration: machines.length * 3, // Total duration for one complete cycle
      repeat: -1,
      modifiers: {
        xPercent: (xPercent) => {
          const index = machines.length;
          return `${xPercent % (index * 100)}%`;
        },
      },
    });
  };

  const handleMouseEnter = () => {
    gsap.to(animationRef.current, { timeScale: 0.5 }); // Slow down the animation
  };

  const handleMouseLeave = () => {
    gsap.to(animationRef.current, { timeScale: 1 }); // Resume normal speed
  };

  const handleVideoPlay = () => {
    const videoElement = document.getElementById("background-video");
    if (videoElement) {
      videoElement.play();
      setIsVideoPlaying(true);
    }
  };
  const [flipped, setFlipped] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFlipped((prevFlipped) => !prevFlipped);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="relative h-screen w-screen overflow-hidden bg-transparent bg-cover bg-center text-white font-sans">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onCanPlay={() => setIsVideoPlaying(true)}
      >
        <source src="bg.mp4" type="video/mp4" />
        <source src="bg.webm" type="video/webm" />
        <source src="bg.ogv" type="video/ogg" />
      </video>
      {!isVideoPlaying && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
          onClick={handleVideoPlay}
        >
          <button className="px-8 py-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 font-bold text-xl">
            Play Video
          </button>
        </div>
      )}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-10 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          <span>Paper </span>
          <span className="flip-animate">
            <span data-hover="Cup Machine">Cup Machine</span>
          </span>
        </h1>
        <p className="text-2xl md:text-3xl italic mb-8">Manufacturing</p>
        <button className="p-1 pl-4 pr-4 text-black bg-white rounded-md shadow-lg transition duration-300 font-bold text-base">
          Book Now
        </button>
      </div>
      <div
        className="absolute bottom-0 w-full flex items-center justify-center p-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden w-full mx-20 flex justify-center items-center">
          <div
            className="flex transition-transform px-24 items-center justify-center duration-500"
            ref={carouselRef}
          >
            {machines.map((machine, index) => (
              <div key={index} className="flex-shrink-0 w-1/5 px-4">
                <div className="relative flex flex-col overflow-hidden transform transition-transform duration-500 hover:scale-110">
                  <div className="relative">
                    <img
                      src={machine.src}
                      alt={machine.alt}
                      className="h-28 w-full  object-cover"
                    />
                    <div className="bottom-0 left-0 right-0 h-3/4 bg-gradient-to-b from-transparent to-black flex items-end justify-center">
                      <span className="text-white  text-xs md:text-xs font-medium p-2">
                        {machine.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {machines.map((machine, index) => (
              <div
                key={index + machines.length}
                className="flex-shrink-0  px-4"
              >
                <div className="relative flex flex-col overflow-hidden transform transition-transform duration-500 hover:scale-110">
                  <div className="relative">
                    <img
                      src={machine.src}
                      alt={machine.alt}
                      className="h-28 w-full object-cover"
                    />
                    <div className=" bottom-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-black flex items-end justify-center">
                      <span className="text-white text-xs md:text-xs font-medium p-2">
                        {machine.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute font-bold text-4xl rounded-full border-2 border-white p-2 mr-4 mb-4 bottom-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm transform hover:scale-110 transition duration-300">
        <IoChatboxEllipsesOutline />
      </div>
    </section>
  );
};

export default Home;
