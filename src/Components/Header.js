import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1 className="heading">
        <span style={{ color: "#308d46" }}>K</span>
        <span style={{ color: "#616161" }}>E</span>
        <span style={{ color: "#36454F" }}>E</span>
        <span style={{ color: "#353935" }}>P </span>
        <span style={{ color: "#308d46" }}>N</span>
        <span style={{ color: "#616161" }}>O</span>
        <span style={{ color: "#36454F" }}>T</span>
        <span style={{ color: "#353935" }}>E</span>
        <span style={{ color: "#414345" }}>S</span>
      </h1>
    
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        <DarkModeIcon />
      </button>
    </div>
  );
};

export default Header;
