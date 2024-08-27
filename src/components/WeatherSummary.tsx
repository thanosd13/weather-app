import React from "react";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaCloudSun } from "react-icons/fa";
import { Text } from "@mantine/core";
import { useDay } from "../context/DayContext";

// Displays a weather summary including location, temperature, and weather condition
const WeatherSummary: React.FC = () => {
  const { selectedDay } = useDay(); // Gets the currently selected weather condition
  return (
    <div className="w-full flex flex-col sm:pl-16 sm:pt-32 items-center justify-center sm:gap-6 sm:h-[25rem]">
      <div className="flex items-center justify-start gap-1 sm:gap-0 sm:justify-start w-full pl-6 pt-6 pb-20 sm:pb-0 sm:pl-0 sm:pt-0">
        <RiMapPin2Fill className="mr-2 text-white text-2xl" />
        <Text className="font-bold text-white">New York</Text>
        <IoIosArrowDown className="text-white text-3xl block sm:hidden" />
        <MdKeyboardArrowRight className="text-white text-3xl hidden sm:block" />
      </div>
      <div className="w-full flex items-center justify-center sm:justify-start">
        <h3 className="text-white text-4xl font-bold">{selectedDay}</h3>
      </div>
      <div className="w-full flex flex-col-reverse gap-[1px] sm:flex-row items-center sm:gap-[20rem] lg:gap-[78rem] sm:mt-12">
        <div>
          <Text className="font-bold text-white text-5xl text-center sm:text-left">
            26°C
          </Text>
          <Text className="text-white">Sunday | 12 Dec 2023</Text>
        </div>
        <div>
          <FaCloudSun className="text-white w-40 h-40 sm:w-52 sm:h-56 sm:mb-24" />
        </div>
      </div>
    </div>
  );
};

export default WeatherSummary;
