import element from '@/assets/images/element3.png';
import { FireIcons, MediIcons, SpoonIcons } from '@/lib/CustomIcons';
import { icons } from 'lucide-react';

const data = [
    {
        id: 1,
        title: 'Health & Wellness',
        desc: 'Gyms, Yoga & Meditation, Retreats',
        icon: <MediIcons />
    },
    {
        id: 2,
        title: 'Adventure & Outdoor',
        desc: 'Amusement Park, Bungee Jumping',
        icon: <FireIcons />
    },
    {
        id: 3,
        title: 'Food & Culinary',
        desc: 'Restaurants, Bakery',
        icon: <SpoonIcons />
    }
]

const Keypoints = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div className='space-y-14'>
                    <p className="text-primary text-5xl">
                        Explore Hich Beyond Walls
                    </p>
                    <p className="text-[#747474] text-[28px]">
                        Experience curated moments—both complimentary and premium—that <br /> elevate your stay, effortlessly.
                    </p>
                </div>
                <div className="">
                    <img src={element} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 ">
                {
                    data?.map((item) => (
                        <div key={item.id} className="flex items-center gap-2  justify-center">
                            <div className="">
                                {item?.icon}
                            </div>
                            <div className="">
                                <p className="text-[28px]">{item?.title}</p>
                                <p className="text-gray-400 text-[20px]">{item?.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Keypoints;