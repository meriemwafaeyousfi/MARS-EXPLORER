import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "primeflex/primeflex.css";
import "../App.css";
import Background from "../components/Background";
import RoverForm from "../components/RoverForm";
import RoverGallery from "../components/RoverGallery";
import Navbar from "../components/Navbar";
import { cameras } from "../data/data";

function Rover() {
  const location = useLocation();
  const initialRover = location.state;
  const [selectedRover, setSelectedRover] = useState(initialRover);
  const [selectedCamera, setSelectedCamera] = useState(cameras[0].value);
  const [selectedSol, setSelectedSol] = useState(50);

  return (
    <div className="flex align-items-center grid h-screen w-full mt-4">
      <Background />
      <Navbar />

      <div className="flex flex-column align-items-center justify-content-center col-12  lg:col-6 h-full">
        <h1 className="rover-title text-center">
          {selectedRover?.name || "Select Rover"}
        </h1>
        <p className="rover-description p-2 mr-4 ml-4 text-center">
          {selectedRover?.description || ""}. <br />
          <br />
          Explore stunning photos captured by the{" "}
          {selectedRover?.name || "selected"} Mars rover by choosing the number
          of days (SOL) since its landing and selecting the camera type.
        </p>

        <RoverForm
          selectedRover={selectedRover}
          onRoverChange={setSelectedRover}
          selectedCamera={selectedCamera}
          onCameraChange={setSelectedCamera}
          selectedSol={selectedSol}
          onSolChange={setSelectedSol}
        />
      </div>

      <div className="flex align-items-center col-12 lg:col-6 ">
        <RoverGallery
          sol={100}
          cameraName="MAST"
          selectedRover={selectedRover}
          selectedCamera={selectedCamera}
          selectedSol={selectedSol}
        />
      </div>
    </div>
  );
}

export default Rover;
