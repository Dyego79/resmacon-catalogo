import { UI } from "./components/UI";
import { useRef, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CatalogoGeneral from "./components/Catalogo-general";
import CatalogoGrafica from "./components/Catalogo-grafica";
import Inicio from "./components/Inicio";
import Header from "./components/Header";
import WhatsAppBtn from "./components/WhatsAppBtn";
import { Loader } from "@react-three/drei";

function App() {
  const orbitControlsRef = useRef();
  const resetControls = () => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.reset(); // Resetea los controles a su estado inicial
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/catalogo-general"
            element={<CatalogoGeneral />}
            loader={<Loader />}
          />
          <Route
            path="/catalogo-grafica"
            element={<CatalogoGrafica />}
            loader={<Loader />}
          />
        </Routes>
      </BrowserRouter>
      <WhatsAppBtn />
    </>
  );
}

export default App;
