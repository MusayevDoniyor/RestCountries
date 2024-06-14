import React from "react";
import { ThemeProvider } from "./COMPONENTS/ThemeContext";
import { CountriesProvider } from "./COMPONENTS/CountriesContext";
import Countries from "./COMPONENTS/Countries";
import Header from "./COMPONENTS/Header";
import "./Styles/CSS/index.css";

const App = () => {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <div className="App">
          <Header />
          <div className="container">
            <Countries />
          </div>
        </div>
      </CountriesProvider>
    </ThemeProvider>
  );
};

export default App;
