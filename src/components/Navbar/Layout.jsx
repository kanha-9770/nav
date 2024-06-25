import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaLeaf, FaProjectDiagram, FaLightbulb, FaRecycle } from 'react-icons/fa'; // Example icons for items
import missionImage from "../../Asset/mission.png";
import companyImage from "../../Asset/company.png";
import strengthImage from "../../Asset/strength.png";
import pinkCityImage from "../../Asset/pinkCity.png"; // Add actual paths to your images
import "../../App.css"
const Layout = () => {
    const carouselRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            title: "Sustainability",
            description: "Paper industry adopts biodegradable materials and enhances recycling efforts.",
            color: "bg-green-100",
            icon: <FaLeaf />
        },
        {
            title: "Featured Projects",
            description: "Paper industry adopts biodegradable materials and enhances recycling efforts.",
            color: "bg-purple-100",
            icon: <FaProjectDiagram />
        },
        {
            title: "Innovation",
            description: "New technologies in paper manufacturing increase efficiency.",
            color: "bg-blue-100",
            icon: <FaLightbulb />
        },
        {
            title: "Recycling",
            description: "Recycling initiatives in the paper industry have grown significantly.",
            color: "bg-yellow-100",
            icon: <FaRecycle />
        },
    ];

    const titlesWithImages = [
        { title: "Mission & Vision", image: missionImage },
        { title: "Our Company", image: companyImage },
        { title: "Our Strength", image: strengthImage },
        { title: "The Pink City", image: pinkCityImage },
    ];

    const scrollDown = () => {
        if (currentIndex < items.length - 2) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const scrollUp = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
            scrollDown();
        } else {
            scrollUp();
        }
    };

    useEffect(() => {
        const carouselElement = carouselRef.current;

        gsap.fromTo(
            carouselElement.children,
            { y: '100%', scale: 0.5, opacity: 0 },
            { y: '0%', scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'elastic.out(1, 0.5)' }
        );

        carouselElement.addEventListener('wheel', handleWheel);

        return () => {
            carouselElement.removeEventListener('wheel', handleWheel);
        };
    }, [currentIndex]);

    return (
        <div className="border-t-[0.09px] flex flex-col md:flex-row p-6 h-full md:h-[54vh] items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-grow">
                {titlesWithImages.map((item, index) => (
                    <div key={index} className="p-2 flex flex-col items-center">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full rounded-3xl cursor-pointer"
                        />
                        <p className="mt-2 text-center text-sm font-semibold">{item.title}</p>
                    </div>
                ))}
            </div>
            <div className="hidden md:block ml-4 border-l h-full border-gray-300"></div>
            <div className="w-full md:w-2/4 mt-6 md:mt-0 ml-0 md:ml-4 flex flex-col justify-between">
                <div className="relative h-full overflow-hidden">
                    <div ref={carouselRef} className="h-full">
                        {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
                            <div key={index} className={`${item.color} flex items-center p-3 rounded-3xl mb-4`}>
                                <div className="h-12 w-12 mr-3 flex justify-center items-center text-2xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-md font-medium mb-2">{item.title}</h3>
                                    <p className="text-xs line-clamp-3">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    {currentIndex > 0 && (
                        <button onClick={scrollUp} className="absolute text-2xl top-2 p-2 rounded-full">
                            <IoIosArrowUp />
                        </button>
                    )}
                </div>
                <div className="bottom-0 flex w-full justify-center text-3xl">
                    {currentIndex < items.length - 2 && (
                        <button onClick={scrollDown} className="absolute bottom-0 bg-transparent flex justify-center items-center rounded-full">
                            <IoIosArrowDown />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Layout;

// import React, { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// const Layout = () => {
//     const carouselRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const items = [
//         {
//             title: "Sustainability",
//             description: "Paper industry adopts biodegradable materials and enhances recycling efforts.",
//             color: "bg-green-100"
//         },
//         {
//             title: "Featured Projects",
//             description: "Paper industry adopts biodegradable materials and enhances recycling efforts.",
//             color: "bg-purple-100"
//         },
//         {
//             title: "Innovation",
//             description: "New technologies in paper manufacturing increase efficiency.",
//             color: "bg-blue-100"
//         },
//         {
//             title: "Recycling",
//             description: "Recycling initiatives in the paper industry have grown significantly.",
//             color: "bg-yellow-100"
//         },
//     ];

//     const scrollDown = () => {
//         if (currentIndex < items.length - 2) {
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     const scrollUp = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     const handleWheel = (e) => {
//         if (e.deltaY > 0) {
//             scrollDown();
//         } else {
//             scrollUp();
//         }
//     };

//     const handleImageClick = (index) => {
//         setCurrentIndex(index);
//     };

//     useEffect(() => {
//         const carouselElement = carouselRef.current;

//         gsap.fromTo(
//             carouselElement.children,
//             { y: '100%', scale: 0.5, opacity: 0 },
//             { y: '0%', scale: 1, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'elastic.out(1, 0.5)' }
//         );

//         carouselElement.addEventListener('wheel', handleWheel);

//         return () => {
//             carouselElement.removeEventListener('wheel', handleWheel);
//         };
//     }, [currentIndex]);

//     return (
//         <div className="border-t-2 flex flex-col md:flex-row p-6 h-full md:h-[54vh] items-center justify-center">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-grow">
//                 {['Mission & Vision', 'Our Company', 'Our Strength', 'The Pink City'].map((text, index) => (
//                     <div key={index} className="p-4 flex flex-col items-center">
//                         <img
//                             src="https://via.placeholder.com/300"
//                             alt={text}
//                             className="w-full h-auto rounded-3xl shadow-lg cursor-pointer"
//                             onClick={() => handleImageClick(index)}
//                         />
//                         <p className="mt-2 text-center text-sm font-semibold">{text}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="hidden md:block ml-4 border-l h-full border-gray-300"></div>
//             <div className="w-full md:w-1/4 mt-6 md:mt-0 ml-0 md:ml-4 flex flex-col justify-between relative">
//                 <div className="relative h-full overflow-hidden">
//                     <div ref={carouselRef} className="h-full">
//                         {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
//                             <div key={index} className={`${item.color} flex items-center p-3 rounded-3xl mb-4 shadow-md`}>
//                                 <img src="https://via.placeholder.com/300" alt={item.title} className="h-12 w-12 rounded-3xl mr-3" />
//                                 <div>
//                                     <h3 className="text-md font-medium mb-2">{item.title}</h3>
//                                     <p className="text-xs line-clamp-3">{item.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {currentIndex > 0 && (
//                         <button onClick={scrollUp} className="absolute top-0 left-1/2 transform -translate-x-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
//                             <IoIosArrowUp />
//                         </button>
//                     )}
//                     {currentIndex < items.length - 2 && (
//                         <button onClick={scrollDown} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300">
//                             <IoIosArrowDown />
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Layout;
