import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 pt-32 gap-6">
      <div className="flex justify-center lg:justify-end">
        <Link
          to={"/catalogo-general"}
          className="flex justify-center px-6 lg:px-1 w-[80%] lg:w-full items-center"
        >
          <img
            src="/images/catalogo_general@300x-100.jpg"
            alt=""
            className="hidden lg:block h-[48rem] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
          <img
            src="/images/catalogo-general-mobile.jpg"
            alt=""
            className="block lg:hidden hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
        </Link>
      </div>
      <div className="flex justify-center lg:justify-end">
        <Link
          to={"/catalogo-grafica"}
          className="flex justify-center px-6 lg:px-1 w-[80%] lg:w-full items-center"
        >
          <img
            src="/images/catalogo_grafica@300x-100.jpg"
            alt=""
            className="hidden lg:block h-[48rem] hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
          <img
            src="/images/catalogo-grafica-mobile.jpg"
            alt=""
            className="block lg:hidden hover:scale-105 duration-300 ease-in-out rounded-lg"
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col lg:hidden justify-center items-center gap-4">
        <img
          src="/images/rotate-phone.svg"
          className="rotate-90-cw w-20 h-auto py-5"
          alt=""
        />
        <span className="text-white text-center">
          PARA UNA MEJOR EXPERIENCIA, <br /> TE RECOMENDAMOS GIRAR LA PANTALLA
          EN MODO HORIZONTAL
        </span>
      </div>
    </div>
  );
};

export default Inicio;
