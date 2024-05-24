import React from "react";

const Header = () => {
  const redirectToExternalSite = () => {
    window.location.href = "https://ryota-onuma.netlify.app";
  };

  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>IMU Gallery</h1>
      <button
        style={{
          width: "150px",
          padding: "10px",
          background: "transparent",
          border: "1px solid white",
          color: "white",
          cursor: "pointer",
          fontSize: "18px",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onClick={redirectToExternalSite}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "white";
        }}
      >
        Ryota.O
      </button>
    </div>
  );
};

export default Header;
