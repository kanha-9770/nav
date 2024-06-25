import React from 'react';
import VideoCarousel from '../VideoCarousel';

import first from "../../Asset/first.png"
function Home() {
    return (
        <div className="min-h-screen mt-12 p-6 rounded-3xl flex flex-col items-center">
            <div className="relative w-full h-96">
                <video className="w-full rounded-3xl p-2 h-full object-cover" autoPlay loop muted>
                    <source src="bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full flex flex-row">
                <div className="w-2/5 px-4 flex justify-between items-center flex-col">
                    <div>
                        <h1 className="text-4xl font-thin">FOOD PACKING MACHINES</h1>
                        <h2 className="text-3xl italic">𝓂𝒶𝓃𝓊𝒻𝒶𝒸𝓉𝓊𝓇𝒾𝓃𝑔</h2>
                    </div>
                    <div className="flex space-x-1 bottom-0">
                        <button className="px-4 py-2  rounded">Information</button>
                        <button className="px-4 py-2  rounded">Gallery</button>
                        <button className="px-4 py-2  rounded">Specifications</button>
                        <button className="px-4 py-2  rounded">360 View</button>
                    </div>
                </div>
                <div className="w-3/5 px-4 py-6 bg-white shadow-md border-2 flex justify-center">
                    <div className="flex flex-col items-center md:flex-row">
                       <VideoCarousel/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
