"use client";
import { useState, useEffect } from 'react';

const Scroll_Section = () => {
  const sections = [
    {
      heading: "Capture tasks at the speed of thought",
      paragraph: "We’ve spent over a decade refining Todoist to be an extension of your mind. Capture and organize tasks instantly using easy-flowing, natural language.",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      heading: "Stay organized and focused",
      paragraph: "Achieve mental clarity by sorting tasks into Today, Upcoming, or using custom filters. See only what you need, when you need it.",
      videoSrc: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      heading: "Simplify your planning",
      paragraph: "Make the most of your time. Schedule due dates, visualize your week in calendar view, and set recurring tasks with ease.",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const sectionHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const index = Math.floor(scrollY / sectionHeight);
    setCurrentSection(Math.min(index, sections.length - 1));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex">
        {/* Text Section */}
        <div className="w-1/2 flex flex-col justify-center pl-16 pr-8 space-y-4">
          {sections.map((section, index) => (
            <div key={index} className="h-screen flex items-center">
              <div>
                <h2 className="text-5xl font-bold">{section.heading}</h2>
                <p className="mt-4 text-xl">{section.paragraph}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Video Section */}
        <div className='w-1/2'>
          <div className="w-96 h-72 mt-60 ml-56 sticky top-60">
            <img 
              src="/scroll/image.avif" 
              alt="bg image" 
              className="absolute top-[-20px] left-[-50px] h-72 w-96 object-cover z-0" 
            />
            <video 
              className="w-full h-full object-cover relative z-10" 
              src={sections[currentSection].videoSrc} 
              autoPlay 
              muted 
              loop 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll_Section;
