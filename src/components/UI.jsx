import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const pictures = [
  "Catalogo-Resmacon-2024_Resmacon-2",
  "Catalogo-Resmacon-2024_Resmacon-3",
  "Catalogo-Resmacon-2024_Resmacon-4",
  "Catalogo-Resmacon-2024_Resmacon-5",
  "Catalogo-Resmacon-2024_Resmacon-6",
  "Catalogo-Resmacon-2024_Resmacon-7",
  "Catalogo-Resmacon-2024_Resmacon-8",
  "Catalogo-Resmacon-2024_Resmacon-9",
  "Catalogo-Resmacon-2024_Resmacon-10",
  "Catalogo-Resmacon-2024_Resmacon-11",
  "Catalogo-Resmacon-2024_Resmacon-12",
  "Catalogo-Resmacon-2024_Resmacon-13",
  "Catalogo-Resmacon-2024_Resmacon-14",
  "Catalogo-Resmacon-2024_Resmacon-15",
  "Catalogo-Resmacon-2024_Resmacon-16",
  "Catalogo-Resmacon-2024_Resmacon-17",
  "Catalogo-Resmacon-2024_Resmacon-18",
  "Catalogo-Resmacon-2024_Resmacon-19",
  "Catalogo-Resmacon-2024_Resmacon-20",
  "Catalogo-Resmacon-2024_Resmacon-21",
  "Catalogo-Resmacon-2024_Resmacon-22",
  "Catalogo-Resmacon-2024_Resmacon-23",
  "Catalogo-Resmacon-2024_Resmacon-24",
  "Catalogo-Resmacon-2024_Resmacon-25",
  "Catalogo-Resmacon-2024_Resmacon-26",
  "Catalogo-Resmacon-2024_Resmacon-27",
  "Catalogo-Resmacon-2024_Resmacon-28",
  "Catalogo-Resmacon-2024_Resmacon-29",
  "Catalogo-Resmacon-2024_Resmacon-30",
  "Catalogo-Resmacon-2024_Resmacon-31",
  "Catalogo-Resmacon-2024_Resmacon-32",
  "Catalogo-Resmacon-2024_Resmacon-33",
  "Catalogo-Resmacon-2024_Resmacon-34",
  "Catalogo-Resmacon-2024_Resmacon-35",
  "Catalogo-Resmacon-2024_Resmacon-36",
  "Catalogo-Resmacon-2024_Resmacon-37",
  "Catalogo-Resmacon-2024_Resmacon-38",
  "Catalogo-Resmacon-2024_Resmacon-39",
  "Catalogo-Resmacon-2024_Resmacon-40",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "/book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  /* useEffect(() => {
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
  const caratulasIndexes = [0, 1, 8, 9, 13, 15, 17, 19];
  const pageNames = {
    0: "Portada",
    1: "Resmas",
    8: "Rollos",
    9: "Higiene",
    13: "Limpieza",
    15: "Embalaje",
    17: "Bolsas",
    19: "Sobres ",
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
