'use client';
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const LatestSermonSection = () => {
  const ministryCards = [
    { id: 1, title: "Connect Groups", imageUrl: "" },
    { id: 2, title: "Ebenezar Kids", imageUrl: "" },
    { id: 3, title: "Genz Youth", imageUrl: "" },
    { id: 4, title: "Women's Ministry", imageUrl: "" },
    { id: 5, title: "Men's Fellowship", imageUrl: "" },
    { id: 6, title: "Prayer Warriors", imageUrl: "" },
    { id: 7, title: "Worship Team", imageUrl: "" },
    { id: 8, title: "Bible Study", imageUrl: "" },
    { id: 9, title: "Mission Group", imageUrl: "" },
  ];

  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Update cardsPerView based on screen size
  const cardsPerView = isMobile ? 1 : 3;
  const totalGroups = isMobile ? ministryCards.length : Math.ceil(ministryCards.length / cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    const scrollAmount = isMobile 
      ? container.offsetWidth * index
      : (container.offsetWidth / cardsPerView) * (index * cardsPerView);
    
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = isMobile 
      ? container.offsetWidth 
      : container.offsetWidth / cardsPerView;
    
    const currentIndex = isMobile
      ? Math.round(scrollPosition / cardWidth)
      : Math.round(scrollPosition / (cardWidth * cardsPerView));
    
    setActiveIndex(currentIndex);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        const nextIndex = (activeIndex + 1) % totalGroups;
        scrollToIndex(nextIndex);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [activeIndex, isPaused, totalGroups]);

  return (
    <div className="relative w-full px-4 md:px-8 py-8">
      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ministryCards.map((card) => (
          <div 
            key={card.id} 
            className="flex-none w-full md:w-1/3 px-2 snap-start"
          >
            <Card className="flex flex-col w-full items-center gap-[27px] bg-transparent border-none">
              <CardContent className="p-0 w-full">
                <div className="w-full h-[250px] md:h-[351px] bg-[#d9d9d9] mb-[27px]" />
                <h3 className="w-full font-medium text-white text-[28px] md:text-[38.2px] text-center mb-[27px] font-sans">
                  {card.title}
                </h3>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="w-[150px] md:w-[187px] h-[45px] md:h-[55px] border border-solid border-white rounded-none bg-transparent hover:bg-white/10"
                  >
                    <span className="font-medium text-white text-[18px] md:text-[24.6px]">
                      Learn More
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8 flex-wrap max-w-[200px] mx-auto md:max-w-none">
        {[...Array(totalGroups)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'w-3 md:w-8 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
