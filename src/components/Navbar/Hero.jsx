import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Arrow1 = () => (
  <svg width="220" height="43" viewBox="0 0 204 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.481201 10.2571C0.481201 10.2571 92.7812 81.7847 195.481 10.2571" stroke="#C2CBDE" strokeWidth="1.5" strokeDasharray="5 5" />
    <path d="M180.7 3.47455C180.7 3.47455 199.815 -2.05177 201.637 4.20916C203.459 10.4701 202.093 16.9444 196.176 25.8142" stroke="#C2CBDE" strokeWidth="1.5" strokeDasharray="4 4" />
  </svg>
);

const Arrow2 = () => (
  <svg width="220" height="43" viewBox="0 0 204 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.999756 32.7195C0.999756 32.7195 93.2998 -38.8081 196 32.7195" stroke="#C2CBDE" strokeWidth="1.5" strokeDasharray="5 5" />
    <path d="M181.219 39.4976C181.219 39.4976 200.334 45.024 202.156 38.763C203.978 32.5019 202.611 26.0275 196.694 17.1575" stroke="#C2CBDE" strokeWidth="1.5" strokeDasharray="4 4" />
  </svg>
);

const Hero = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            yoyo:true
          },
        }
      );

      gsap.to(el.querySelector('h3'), {
        color: gsap.utils.random(['#000000', '#FF0000']),
        duration: 1.5,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          scrub: true,
          yoyo:true
        },
      });
    });
  }, []);

  return (
    <div className="bg-pink-500 text-white py-12 relative">
      <div className="text-center mb-8">
        <h2 className="text-sm uppercase">Whats the function</h2>
        <h1 className="text-3xl font-bold">Meet the feature of our product</h1>
      </div>
      <div className="max-w-full mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className="text-center relative"
                ref={(el) => (stepsRef.current[index] = el)}
              >
                <div className="bg-white text-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute transform translate-x-full top-20 -translate-y-16">
                    {index % 2 === 0 ? <Arrow1 /> : <Arrow2 />}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    number: '01',
    id:'first',
    title: 'Set disbursement Instructions',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
  },
  {
    number: '02',
    id:'second',
    title: 'Assembly retrieves funds from your account',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
  },
  {
    number: '03',
    title: 'Assembly initiates disbursement',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
  },
  {
    number: '04',
    title: 'Customer receives funds payment',
    description: 'Get your blood tests delivered at home collect a sample from your blood tests.',
  },
];

export default Hero;
