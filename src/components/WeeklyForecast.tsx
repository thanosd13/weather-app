import React from "react";
import { FaSun, FaCloud, FaWind, FaSnowflake } from "react-icons/fa";
import { FaTemperatureFull, FaCloudRain } from "react-icons/fa6";
import { SiRainmeter } from "react-icons/si";
import { MdSunny } from "react-icons/md";
import { TbClockHour8Filled } from "react-icons/tb";
import { Text } from "@mantine/core";
import Carousel from "./Carousel";

// A card displaying nearby weekly forecast with dynamic background color
const MultiCardCarousel: React.FC<{ bgColor: string }> = ({ bgColor }) => {
  const cards = [
    { title: "Sat", weather: "Sunny", icon: <FaSun /> },
    { title: "Sun", weather: "Rainy", icon: <FaCloudRain /> },
    { title: "Mon", weather: "Snowy", icon: <FaSnowflake /> },
    { title: "Tue", weather: "Sunny", icon: <FaSun /> },
    { title: "Wed", weather: "Sunny", icon: <FaSun /> },
    { title: "Thu", weather: "Rainy", icon: <FaCloudRain /> },
    { title: "Fri", weather: "Snowy", icon: <FaSnowflake /> },
  ];

  return (
    <div
      className={`${bgColor} bg-opacity-20 p-6 rounded-3xl shadow-lg flex flex-col h-full gap-9`}
    >
      <div className="flex flex-col items-center">
        <Carousel cards={cards} />
        <div className="flex items-center gap-1 text-center">
          <TbClockHour8Filled className="text-white text-lg" />
          <Text className="text-white text-lg">8:00PM GMT</Text>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Text className="text-white">AIR CONDITIONS</Text>
        <div className="flex gap-1">
          <FaTemperatureFull className="text-white text-2xl" />
          <div className="pt-2">
            <Text className="text-white text-xs font-bold">Real Feel</Text>
            <Text className="text-white text-xs font-bold">30°</Text>
          </div>
        </div>
        <div className="flex gap-1">
          <FaWind className="text-white text-2xl" />
          <div className="pt-2">
            <Text className="text-white text-xs font-bold">Wind</Text>
            <Text className="text-white text-xs font-bold">0.8 Km/hr</Text>
          </div>
        </div>
        <div className="flex gap-1">
          <SiRainmeter className="text-white text-2xl" />
          <div className="pt-2">
            <Text className="text-white text-xs font-bold">Chance of rain</Text>
            <Text className="text-white text-xs font-bold">2%</Text>
          </div>
        </div>
        <div className="flex gap-1">
          <MdSunny className="text-white text-2xl" />
          <div className="pt-2">
            <Text className="text-white text-xs font-bold">UV Index</Text>
            <Text className="text-white text-xs font-bold">4</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
