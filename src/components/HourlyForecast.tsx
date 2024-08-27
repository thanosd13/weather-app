import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  LabelList,
} from "recharts";
import { TbClockHour9Filled } from "react-icons/tb";
import { FaCloud, FaSun, FaCloudRain } from "react-icons/fa";
import { Text } from "@mantine/core";

// Sample data for the 24-hour weather forecast
const data = [
  {
    date: "06:00",
    temperature: 21,
    icon: <FaSun />,
    additionalInfo: "11.7 km",
  },
  {
    date: "09:00",
    temperature: 20,
    icon: <FaCloud />,
    additionalInfo: "11.7 km",
  },
  {
    date: "10:30:00",
    temperature: 20,
    icon: <FaCloudRain />,
    additionalInfo: "11.7 km",
  },
  {
    date: "12:00",
    temperature: 17,
    icon: <FaCloud />,
    additionalInfo: "11.7 km",
  },
  {
    date: "15:00",
    temperature: 15,
    icon: <FaSun />,
    additionalInfo: "11.7 km",
  },
  {
    date: "18:00",
    temperature: 13,
    icon: <FaCloudRain />,
    additionalInfo: "11.7 km",
  },
  {
    date: "21:00",
    temperature: 12,
    icon: <FaCloud />,
    additionalInfo: "11.7 km",
  },
];

// Custom label for displaying temperature on the chart
const CustomLabel = (props: any) => {
  const { x, y, value, index } = props;
  if (index === 0 || index === data.length - 1) {
    return null; // Hide first and last value
  }
  return (
    <text x={x} y={y} dy={-10} fill="white" fontSize={14} textAnchor="middle">
      {value}°C
    </text>
  );
};

// Custom label for displaying weather icons and additional info on the chart
const CustomIconLabel = (props: any) => {
  const { x, y, index } = props;
  if (index === 0 || index === data.length - 1) {
    return null; // Hide icon for first and last point
  }
  return (
    <foreignObject x={x - 20} y={y + 25} width={40} height={50}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        {data[index].icon}
        <span style={{ fontSize: "10px", marginTop: "2px" }}>
          {data[index].additionalInfo}
        </span>
        <span style={{ fontSize: "10px" }}>Now</span>
      </div>
    </foreignObject>
  );
};

const HourlyForecast: React.FC<{ bgColor: string }> = ({ bgColor }) => {
  return (
    <div
      className={`${bgColor} bg-opacity-20 rounded-3xl shadow-lg w-full h-60`}
    >
      <div className="flex items-center pl-8 pt-2 pb-2 gap-1">
        <TbClockHour9Filled className="text-white" />
        <Text className="text-white text-lg">24-hour forecast</Text>
      </div>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <Tooltip formatter={(value: number) => `${value}°C`} />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="orange"
              strokeWidth={2}
              dot={false} // Removes dots on the line
              isAnimationActive={false}
              connectNulls={true}
            >
              <LabelList dataKey="temperature" content={<CustomLabel />} />
              <LabelList dataKey="icon" content={<CustomIconLabel />} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HourlyForecast;
