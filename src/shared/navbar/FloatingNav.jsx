// src/components/FloatingNav.jsx
import { CustomPhnone1Icon, CustomWhatsapp1Icon } from "@/lib/CustomIconPackage";

const FloatingNav = () => {
    return (
        <div className="fixed -right-2 top-3/4 z-50 flex flex-col items-center gap-4">
            <a
                href="https://api.whatsapp.com/send?phone=919769389956&text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Hich"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-2 sm:p-3 md:p-4 rounded-l-full shadow-lg hover:bg-green-600 transition-all"
            >
                <CustomWhatsapp1Icon 
                    height="30" 
                    width="30"
                    className="sm:h-6 sm:w-6 md:h-8 md:w-8"
                />
            </a>
            {/* <a
                href="tel:+yourphonenumber"
                className="bg-orange-500 text-white p-2 sm:p-3 md:p-4 rounded-l-full shadow-lg hover:bg-orange-600 transition-all"
            >
                <CustomPhnone1Icon 
                    height="20" 
                    width="20"
                    className="sm:h-6 sm:w-6 md:h-8 md:w-8"
                />
            </a> */}
        </div>
    );
};

export default FloatingNav;