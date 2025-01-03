import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const picturesGrafica = [
  "Catalogo-Grafica-02",
  "Catalogo-Grafica-03",
  "Catalogo-Grafica-04",
  "Catalogo-Grafica-05",
  "Catalogo-Grafica-06",
  "Catalogo-Grafica-07",
  "Catalogo-Grafica-08",
  "Catalogo-Grafica-09",
  "Catalogo-Grafica-10",
  "Catalogo-Grafica-11",
  "Catalogo-Grafica-12",
  "Catalogo-Grafica-13",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "/book-cover2",
    back: picturesGrafica[0],
  },
];
for (let i = 1; i < picturesGrafica.length - 1; i += 2) {
  pages.push({
    front: picturesGrafica[i % picturesGrafica.length],
    back: picturesGrafica[(i + 1) % picturesGrafica.length],
  });
}

pages.push({
  front: picturesGrafica[picturesGrafica.length - 1],
  back: "/book-back2",
});

export const UIgrafica = () => {
  const [page, setPage] = useAtom(pageAtom);

  /*   useEffect(() => {
    const playAudio = () => {
      const audio = new Audio("/audios/page-flip-01a.mp3");
      audio.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    };

    window.addEventListener("click", playAudio, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, [page]); */

  // Solo mostrar las páginas de carátulas
  const caratulasIndexes = [0, 1, 2, 3, 4, 5, 6];
  const pageNames = {
    0: "PORTADA",
    1: "OBRA | NAT",
    2: "ENCAPADA | ILUSTRACION",
    3: "KRAFT | AUTOADHESIVO",
    4: "COLOR | CARTON",
    5: "PAPEL SEDA | TINTAS",
    6: "CORTE Y REBOBINADO",
  };
  const filteredPages = pages.filter((_, index) =>
    caratulasIndexes.includes(index)
  );
  useEffect(() => {
    setPage(caratulasIndexes[0]); // Activa la página 1 (índice 1)
  }, [setPage]);
  return (
    <>
      <main className="pointer-events-none z-10 fixed  inset-0  flex justify-between flex-col">
        <div className="w-full overflow-auto pointer-events-auto flex justify-center absolute bottom-0">
          <div className="overflow-auto flex items-center gap-2 max-w-full p-2 lg:p-5">
            {filteredPages.map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-3 py-1 rounded-full text-lg uppercase shrink-0 border ${
                  caratulasIndexes[index] === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(caratulasIndexes[index])}
              >
                {pageNames[caratulasIndexes[index]]}
                {/*    {pageNames[caratulasIndexes[index]] ||
                  `Carátula ${caratulasIndexes[index]}`} */}
              </button>
            ))}
            {/* <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Contra Tapa
            </button> */}
          </div>
        </div>
      </main>
    </>
  );
};
