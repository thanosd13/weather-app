import React from "react";
import { FaCloudSunRain } from "react-icons/fa6";
import { MdExplore } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Text } from "@mantine/core";

// A card displaying nearby icons with dynamic background color
const IconsCard: React.FC<{ bgColor: string }> = ({ bgColor }) => {
  return (
    <div
      className={`bg-opacity-20 p-6 rounded-3xl shadow-lg flex flex-col items-center h-full ${bgColor}`}
    >
      <div className="flex items-center justify-center w-12">
        <img src="/images/icon-user.png" alt="Icon" className="w-16 h-12" />
      </div>
      <div className="pt-20 flex items-center justify-center flex-col gap-6">
        <div className="flex items-center justify-center flex-col">
          <FaCloudSunRain className="text-white w-12 h-12" />
          <Text className="text-white text-xs">weather</Text>
        </div>
        <div className="flex items-center justify-center flex-col">
          <MdExplore className="text-white w-12 h-12" />
          <Text className="text-white text-xs">explore</Text>
        </div>
        <div className="flex items-center justify-center flex-col">
          <MdLocationPin className="text-white w-12 h-12" />
          <Text className="text-white text-xs">cities</Text>
        </div>
        <div className="flex items-center justify-center flex-col">
          <IoSettings className="text-white w-12 h-12" />
          <Text className="text-white text-xs">settings</Text>
        </div>
      </div>
    </div>
  );
};

export default IconsCard;
