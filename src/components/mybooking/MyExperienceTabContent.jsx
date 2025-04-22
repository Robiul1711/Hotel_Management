import image1 from '@/assets/images/stay1.png';
import image2 from '@/assets/images/hotel1.png';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { IoLocationOutline } from 'react-icons/io5';

const BookingCard = ({ img }) => {
    return (
        <div className="flex border p-2 rounded-lg gap-4 items-center">
            <div className="w-[40%] md:w-1/4">
                <img src={img} className='' alt="" />
            </div>
            <div className="p-4 w-[60%] md:w-3/4 md:space-y-5">
                <button className='md:p-4 px-2 bg-[#fff8db]'>Booked</button>
                <p className="flex items-center text-lg gap-2">
                    <IoLocationOutline />
                    <span className="truncate">lonavala</span>
                </p>
                <p className="md:text-[24px]">Tropical Adventures and Sun-Kissed Shores</p>

                {/* checkin checkout  */}
                <div className="flex items-center justify-between ">
                    <div className="flex items-center md:gap-5">
                        <div className="">
                            <p className="text-xs md:text-lg">Check-in</p>
                            <p className="text-xs text-[#747474]">25th Feb ‘25</p>
                        </div>
                        <div className="">
                            <HiOutlineArrowLongRight className='text-3xl' />
                        </div>
                        <div className="">
                            <p className="text-xs md:text-lg">Check-out</p>
                            <p className="text-xs text-[#747474]">25th Feb ‘25</p>
                        </div>
                    </div>
                    <p className="hidden md:flex text-[24px]">INR 2500</p>
                </div>

            </div>
        </div>
    )
}


const MyExperienceTabContent = () => {
    return (
        <div className='space-y-10 md:space-y-40'>
            <div className="space-y-5">
                <p className="text-[32px]">Upcoming</p>
                <BookingCard img={image1} />
            </div>
            <div className="space-y-5">
                <p className="text-[32px]">History</p>
                <BookingCard img={image2} />
            </div>
        </div>
    );
};

export default MyExperienceTabContent;