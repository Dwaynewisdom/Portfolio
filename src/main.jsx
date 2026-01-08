import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./Homepage.jsx";
import Aurora from './Aurora';
import Mywork from "./Mywork.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Aurora
      colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
    />
    <Homepage/>
    <Mywork/>  
    <Footer/>
  </StrictMode>
);
