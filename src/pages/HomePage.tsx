import React from "react";
import WeatherSummary from "../components/WeatherSummary";
import Cards from "../components/Cards";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <WeatherSummary />
      <Cards />
    </div>
  );
};

export default HomePage;
