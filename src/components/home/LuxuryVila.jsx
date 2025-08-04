import image from '@/assets/images/luxury.png';
import EnquireForm from './EnquireForm';
import PropertyListingForm from './PropertyListingForm';
import useHomeCardHook from '@/hooks/useHomeCardHook';

const LuxuryVila = () => {

    const { cardData } = useHomeCardHook();
    console.log(cardData);


    return (
        <div className='flex  justify-between rounded-[10px] '>
            <div className="w-[60%]  border-black flex items-center justify-center pl-4 py-4 rounded-l-[18px] xlg:px-20 bg-[#fef7da] text-dark">
                <div className="">
                    <p className="text-[15px] sm:text-[24px] font-bold">
                        {cardData[0]?.title}

                    </p>
                    <ul className='list-disc list-inside text-gray-500 text-[13px] space-y-2 md:text-lg'>
                        {
                            cardData[0]?.points?.map((item, index) =>
                                <li key={index} >{item}</li>

                            )
                        }
                    </ul>
                    <div className="">
                        {/* <PropertyListingForm /> zoho form  */}
                        <EnquireForm />
                    </div>
                </div>
            </div>
            <div className="w-[40%]  border-black   ">

                <img src={cardData[0]?.image} alt="" className='w-full h-full rounded-r-[18px]' />
            </div>

        </div>
    );
};

export default LuxuryVila;