import React from "react";

const RoverCard = ({ rover, handleRoverSelection , index}) => {
  return (
    <div
    key={index}
    className={`absolute border-round shadow-4 overflow-hidden cursor-pointer rover rover-${index} `}
    style={{
      width: "120px",
      height: "150px",
      position: "relative",
      border: "4px solid white",
    }}
    onClick={() => handleRoverSelection(rover)}
  >
    <img
      src={rover.imgSrc}
      alt={rover.name}
      className="w-full h-full"
      style={{ objectFit: "cover" }}
    />
    <div
      className="absolute bottom-0 left-0 w-full h-8rem flex align-items-center justify-content-center "
      style={{
        // height: "150px",
        background: "linear-gradient(to top, black, rgba(0, 0, 0, 0))",
      }}
    >
      <span className="text-400 hover:text-white mt-8 font-bold text-base">
        {rover.name}
      </span>
    </div>
  </div>
  );
};

export default RoverCard;
