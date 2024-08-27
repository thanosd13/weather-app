import React from "react";
import { FaHeart } from "react-icons/fa";
import { Text } from "@mantine/core";

// A card displaying nearby activities with dynamic background color
const ActivitiesCard: React.FC<{ bgColor: string }> = ({ bgColor }) => {
  return (
    <div
      className={`${bgColor} bg-opacity-20 p-6 rounded-3xl shadow-lg flex flex-col gap-6 h-60`}
    >
      <div className="flex items-center gap-3 pl-4">
        <FaHeart className="text-white" />
        <Text className="text-white text-lg">Activities in your area</Text>
      </div>
      <div className="flex items-center justify-center gap-6 pl-8 pr-8">
        <div className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] lg:h-[6rem]">
          <img
            src="/images/climbing.jpg"
            alt="climbing"
            className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] lg:h-[6rem] rounded-lg"
          />
          <Text className="text-xs">2km away</Text>
        </div>
        <div className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] h-[8rem]">
          <img
            src="/images/cycling.jpg"
            alt="climbing"
            className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] h-[8rem] rounded-lg"
          />
          <Text className="text-xs">1.5km away</Text>
        </div>
        <div className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] h-[8rem]">
          <img
            src="/images/beach.jpg"
            alt="climbing"
            className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] h-[8rem] rounded-lg"
          />
          <Text className="text-xs">3km away</Text>
        </div>
        <div className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] h-[8rem]">
          <img
            src="/images/playground.jpg"
            alt="climbing"
            className="sm:w-[85rem] sm:h-[6rem] lg:w-[12rem] h-[8rem] rounded-lg"
          />
          <Text className="text-xs">500m away</Text>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesCard;
