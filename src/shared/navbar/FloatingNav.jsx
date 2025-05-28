// src/components/FloatingNav.jsx
import { CustomPhnone1Icon, CustomWhatsapp1Icon } from "@/lib/CustomIconPackage";

const FloatingNav = () => {
    return (
        <div className="fixed -right-2 top-1/3 z-50 flex flex-col items-center gap-4">
            <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white p-2 sm:p-3 md:p-4 rounded-l-full shadow-lg hover:bg-orange-600 transition-all"
            >
                <CustomWhatsapp1Icon 
                    height="20" 
                    width="20"
                    className="sm:h-6 sm:w-6 md:h-8 md:w-8"
                />
            </a>
            <a
                href="tel:+yourphonenumber"
                className="bg-orange-500 text-white p-2 sm:p-3 md:p-4 rounded-l-full shadow-lg hover:bg-orange-600 transition-all"
            >
                <CustomPhnone1Icon 
                    height="20" 
                    width="20"
                    className="sm:h-6 sm:w-6 md:h-8 md:w-8"
                />
            </a>
        </div>
    );
};

export default FloatingNav;