import React, { useEffect } from "react";
import "./App.css";
import { Container, MantineProvider } from "@mantine/core";
import HomePage from "./pages/HomePage";
import { useDay, DayProvider } from "./context/DayContext";

const AppContent = () => {
  const { selectedDay } = useDay();

  const backgroundThemes: Record<string, string> = {
    Sunny: 'url("/images/sky-theme.jpg")',
    Rainy: 'url("/images/rain-theme.jpg")',
    Snowy: 'url("/images/snow-theme.jpg")',
  };

  useEffect(() => {
    console.log("selected day:", selectedDay);
  });
  return (
    <Container
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: backgroundThemes[selectedDay] }}
    >
      <HomePage />
    </Container>
  );
};

function App() {
  return (
    <MantineProvider>
      <DayProvider>
        <AppContent />
      </DayProvider>
    </MantineProvider>
  );
}

export default App;
