import React, { createContext, useState, useContext, ReactNode } from "react";

type DayContextType = {
  selectedDay: string;
  setSelectedDay: (day: string) => void;
};

type DayProviderProps = {
  children: ReactNode;
};

const DayContext = createContext<DayContextType | undefined>(undefined);

export const DayProvider: React.FC<DayProviderProps> = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState("");
  return (
    <DayContext.Provider value={{ selectedDay, setSelectedDay }}>
      {children}
    </DayContext.Provider>
  );
};

export const useDay = () => {
  const context = useContext(DayContext);
  if (!context) {
    throw new Error("useDay must be used within a DayProvider");
  }
  return context;
};
