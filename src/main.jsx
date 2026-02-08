import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./Tabs/AboutMe.jsx";
import Experience from "./Tabs/Workexperience.jsx";
import Projects from "./Tabs/Project.jsx";
import Footer from "./Tabs/Footer.jsx"
import Navbar from "./navbar.jsx";
createRoot(document.getElementById("root")).render(

  

  <StrictMode>
    <Navbar/>
    <section id="home"><Homepage/></section>
    <section id="experience"><Experience/></section>
    <section id="projects"><Projects/></section>
   <section id="contact"><Footer/></section>
    
      
   
    
  </StrictMode>
);
