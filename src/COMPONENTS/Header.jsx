import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="where">
        <a href="#">Where is the World?</a>
      </div>
      <div className="toggleTheme">
        <button onClick={toggleTheme}>
          {darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
