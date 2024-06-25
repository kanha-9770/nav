import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { hightlightsSlides } from "../constants";
import { nextImg, prevImg } from "../utils";
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const containerRef = useRef(null);

  const [video, setVideo] = useState({
    videoId: 0,
    isPlaying: true,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { videoId } = video;

  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .set(containerRef.current, {
        scale: 0,
        transformOrigin: "center center",
      })
      .to(containerRef.current, {
        scale: 1,
        duration: 1,
        ease: "power2.inOut",
      });

    gsap.to(videoRef.current[videoId], {
      scrollTrigger: {
        trigger: videoRef.current[videoId],
        toggleActions: "restart none none none",
      },
    });
  }, [videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        onComplete: () => {
          gsap.to(videoDivRef.current[videoId], {
            width: "12px",
          });
          gsap.to(span[videoId], {
            backgroundColor: "#afafaf",
          });
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      gsap.ticker.add(animUpdate);
    }
  }, [videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      videoRef.current[videoId].play();
    }
  }, [videoId, loadedData]);

  const handleProcess = (type) => {
    switch (type) {
      case "next":
        setVideo((pre) => ({
          ...pre,
          videoId: (videoId + 1) % hightlightsSlides.length,
        }));
        break;

      case "prev":
        setVideo((pre) => ({
          ...pre,
          videoId:
            (videoId - 1 + hightlightsSlides.length) % hightlightsSlides.length,
        }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="overflow-hidden relative" style={{ height: "70vh" }}>
          <div className="absolute top-0 left-0 w-full h-full" id="slider">
            <div
              ref={containerRef}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              {hightlightsSlides.map((list, i) => (
                <div
                  key={list.id}
                  className={`w-full h-full flex flex-col items-center justify-center absolute transition-all duration-1000 ${
                    videoId === i ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                >
                  <div className="video-carousel_container h-full flex-center">
                    <div className="w-full h-full rounded-3xl overflow-hidden bg-gray-400">
                      <video
                        id={`video${i}`}
                        playsInline={true}
                        className="pointer-events-none"
                        preload="auto"
                        muted
                        ref={(el) => (videoRef.current[i] = el)}
                        onEnded={() => handleProcess("next")}
                        onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                      >
                        <source src={list.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                  <div className="absolute top-12 left-5 z-10 space-y-2">
                    {list.textLists.map((text, index) => (
                      <p
                        key={index}
                        className="text-2xl md:text-3xl font-bold text-white bg-opacity-50 bg-black p-2 rounded-md shadow-md"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (videoDivRef.current[i] = el)}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>

      
      </div>
    </>
  );
};

export default VideoCarousel;
