import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavbarApp } from "./components/Navbar/NavbarApp";
import { SliderApp } from "./components/Slider/SliderApp";
import { InfoApp } from "./components/Information/InfoApp";
import { CardApp } from "./components/Cards/CardApp";
import { FooterApp } from "./components/Footer/FooterApp";
import { PersonajesApp } from "./components/Personajes/PersonajesApp";
import { PlanetasApp } from "./components/Planetas/PlanetasApp";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarApp />
      <SliderApp />
      <InfoApp />
      <CardApp />
        <Routes>
          <Route path="personaje" element={<PersonajesApp />} />
          <Route path="planeta" element={<PlanetasApp />} />
        </Routes>
      </BrowserRouter>
      <FooterApp />
    </>
  );
}

export default App;
