// src/components/FloatingNav.jsx
import { PhoneIcons, WhatsAppIcons } from "@/lib/CustomIcons";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingNav = () => {
    return (
        <div className="fixed right-0 top-1/3 z-50 flex flex-col items-center gap-4">
            <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white p-4 rounded-l-full shadow-lg hover:bg-orange-600 transition-all"
            >
                <WhatsAppIcons />
            </a>
            <a
                href="tel:+yourphonenumber"
                className="bg-orange-500 text-white p-5 rounded-l-full shadow-lg hover:bg-orange-600 transition-all"
            >
                <PhoneIcons />
            </a>
        </div>
    );
};

export default FloatingNav;
