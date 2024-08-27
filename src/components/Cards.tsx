import React, { useEffect } from "react";
import IconsCard from "./IconsCard";
import ActivitiesCard from "./ActivitiesCard";
import HourlyForecast from "./HourlyForecast";
import WeeklyForecast from "./WeeklyForecast";
import Carousel from "./Carousel";
import { FaSun, FaSnowflake } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa6";
import { useDay } from "../context/DayContext";

const Cards: React.FC = () => {
  const { selectedDay } = useDay(); // Get the currently selected day from context
  const [background, setBackground] = React.useState(""); // State to manage background color based on weather

  const cards = [
    { title: "Sat", weather: "Sun", icon: <FaSun /> },
    { title: "Sun", weather: "Rain", icon: <FaCloudRain /> },
    { title: "Mon", weather: "Snow", icon: <FaSnowflake /> },
    { title: "Tue", weather: "Sun", icon: <FaSun /> },
    { title: "Wed", weather: "Sun", icon: <FaSun /> },
    { title: "Thu", weather: "Rain", icon: <FaCloudRain /> },
    { title: "Fri", weather: "Snow", icon: <FaSnowflake /> },
  ];

  // useEffect to update the background color based on the selected weather
  useEffect(() => {
    if (selectedDay === "Sunny") {
      setBackground("bg-white");
    } else if (selectedDay === "Rainy") {
      setBackground("bg-cyan-800");
    } else {
      setBackground("bg-gray-400");
    }
  }, [selectedDay]);

  return (
    <div className="pl-8 flex gap-6 w-full flex-col sm:flex-row sm:mt-[2rem] lg:mt-0">
      <div className="hidden sm:block sm:w-[10%] lg:w-[5%]">
        <IconsCard bgColor={background} />
      </div>
      <div className="hidden sm:flex flex-col gap-9 w-full sm:w-[46%] lg:w-[67%]">
        <ActivitiesCard bgColor={background} />
        <HourlyForecast bgColor={background} />
      </div>
      <div className="block pr-8 pt-16 pb-12 sm:hidden w-full">
        <Carousel cards={cards} />
        <HourlyForecast bgColor={background} />
      </div>
      <div className="hidden sm:block sm:w-[39%] lg:w-[28%] pr-9">
        <WeeklyForecast bgColor={background} />
      </div>
    </div>
  );
};

export default Cards;
