import CardSlider from '../common/CardSlider';
import img1 from '@/assets/images/food1.png';
import img2 from '@/assets/images/food2.png';
import { FireIcons, MediIcons, SpoonIcons } from '@/lib/CustomIcons';
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

const Food = () => {
    return (
        <div className='relative'>
            <div className="flex justify-between">
                <p className="text-[32px] text-secondary">Food & Culinary</p>
                <SpoonIcons />
            </div>
            <CardSlider data={data} cardNo={2} />
            <div className="flex justify-center">
                <button className="bg-primary text-white md:px-16  md:py-3 rounded-full hover:bg-orange-600 transition-all">
                    View All
                </button>
            </div>
        </div>
    );
};

export default Food;