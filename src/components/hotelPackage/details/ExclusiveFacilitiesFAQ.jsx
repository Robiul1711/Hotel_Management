import { useState } from "react";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";

const faqData = [
    {
        title: "One-click Room Service and Housekeeping",
        content: "Enjoy the convenience of effortless room service and housekeeping with a single click. Let us take care of your comfort while you relax.",
    },
    {
        title: "Order Food",
        content:
            "Satisfy your cravings with our diverse menu options, delivered straight to your room for a convenient and delicious dining experience.",
    },
    {
        title: "Transportation Services",
        content: "Need a ride? Whether it's airport transfers or local travel, our reliable transportation services are available to make your journey seamless.",
    },
    {
        title: "Pack My Bag Service",
        content: "Leave the packing to us. Our expert staff will neatly pack your belongings, making your departure stress-free.",
    },
    {
        title: "Complimentary In-Hotel Activities",
        content: "Enjoy a variety of in-hotel activities at no extra charge. From wellness sessions to recreational fun, there's something for everyone.",
    },
    {
        title: "Other Amenities (10 facilities)",
        content: "Explore our wide range of additional amenities designed to enhance your stay. Click to view all available options.",
    },
];


const ExclusiveFacilitiesFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className=" mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-6 ">High Exclusive Facilities</h2>
            <div className="space-y-4">
                {faqData.map((faq, index) => (
                    <div key={index} className="border rounded-xl bg-gray-50">
                        <button
                            onClick={() => toggle(index)}
                            className="flex items-center justify-between w-full px-4 py-4 text-left text-gray-800 font-medium hover:bg-gray-100 transition-all"
                        >
                            <span className="flex gap-2 items-center"><span className="bg-white p-3 shadow rounded-full font-semibold"><GoPlus className="text-2xl" /></span>{faq.title}</span>
                            {openIndex === index ? <HiOutlineMinusSmall /> : <GoPlus />}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out px-5 pl-20 text-sm text-gray-600 ${openIndex === index ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                                }`}
                        >
                            <ul className="list-disc list-inside">
                                <li>{faq.content}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExclusiveFacilitiesFAQ;