import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppBtn = () => {
  return (
    <div className="absolute btn-whatsapp-pulse z-30">
      <a
        target="_blank"
        href="https://wa.me/541176114767?text=Hola,%20te%20queria%20consultar%20por%20el%20producto%20que%20vi%20en%20el%20Catalogo..."
      >
        <FaWhatsapp color="white" size={48} />
      </a>
    </div>
  );
};

export default WhatsAppBtn;
