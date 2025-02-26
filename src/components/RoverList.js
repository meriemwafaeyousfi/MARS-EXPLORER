import React from "react";
import Rover from "./RoverButton";


const RoverList = ({ handleRoverClick, rovers }) => {
  return (
    <div>
      {rovers.map((rover, index) => (
         
        <Rover
          index={index}
          key={rover.id}
          name={rover.name}
          onClick={() => handleRoverClick(rover)}
        />
      ))}
    </div>
  );
};

export default RoverList;
