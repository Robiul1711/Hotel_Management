import img1 from '@/assets/images/hotel1.png';
import img2 from '@/assets/images/hotel2.png';
import element from '@/assets/images/element2.png';
import CardSlider from '../common/CardSlider';

const data = [
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores1',
        location: 'Lonavala',
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores2',
        location: 'Lagos, Nigeria',
    },
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores3',
        location: 'Lonavala',
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores4',
        location: 'Lagos, Nigeria',
    },
    {
        img: img1,
        title: 'Tropical Adventures and Sun-Kissed Shores5',
        location: 'Lagos, Nigeria',
    },
    {
        img: img2,
        title: 'Tropical Adventures and Sun-Kissed Shores6',
        location: 'Lagos, Nigeria',
    },
    {
        img: img1,
        title: 'The Hich Hotel',
        location: 'Lagos, Nigeria',
    },
    {
        img: img2,
        title: 'The Hich Hotel',
        location: 'Lagos, Nigeria',
    }
]

const HotelResort = () => {
    return (
        <div className='relative'>
            <p className="text-[32px] text-secondary">Hotels & Resorts</p>
            <CardSlider data={data} />
            <div className="flex justify-center">
                <button className="bg-primary text-white md:px-16  md:py-3 rounded-full hover:bg-orange-600 transition-all">
                    View All
                </button>
            </div>
            <img className='absolute -bottom-20 -left-20' src={element} alt="" />
        </div>
    );
};

export default HotelResort;