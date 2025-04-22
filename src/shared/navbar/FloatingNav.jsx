// src/components/FloatingNav.jsx
import { PhoneIcons, WhatsAppIcons } from "@/lib/CustomIcons";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlinePhone } from "react-icons/md";

const FloatingNav = () => {
    return (
        <div className="fixed right-0 top-1/3 z-50 flex flex-col items-center gap-4">
            <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white p-3 md:p-5 rounded-l-full shadow-lg hover:bg-orange-600 transition-all"
            >
                <BsWhatsapp className="text-2xl md:text-4xl" />
            </a>
            <a
                href="tel:+yourphonenumber"
                className="bg-orange-500 text-white p-3 md:p-5 rounded-l-full shadow-lg hover:bg-orange-600 transition-all"
            >
               <MdOutlinePhone className="text-2xl md:text-4xl" />
            </a>
        </div>
    );
};

export default FloatingNav;
