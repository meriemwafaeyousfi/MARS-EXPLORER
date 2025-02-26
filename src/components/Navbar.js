import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";
import "../App.css";
import imglogo from "../assets/logo.png"
import { rovers } from "../data/data";

const Navbar = () => {
  const navigate = useNavigate();
  const items = [
    { label: "Home",  command: () => {navigate('/') }},
    { label: "Rovers",   items: [
      { label: "Curiosity",  command: () => {navigate('/rover', { state: rovers[0] }) } },
      { label: "Opportunity",  command: () => {navigate('/rover', { state: rovers[1] }) } },
      { label: "Spirit",  command: () => {navigate('/rover', { state: rovers[2] }) } },
    ]},
    { label: "About",  command: () => {navigate('/') } },
  ];

  const logo = (
    <img
      src={imglogo}  
      alt="Logo"
      className="h-4 w-8" 
    />
  );

  return (
    <div className="fixed top-0 left-0 w-full" style={{ zIndex: 50 }}>
      <Menubar
        model={items}
        start={logo}  
        className="bg-transparent border-none shadow-none"
      />
    </div>
  );
};

export default Navbar;
