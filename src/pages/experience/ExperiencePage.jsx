import ExperienceBanner from '@/components/experience/ExperienceBanner';
import CommonPageWrapper from '@/lib/CommonPageWrapper';
import { MenuIcons } from '@/lib/CustomIcons';
import element from '@/assets/images/element4.png';
import HealthWellness from '@/components/experience/HealthWellness';
import Outdoor from '@/components/experience/Outdoor';
import Food from '@/components/experience/Food';
import SectionBanner from '@/components/home/SectionBanner';
import { Helmet } from 'react-helmet-async';

const ExperiencePage = () => {
    return (
        <div>
            <Helmet>
                <title>Experiences</title>
            </Helmet>
            <ExperienceBanner />
            <CommonPageWrapper>
                <div className='mt-12'>
                    <div className="flex items-center justify-between">
                        <p className="text-primary text-5xl">
                            Hich Experiences
                        </p>
                        <div className="flex items-center">
                            <img src={element} alt="" />
                            <div className="">
                                <button className='border py-3 px-3 rounded-xl shadow-md flex items-center gap-3'>
                                    <MenuIcons />
                                    Filters
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <HealthWellness />
                <Outdoor />
                <Food />
            </CommonPageWrapper>
            <SectionBanner />
        </div>
    );
};

export default ExperiencePage;