import React, { useEffect } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Text } from "@mantine/core";
import { useDay } from "../context/DayContext";

const Carousel: React.FC<{
  cards: { title: string; weather: string; icon: React.ReactNode }[];
}> = ({ cards }) => {
  const { setSelectedDay } = useDay();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(5);

  React.useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 1000) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount(); // Run once on mount
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const centerIndex =
      (currentIndex + Math.floor(visibleCount / 2)) % cards.length;
    setSelectedDay(cards[centerIndex].weather);
  }, [currentIndex, visibleCount, cards, setSelectedDay]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const getVisibleCards = () => {
    if (currentIndex + visibleCount <= cards.length) {
      return cards.slice(currentIndex, currentIndex + visibleCount);
    } else {
      return [
        ...cards.slice(currentIndex),
        ...cards.slice(0, (currentIndex + visibleCount) % cards.length),
      ];
    }
  };

  return (
    <div className="w-11/12 mx-auto pt-3">
      <div className="relative">
        <div className="flex space-x-4 items-center justify-center gap-3">
          {getVisibleCards().map((card, index) => {
            const isCenter = index === Math.floor(visibleCount / 2);
            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center ${
                  isCenter
                    ? "text-white text-opacity-100 scale-110 text-2xl"
                    : "text-gray-400 text-opacity-30 text-xl"
                }`}
              >
                <Text className="text-lg font-bold mb-2">{card.title}</Text>
                <div
                  className={`text-4xl ${isCenter ? "text-white text-2xl" : "text-white-500 text-opacity-30 text-xl"}`}
                >
                  {card.icon}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-4 relative bottom-24">
          <MdArrowBackIosNew
            className="w-8 h-8 text-orange-300 cursor-pointer"
            onClick={handlePrev}
          />
          <MdArrowForwardIos
            className="w-8 h-8 text-orange-300 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
