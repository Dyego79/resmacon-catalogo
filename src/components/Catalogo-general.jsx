import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { useRef, useEffect, useState } from "react";
import { UI } from "./UI";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "@react-three/drei";
import { IoBookOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";

function CatalogoGeneral() {
  const orbitControlsRef = useRef();
  const resetControls = () => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.reset(); // Resetea los controles a su estado inicial
    }
  };

  return (
    <>
      <div className="text-white absolute w-full flex justify-center z-20">
        <Link
          to={"/catalogo-grafica"}
          className="leading-4 uppercase text-gray-800 font-bold bg-yellow-400 p-3 lg:p-5 rounded-b-lg text-center "
        >
          Ver <br /> Catalogo
          <br /> Gráficas
        </Link>
      </div>

      <UI />
      <button
        className="absolute right-2 top-2 items-center text-white cursor-pointer p-2 mr-2 flex flex-col z-20 rounded-md"
        onClick={resetControls}
      >
        <IoBookOutline size={30} />
        <span className="text-[0.7rem] font-black">VER FRENTE</span>
      </button>
      <Loader />
      <Canvas shadows camera={{ position: [0, -0.5, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={"null"}>
            <Experience orbitControlsRef={orbitControlsRef} />
          </Suspense>
        </group>
      </Canvas>
      <a
        download
        target="_blank"
        href="https://www.resmacon.com/pdf/Resmacon-Catalogo-General.pdf"
        className="cursor-pointer z-20 fixed w-24 h-2w-24 left-3 bottom-16 flex flex-col items-center justify-center gap-3 p-4"
      >
        <GrDocumentPdf color="white" size={38} />
        <span className="text-white text-sm">DESCARGAR</span>
      </a>
    </>
  );
}

export default CatalogoGeneral;
