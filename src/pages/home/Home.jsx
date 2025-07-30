
import CommonPageWrapper from '@/lib/CommonPageWrapper';

import Banner from '@/components/home/Banner';
import App from '@/components/home/App';
import Service from '@/components/home/Service';
import Stays from '@/components/home/Stays';
import Gallery from '@/components/home/Gallery';
import Choose from '@/components/home/Choose';
import SectionBanner from '@/components/home/SectionBanner';
import MobileGallery from '@/components/home/MobileGallery';
import { Helmet } from 'react-helmet-async';
import LuxuryVila from '@/components/home/LuxuryVila';
import Celebrate from '@/components/home/Celebrate';
import { ScrollRestoration } from 'react-router-dom';
import PromotionalBanner2 from '@/components/common/PromotionalBanner2';


const Home = () => {
  return (
    <div className=''>
      <ScrollRestoration/>
      <Helmet>
        <title>HICH</title>
      </Helmet>
      {/* <div
        className="bg-secondary text-white text-[20px] py-3 text-center">
        <span className="font-plus font-extralight">
          FLAT 50% OFF on 2nd night on our newest escapes.
        </span>
        <span className="">
          Use code: HICHUNHOTEL
        </span>
      </div> */}
      <Banner />
      <CommonPageWrapper>
        <App />
        <Stays />
        <PromotionalBanner2 />
        {/* <Experience /> */}
        <LuxuryVila/>
        <Gallery />
        <Celebrate/>
        <Choose />
        <Service />

        <MobileGallery />
        
      </CommonPageWrapper>
      <SectionBanner />
    </div >
  );
};

export default Home;